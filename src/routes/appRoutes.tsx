import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../components/shared-layouts/DefaultLayout";
import WorkInProgress from "../components/shared-ui-components/WorkInProgress";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";
import React from "react";
import Contact from "../pages/Contact";
import About from "../components/shared-containers/AboutUsContainer/About";
import Careers from "../components/shared-containers/CareerContainer/Career";
import Team from "../components/shared-containers/OurTeamContainer/Team";
import CorporateTax from "../pages/Services/test";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/CorporateTax", element: <CorporateTax /> },
        { path: "/services", element: <Services /> },
        { path: "/about-us", element: <About /> },
        { path: "/career", element: <Careers/> },
        { path: "/team", element: <Team /> },
        { path: "/contact-us", element: <Contact /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ],
  { basename: "/" }
);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
