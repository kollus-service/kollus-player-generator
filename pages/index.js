import * as React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Copyright from "../src/component/Copyright";
import TabMenu from "../src/component/Player/TabMenu";
import PlayerView from "../src/component/Player/PlayerView";
import ToggleColorMode from "../src/component/Theme/ToggleColorMode.";

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
        <Copyright />
      </Stack>
    </Container>
  );
}
