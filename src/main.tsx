import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import Products from "./pages/Products.tsx";
import Orders from "./pages/Orders.tsx";
import Settings from "./pages/Settings.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* renders into the outlet in <App> at "/" */}
          <Route index element={<Home />} />

          <Route path="dashboard">
            <Route element={<DashboardLayout />}>
              <Route path=":cid/products" element={<Products />} />
              <Route path=":cid/orders" element={<Orders />} />
              <Route path=":cid/settings" element={<Settings />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
