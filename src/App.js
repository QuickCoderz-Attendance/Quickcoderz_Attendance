import { useContext} from "react";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./assets/theme/index";
import darkTheme from "./assets/theme-dark/index";
import { CssBaseline } from "@mui/material";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./views/dashboard/index";
import {ThemeModeContext} from './store/theme'


const App = () => {

  const {darkMode} = useContext(ThemeModeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <CssBaseline />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
