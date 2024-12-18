import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route }from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename = "/MichaelsWebsite/">
      <Routes>
        <Route path="*" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
