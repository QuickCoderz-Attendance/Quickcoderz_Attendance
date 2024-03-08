import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import lightTheme from "./assets/theme/index";
import darkTheme from "./assets/theme-dark/index";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <CssBaseline />
      <Routes>
        <Route path="/" element={<Dashboard change={() => setDarkMode(!darkMode)} />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
