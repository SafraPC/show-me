import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
};

export default App;
