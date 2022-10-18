import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useInfoStore from "../../../store/info";

export default function InfoPanel() {
  const { src, cuid, mckey, security, customer, setInfo, generateSrc } = useInfoStore();
  const [contentLink, setContentLink] = useState();

  const [values, setValues] = useState({
    security: "",
    customer: "",
    mckey: "",
    src: "",
    showSecurity: false,
    showCustomer: false,
  });

  const changeHandler = (prop) => (event) => {
    localStorage.setItem(prop, event.target.value)
    setValues({ ...values, [prop]: event.target.value });
  };

  const securityShowHandler = (key) => {
    setValues((prevState) => {
      if (key === "security") {
        prevState.showSecurity = !prevState.showSecurity;
      }

      if (key === "customer") {
        prevState.showCustomer = !prevState.showCustomer;
      }

      return {
        ...prevState,
      };
    });
  };

  const setContentHandler = () => {
    const newInfo = {security:values.security, customer: values.customer, mckey: values.mckey};
    setInfo(newInfo);
    generateSrc();
  }

  const preventHandler = (event) => {
    event.preventDefault();
  };

  const initialValues = () => {
    setValues((prevState) => {
      return {
        ...prevState,
        security: localStorage.getItem("security"),
        customer: localStorage.getItem("customer"),
      }
    })
  }

  const initialContentLink = (contentLink) => {
    setContentLink(contentLink);
  }

  useEffect(() => {
    initialValues();
    initialContentLink(src);
  }, [src]);

  return (
    <>
      {/* {`mckey 및 보안 키, 사용자 키 저장`} */}
      <Stack spacing={2}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="security">서비스 계정 키</InputLabel>
          <OutlinedInput
            id="security"
            label="서비스 계정 키"
            type={values.showSecurity ? "text" : "password"}
            value={values.security}
            onChange={changeHandler("security")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => securityShowHandler("security")}
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
          <InputLabel htmlFor="customer">사용자 키</InputLabel>
          <OutlinedInput
            id="customer"
            label="사용자 키"
            type={values.showCustomer ? "text" : "password"}
            value={values.customer}
            onChange={changeHandler("customer")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => securityShowHandler("customer")}
                  onMouseDown={preventHandler}
                  edge="end"
                >
                  {values.showCustomer ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField id="mckey" label="미디어 컨텐츠 키" 
        value={values.mckey}
        onChange={changeHandler("mckey")}
        />
        <TextField
          id="src"
          label="영상 링크"
          multiline
          defaultValue={contentLink}
          InputProps={{
            readOnly: true,
            style: {fontSize: "0.8rem"}
          }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={changeHandler("src")}
          rows={6}
          variant="filled"
        />
        <Button variant="contained" onClick={setContentHandler}>콘텐츠 확인</Button>
      </Stack>
    </>
  );
}
