import React from "react";
import AppRoutes from "./routes/appRoutes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./components/shared-ui-components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
