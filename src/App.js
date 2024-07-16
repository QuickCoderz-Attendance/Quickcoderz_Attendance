import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Dashboard from "./views/dashboard/index";

import CustomTheme from "../src/assets/theme/index"
import DarkThemeColors from "./assets/theme/base/colors/dark-theme-colors";
import LightThemeColors from "./assets/theme/base/colors/light-theme-colors";
import { ThemeModeContext } from "./store/theme";
import { useContext } from "react";


const App = () => {

  const { darkMode } = useContext(ThemeModeContext);

  const modifiedTheme = {
    ...CustomTheme,
    palette: {
      ...CustomTheme.palette,
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode ? DarkThemeColors : LightThemeColors),
    },
  };

  return (
    <ThemeProvider theme={modifiedTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App;
