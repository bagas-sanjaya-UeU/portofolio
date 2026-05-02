import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TerminalContextProvider } from "react-terminal"; // Tambahkan ini
import React from 'react';
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TerminalContextProvider> {/* Bungkus App di sini */}
      <App />
    </TerminalContextProvider>
  </React.StrictMode>,
)