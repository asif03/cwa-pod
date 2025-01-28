import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Home from "./pages/Home.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* renders into the outlet in <App> at "/" */}
          <Route index element={<Home />} />

          <Route path="dashboard">
            <Route element={<DashboardLayout />}>
              <Route path=":cid" element={<Dashboard />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
