import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import Checkbox from "@mui/material/Checkbox";
import LinkIcon from "@mui/icons-material/Link";
import Accordion from "@mui/material/Accordion";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextareaAutosize from "@mui/base/TextareaAutosize";
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
    payload,
    multiDrmOption,
    setMultiDrmOption,
    advancedOption,
    setAdvancedOption,
    setVodInfo,
    generateVodSrc,
  } = useInfoStore();
  const [contentLink, setContentLink] = useState();
  const [iframe, setIframe] = useState("");

  const [values, setValues] = useState({
    vodSecurity: "",
    vodCustomer: "",
    payload: "",
    mckey: "",
    src: "",
    inkaAccessKey: "",
    inkaSiteKey: "",
    inkaSiteID: "",
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

    if (multiDrmOption === true) {
      newInfo.inkaAccessKey = JSON.parse(values.inkaAccessKey);
      newInfo.inkaSiteKey = JSON.parse(values.inkaSiteKey);
      newInfo.inkaSiteID = JSON.parse(values.inkaSiteID);
    }

    if (advancedOption === true) {
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
        vodSecurity: localStorage.getItem("vodSecurity")?localStorage.getItem("vodSecurity"):"",
        vodCustomer: localStorage.getItem("vodCustomer")?localStorage.getItem("vodCustomer"):"",
        inkaAccessKey: localStorage.getItem("inkaAccessKey")?localStorage.getItem("inkaAccessKey"):"",
        inkaSiteKey: localStorage.getItem("inkaSiteKey")?localStorage.getItem("inkaSiteKey"):"",
        inkaSiteID: localStorage.getItem("inkaSiteID")?localStorage.getItem("inkaSiteID"):"",
        payload: JSON.stringify(payload, null, 2),
      };
    });
  };

  const initialContentLink = (contentLink) => {
    setContentLink(contentLink);
  };

  const toggleMultiDRMOption = () => {
    setMultiDrmOption((prevState) => {
      return !prevState;
    });
  };

  const toggleAdvancedOption = () => {
    setAdvancedOption((prevState) => {
      return !prevState;
    });
  };

  const initialIframe = (source) => {
    setIframe(
      `<iframe id="kollus-player" className="kollus-player" width="640" height="480" src="${source}" frameBorder="0" allowFullScreen></iframe>`
    );
  };

  useEffect(() => {
    initialValues();
    initialIframe(src);
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
          label={advancedOption?"Payload 사용 중":"Media Contents Key"}
          value={advancedOption === true?"":values.mckey}
          onChange={changeHandler("mckey")}
          disabled={advancedOption === true}
        />

        {multiDrmOption===true && 
          (<>
              <Divider>Multi DRM</Divider>
            <TextField
              id="inkaAccessKey"
              label={advancedOption?"Payload 사용 중":"INKA Access Key"}
              value={advancedOption === false?values.inkaAccessKey:""}
              onChange={changeHandler("inkaAccessKey")}
              disabled={advancedOption === true}
            />
          </>)
        }

        {multiDrmOption===true && 
          (<TextField
            id="inkaSiteKey"
            label={advancedOption?"Payload 사용 중":"INKA Site Key"}
            value={advancedOption === false?values.inkaSiteKey:""}
            onChange={changeHandler("inkaSiteKey")}
            disabled={advancedOption === true}
          />)
        }

        {multiDrmOption===true && 
          (<TextField
            id="inkaSiteID"
            label={advancedOption?"Payload 사용 중":"INKA Site ID"}
            value={advancedOption === false?values.inkaSiteID:""}
            onChange={changeHandler("inkaSiteID")}
            disabled={advancedOption === true}
          />)
        }
        <Button
          variant="contained"
          onClick={setContentHandler}
          sx={{
            backgroundColor: "confirm.main",
            "&:hover": {
              backgroundColor: "confirm.hover",
            },
          }}
        >
          콘텐츠 확인
        </Button>
        <Button
          variant="contained"
          startIcon={<LinkIcon />}
          onClick={() => {
            navigator.clipboard.writeText(src);
          }}
          sx={{ width: "100%", mb: 1 }}
        >
          URL 복사
        </Button>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Advanced Option</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="contentCode"
              label="iFrame 태그 확인"
              multiline
              defaultValue={iframe}
              InputProps={{
                // readOnly: true,
                style: { fontSize: "12px" },
              }}
              rows={6}
              variant="filled"
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {/*
              Query String 도 추가?
            */}
            <FormControlLabel
              control={<Checkbox onChange={toggleMultiDRMOption} />}
              label="MultiDRM 적용"
            />
            <FormControlLabel
              control={<Checkbox onChange={toggleAdvancedOption} />}
              label="payload 적용"
            />
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
      </Stack>
    </>
  );
}
