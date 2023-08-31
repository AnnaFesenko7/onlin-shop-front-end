import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { theme } from 'constants/styleTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/onlin-shop-front-end">
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
