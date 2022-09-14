import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Global, MantineProvider } from '@mantine/core';
import styled from '@emotion/styled';



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
      <App />
    </MantineProvider>
);


