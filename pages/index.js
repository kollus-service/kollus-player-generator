import * as React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Copyright from "../src/component/Copyright";
import ToggleColorMode from "../src/component/Theme/ToggleColorMode.";
import PlayerView from "../src/component/Player/PlayerView";
import TabMenu from "../src/component/Player/TabMenu";

export default function Index(props) {
  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <ToggleColorMode toggleColorMode={props.toggleColorMode}/>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 6, mb: 6, height: "600px" }}
        >
          <PlayerView />
          <TabMenu />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
          {/* <ErrorView /> */}
          {/* <ErrorInfo /> */}
        </Stack>
        <Copyright />
      </Stack>
    </Container>
  );
}
