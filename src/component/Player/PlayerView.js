import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import useInfoStore from "../../store/info";
import { generateJwt } from "../../util/jwt";

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
  const [iframe, setIframe] = useState("");

  const initialIframe = (source) => {
    setIframe(
      `<iframe id="kollus-player" className="kollus-player" width="640" height="480" src="${source}" frameBorder="0" allowFullScreen></iframe>`
    );
  };

  useEffect(() => {
    generateSrc();
    initialIframe(src);
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>태그 보기</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            id="contentCode"
            label="iFrame Tag"
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
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default PlayerView;
