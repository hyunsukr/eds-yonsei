/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Home from "pages/Presentation";

// Material Kit 2 React routes
import routes from "routes";
import Assessment from "pages/LandingPages/Lab/sections/research/assessment";
import AIBasedAIG from "pages/LandingPages/Lab/sections/research/aibasedaig";
import ClassAnalytics from "pages/LandingPages/Lab/sections/research/classanalytics";
import BSDBCERP2023 from "pages/LandingPages/Lab/sections/projects/BSDBCERP2023";
import ASAN2023 from "pages/LandingPages/Lab/sections/projects/2023asan";
import GangwonStudent2023 from "pages/LandingPages/Lab/sections/projects/gangwoneducation2023";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/home" element={<Home />} />
        <Route path="/research/assessment" element={<Assessment />} />
        <Route path="/research/AIBasedAIG" element={<AIBasedAIG />} />
        <Route path="/research/class-analytics" element={<ClassAnalytics />} />
        <Route path="/projects/2022basiceducationreinforcement" element={<BSDBCERP2023 />} />
        <Route path="/projects/2023asan" element={<ASAN2023 />} />
        <Route path="/projects/2023gangwoneducation" element={<GangwonStudent2023 />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}
