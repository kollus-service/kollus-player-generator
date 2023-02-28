import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      width={"100%"}
      maxWidth={props.maxWidth}
      sx={{ my: 10 }}
    >
      <Link color="inherit" href="https://github.com/kollus-service/kollus-player-generator" target="_blank">
        Github Repository
      </Link>
      {" / "}
      <Link color="inherit" href="https://catenoid-wiki.atlassian.net/wiki/spaces/SUP/pages/2720559" target="_blank">
        Error Code
      </Link>
      <br/>
      {"Copyright © "}
      <Link color="inherit" href="https://www.catenoid.net" target="_blank">
        Catenoid
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
