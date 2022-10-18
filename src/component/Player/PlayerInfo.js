import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Stack from "@mui/material/Stack";
import InfoPanel from "./Panel/InfoPanel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PlayerInfo(props) {
  const [value, setValue] = useState(0);
  const [multidrmCheck, setMultidrmCheck] = useState("");
  const [typeCheck, setTypeCheck] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const multidrmCheckHandler = (message) => {
    setMultidrmCheck(message);
  };

  const typeCheckHandler = (message) => {
    setTypeCheck(message);
  };

  useEffect(() => {
    // Perform localStorage action
    const videoElement = document.createElement("video");

    try {
      navigator
        .requestMediaKeySystemAccess("com.widevine.alpha", config)
        .then(function (mediaKeySystemAccess) {
          multidrmCheckHandler("Widevine Supported");
        })
        .catch(function (e) {});
    } catch (e) {}

    try {
      navigator
        .requestMediaKeySystemAccess("com.microsoft.playready", config)
        .then(function (mediaKeySystemAccess) {
          multidrmCheckHandler("PlayReady Supported");
        })
        .catch(function (e) {});
    } catch (e) {}

    try {
      videoElement.webkitSetMediaKeys(
        new window.WebKitMediaKeys("com.apple.fps.1_0")
      );
      multidrmCheckHandler("Fairplay Supported");
    } catch (e) {}

    if (multidrmCheck) {
      multidrmCheckHandler("MultiDrm Not Supported");
    }

    try {
      const playType = videoElement.canPlayType("video/mp4");
      if (playType != "") {
        typeCheckHandler("mp4 video Supported");
      }
    } catch (e) {
      typeCheckHandler("mp4 video not Supported");
    }
  }, []);

  return (
    <>
      <Stack width={"400px"} spacing={2}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab label="콘텐츠 확인" {...a11yProps(0)} />
            <Tab label="Supported" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel component="div" value={value} index={0}>
          <InfoPanel setInfo={props.setInfo}/>
        </TabPanel>
        <TabPanel component="div" value={value} index={1}>
          <div>{multidrmCheck}</div>
          <div>{typeCheck}</div>
        </TabPanel>
      </Stack>
    </>
  );
}
