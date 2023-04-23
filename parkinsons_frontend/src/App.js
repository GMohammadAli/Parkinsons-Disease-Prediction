import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";

const theme = createTheme({
  // backgroundColor: "#FFF4CF",
  palette: {
    secondary: {
      main: "#8338ec",
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
        // sx={{ backgroundColor: "#FFF4CF" }}
        >
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <ToastContainer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
