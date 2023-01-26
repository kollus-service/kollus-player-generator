import React, { useEffect, useState, useCallback } from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import AlertTitle from "@mui/material/AlertTitle";
import useInfoStore from "../../store/info";
import useErrorCodeStore from "../../store/error";

const PlayerView = (props) => {
  const { src, generateVodSrc } = useInfoStore();
  const { load, setLoad, error, setError, errorList } = useErrorCodeStore();

  const [info, setInfo] = useState({
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

  const errorHandler = useCallback(() => {
    let controller = new VgControllerClient({
      target_window: document.getElementById("kollus-player").contentWindow,
    });

    const timer = setTimeout(() => {
      setError(true);
    }, 5 * 1000);

    controller.on("ready", () => {
      setLoad(false);
      clearTimeout(timer);
      updateInfo("status", "success");
      updateInfo("errorCode", null);
    });

    controller.on("play", () => {});

    controller.on("error", (code) => {
      updateInfo("status", "error");
      updateInfo("errorCode", Math.abs(code));
    });
  }, [load]);

  useEffect(() => {
    setLoad(true);
    generateVodSrc();

    return () => {}
  }, []);

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
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allow="encrypted-media"
      ></iframe>
      <Alert
        severity={load === true ? "info" : info.status}
        sx={{
          "& .MuiAlert-message": {
            width: "100%",
          },
        }}
      >
        <Stack spacing={2} justifyContent="space-between">
          <AlertTitle>
            {load === true
              ? "Check..."
              : info.status.charAt(0).toUpperCase() + info.status.slice(1)}
          </AlertTitle>

          {load === false && errorList[info.errorCode] && (
            <pre>{errorList[info.errorCode].msg}</pre>
          )}

          {load === false && errorList[info.errorCode] && (
            <Button
              target="_blank"
              variant="contained"
              color="warning"
              sx={{ margin: "0 2px", padding: "0 4px", width: "100%" }}
            >
              {errorList[info.errorCode].desc}
            </Button>
          )}

          {error === true && (
            <pre>
              {
              "에러로 인해 플레이어 로딩이 되지 않았습니다. \n"+
              "화면의 에러코드는 "}
              <Link color="inherit" href="https://catenoid-wiki.atlassian.net/wiki/spaces/SUP/pages/2720559" target="_blank">
                해당 페이지
              </Link>
              {
              "에서 검색이 가능합니다. \n\n"+
              "추가사항은 메일로 문의 부탁드립니다. \n"+
              "tech_support@catenoid.net"
              }
            </pre>
          )}
        </Stack>
      </Alert>
    </Stack>
  );
};

export default PlayerView;
