import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // Portuguese (Brazilian) locale
import locale from "antd/es/locale/pt_PT";
import { AuthProvider } from './context/AuthContext';

dayjs.locale("pt-br");

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#D03737',

            },
          }} locale={locale}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);