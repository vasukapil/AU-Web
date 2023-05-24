import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: "#002d62",
        },
      },
    },
  },
});

export default theme;
