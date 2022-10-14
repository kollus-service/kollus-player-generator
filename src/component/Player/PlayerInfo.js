import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Stack from "@mui/material/Stack";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
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

export default function PlayerInfo() {
  const [value, setValue] = useState(0);
  const [multidrm, setMultidrm] = useState("");
  const [supported, setSupported] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const setMultidrmLocalStorage = () => {
    setMultidrm(localStorage.getItem("player_multidrm"));
  }

  const setSupportedLocalStorage = () => {
    setSupported(localStorage.getItem("player_supported"));
  }

  useEffect(() => {
    // Perform localStorage action
    setMultidrmLocalStorage();
    setSupportedLocalStorage();
  }, [])

  return (
    <>
      <Stack width={"400px"} spacing={2}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab label="콘텐츠 확인" {...a11yProps(0)} />
            <Tab label="Supported" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel component="div" value={value} index={0}>
          {`mckey 및 보안 키, 사용자 키 저장`}
        </TabPanel>
        <TabPanel component="div" value={value} index={1}>
          <div>{multidrm}</div>
          <div>{supported}</div>
        </TabPanel>
      </Stack>
    </>
  );
}
