import '../style/fonts.css';
import 'tailwindcss/tailwind.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';

import Header from '../components/Header';

const theme = createMuiTheme({});

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="flex flex-col h-screen bg-gray-200">
          <Header />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
