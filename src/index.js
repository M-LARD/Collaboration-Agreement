import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Global, MantineProvider } from '@mantine/core';

import { Auth0Provider } from "@auth0/auth0-react"; 



function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': { boxSizing: 'border-box' },
      })}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{
    colorScheme: 'dark',
    fontFamily: 'sans-serif',
    spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
    fontSizes: {
      xs: 12,
      sm: 16,
      md: 22,
      lg: 24 ,
      xl: 28,
    },
    breakpoints: {
      xs: 500,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
  }}>
    <MyGlobalStyles/>
    <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
      <App />
      </Auth0Provider>
    </MantineProvider>
);


