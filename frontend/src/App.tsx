import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import { useTheme } from "./hooks/useTheme";
import Invoices from "./pages/Invoices/Invoices";
import { Main } from "./styles/style";
import { lightTheme, darkTheme } from "./theme/themes";

function App() {
  const { theme, themeToggler } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Main>
        <Sidebar />
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<Invoices />} />
        </Routes>
        </div>
       
      </Main>
    </ThemeProvider>
  );
}

export default App;
