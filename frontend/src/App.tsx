import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import useTheme from './hooks/useTheme';
import InvoiceCreate from './pages/InvoiceCreate/InvoiceCreate';
import InvoiceDetails from './pages/InvoiceDetails/InvoiceDetails';
import Invoices from './pages/Invoices/Invoices';
import { ContainerPages, Main } from './styles/style';
import { lightTheme, darkTheme } from './theme/themes';

const App = () => {
  const { theme, themeToggler } = useTheme();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Main>
        <Sidebar />
        <ContainerPages>
          <Routes location={state?.backgroundLocation || location}>
            <Route path="/" element={<Invoices />} />
            <Route path="/details/:invoiceId" element={<InvoiceDetails />} />
          </Routes>
          {state?.backgroundLocation && (
            <Routes>
              <Route path="/create" element={<InvoiceCreate />} />
            </Routes>
          )}
        </ContainerPages>
      </Main>
    </ThemeProvider>
  );
};

export default App;
