import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Simulator } from "./pages/Simulator";
import { Marketplace } from "./pages/Marketplace";
import { SolarFinancing } from "./pages/SolarFinancing";
import { Reports } from "./pages/Reports";
import { PlatformLayout } from "./layouts/PlatformLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/platform",
    Component: PlatformLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "simulator", Component: Simulator },
      { path: "marketplace", Component: Marketplace },
      { path: "financing", Component: SolarFinancing },
      { path: "reports", Component: Reports },
    ],
  },
]);
