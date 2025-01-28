import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Home from "./pages/Home.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* renders into the outlet in <App> at "/" */}
          <Route index element={<Home />} />

          {/*<Route path="dashboard" element={<Dashboard />}>*/}
          {/*  /!* renders into the outlet in <Dashboard> at "/dashboard" *!/*/}
          {/*  <Route index element={<DashboardHome />} />*/}
          {/*  <Route path="settings" element={<Settings />} />*/}
          {/*</Route>*/}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
