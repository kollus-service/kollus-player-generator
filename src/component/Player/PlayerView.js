import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import AlertTitle from "@mui/material/AlertTitle";
import useInfoStore from "../../store/info";
import useErrorCodeStore from "../../store/error";

const PlayerView = (props) => {
  const { src, generateVodSrc } = useInfoStore();
  const { errorList } = useErrorCodeStore();

  const [info, setInfo] = useState({
    load: true,
    status: "success",
    errorCode: null,
  });

  const updateInfo = (key, value) => {
    setInfo((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const errorHandler = () => {
    let controller = new VgControllerClient({
      target_window: document.getElementById("kollus-player").contentWindow,
    });

    controller.on("ready", () => {
      updateInfo("load", false);
      updateInfo("status", "success");
      updateInfo("errorCode", null);
    });

    controller.on("play", () => {});

    controller.on("error", (code) => {
      updateInfo("status", "error");
      updateInfo("errorCode", Math.abs(code));
    });
  };

  useEffect(() => {
    updateInfo("load", true);
    generateVodSrc();
  }, [src]);

  return (
    <Stack spacing={2}>
      <iframe
        id="kollus-player"
        className="kollus-player"
        onLoad={errorHandler}
        width="640"
        height="480"
        src={src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Alert
        severity={info.load === true ? "info" : info.status}
        sx={{ width: "100%" }}
      >
        <Stack spacing={2} justifyContent="space-between">
          <AlertTitle>
            {info.load === true
              ? "Check..."
              : info.status.charAt(0).toUpperCase() + info.status.slice(1)}
          </AlertTitle>

          {info.load === false && errorList[info.errorCode] && (
            <pre>{errorList[info.errorCode].msg}</pre>
          )}

          {info.load === false && errorList[info.errorCode] && (
            <Button
              target="_blank"
              href={errorList[info.errorCode].url}
              variant="contained"
              color="warning"
              sx={{ margin: "0 2px", padding: "0 4px" }}
            >
              해결방법 자세히 보기
            </Button>
          )}
        </Stack>
      </Alert>
    </Stack>
  );
};

export default PlayerView;
