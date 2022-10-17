import * as React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Copyright from "../src/component/Copyright";
import PlayerView from "../src/component/Player/PlayerView";
import PlayerInfo from "../src/component/Player/PlayerInfo";

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} sx={{mt:6, mb:6}}>
          <PlayerView/>
          <PlayerInfo/>
        </Stack>
        {/* <ErrorInfo /> */}
        <Copyright />
      </Stack>
    </Container>
  );
}
