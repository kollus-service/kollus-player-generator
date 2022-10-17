import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import useInfoStore from "../../store/info";
import {generateJwt} from "../../util/jwt";

const errorHandler = () => {
  let controller = new VgControllerClient({
    //getElementById 값의 영상이 나올 iframe의 id값을 넣으시면 됩니다.
    target_window: document.getElementById("kollus-player").contentWindow,
  });

  controller.on("ready", function () {
    localStorage.setItem("player_id", controller.get_player_id());
  });

  controller.on("error", function (code) {
    localStorage.setItem("player_error", code);
  });
};

const PlayerView = (props) => {
  const { src, generateSrc } = useInfoStore();

  useEffect(() => {
    generateSrc();
  }, [])

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
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
    </Box>
  );
};

export default PlayerView;
