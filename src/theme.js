import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = (mode) => {
  // default theme is dark
  if (!mode) mode = "dark";

  return {
    palette: {
      mode,
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
      neutral: {
        main: '#000000',
        contrastText: '#fff',
      },
    },
  };
};

export default theme;
