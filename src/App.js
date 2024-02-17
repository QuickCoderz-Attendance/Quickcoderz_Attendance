import { Routes, Route} from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1e293b',
        light: '#ffffff',
        dark: '#0f172a',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
