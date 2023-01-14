import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputAdornment from "@mui/material/InputAdornment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import FormControlLabel from "@mui/material/FormControlLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useInfoStore from "../../../store/info";

export default function VodPanel() {
  const {
    src,
    cuid,
    mckey,
    vodSecurity,
    vodCustomer,
    payload,
    advancedOption,
    setAdvancedOption,
    setVodInfo,
    generateVodSrc,
  } = useInfoStore();
  const [contentLink, setContentLink] = useState();

  const [values, setValues] = useState({
    vodSecurity: "",
    vodCustomer: "",
    payload: "",
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
      mckey: values.mckey
    };

    if(advancedOption === true) {
      newInfo.payload = JSON.parse(values.payload.split("\n").join(""));
    }

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
        payload: JSON.stringify(payload, null, 2),
      };
    });
  };

  const initialContentLink = (contentLink) => {
    setContentLink(contentLink);
  };

  const toggleAdvancedOption = () => {
    setAdvancedOption((prevState) => {
      return !prevState;
    })
  };

  useEffect(() => {
    initialValues();
    initialContentLink(src);
    localStorage.setItem("payload", JSON.stringify(payload));
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
              Query String 도 추가
            */}
            <FormControlLabel control={<Checkbox onChange={toggleAdvancedOption}/>} label="payload 적용"/>
            <TextareaAutosize
            id="payload"
            label="payload"
            defaultValue={JSON.stringify(payload, null, 2)}
            onChange={changeHandler("payload")}
            rows={6}
            variant="filled"
            style={{ width: "100%" }}
          />
          </AccordionDetails>
        </Accordion>
        <Button variant="contained" onClick={setContentHandler}>
          콘텐츠 확인
        </Button>
      </Stack>
    </>
  );
}
