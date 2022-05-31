import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import { useTheme } from "./hooks/useTheme";
import { Main } from "./styles/style";
import { lightTheme, darkTheme } from "./theme/themes";

function App() {
  const { theme, themeToggler } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Main>
        <Sidebar />
      </Main>
    </ThemeProvider>
  );
}

export default App;
