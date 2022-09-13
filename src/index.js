import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Global, MantineProvider } from '@mantine/core';


function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': { boxSizing: 'border-box' },
        // ...other global styles
      })}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{
    colorScheme: 'light',
    fontFamily: 'sans-serif',
    breakpoints: {
      xs: 500,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
  }}>
    <MyGlobalStyles/>
      <App />
    </MantineProvider>
);


