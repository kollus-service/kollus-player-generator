import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useInfoStore from "../../../store/info";

export default function VodPanel() {
  const {
    src,
    cuid,
    mckey,
    vodSecurity,
    vodCustomer,
    setVodInfo,
    generateVodSrc,
  } = useInfoStore();
  const [contentLink, setContentLink] = useState();

  const [values, setValues] = useState({
    vodSecurity: "",
    vodCustomer: "",
    mckey: "",
    src: "",
    showSecurity: false,
    showCustomer: false,
  });

  const changeHandler = (prop) => (event) => {
    localStorage.setItem(prop, event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const vodSecurityShowHandler = (key) => {
    setValues((prevState) => {
      if (key === "vodSecurity") {
        prevState.showSecurity = !prevState.showSecurity;
      }

      if (key === "vodCustomer") {
        prevState.showCustomer = !prevState.showCustomer;
      }

      return {
        ...prevState,
      };
    });
  };

  const setContentHandler = () => {
    const newInfo = {
      vodSecurity: values.vodSecurity,
      vodCustomer: values.vodCustomer,
      mckey: values.mckey,
    };
    setVodInfo(newInfo);
    generateVodSrc();
  };

  const preventHandler = (event) => {
    event.preventDefault();
  };

  const initialValues = () => {
    setValues((prevState) => {
      return {
        ...prevState,
        vodSecurity: localStorage.getItem("vodSecurity"),
        vodCustomer: localStorage.getItem("vodCustomer"),
      };
    });
  };

  const initialContentLink = (contentLink) => {
    setContentLink(contentLink);
  };

  useEffect(() => {
    initialValues();
    initialContentLink(src);
  }, [src]);

  return (
    <>
      {/* {`mckey 및 보안 키, 사용자 키 저장`} */}
      <Stack spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="vodSecurity">Service Account Key</InputLabel>
          <OutlinedInput
            id="vodSecurity"
            label="Service Account Key"
            type={values.showSecurity ? "text" : "password"}
            value={values.vodSecurity}
            onChange={changeHandler("vodSecurity")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => vodSecurityShowHandler("vodSecurity")}
                  onMouseDown={preventHandler}
                  edge="end"
                >
                  {values.showSecurity ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="vodCustomer">Customer Key</InputLabel>
          <OutlinedInput
            id="vodCustomer"
            label="Customer Key"
            type={values.showCustomer ? "text" : "password"}
            value={values.vodCustomer}
            onChange={changeHandler("vodCustomer")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => vodSecurityShowHandler("vodCustomer")}
                  onMouseDown={preventHandler}
                  edge="end"
                >
                  {values.showCustomer ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="mckey"
          label="Media Contents Key"
          value={values.mckey}
          onChange={changeHandler("mckey")}
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Advanced Option</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/*
              수정 & 적용 기능
              여기에 JWT 넣고 생성하는 것 까지 가능한 스펙 만들기
              Query String 도 추가
            */}
          </AccordionDetails>
        </Accordion>
        <Button variant="contained" onClick={setContentHandler}>
          콘텐츠 확인
        </Button>
      </Stack>
    </>
  );
}
