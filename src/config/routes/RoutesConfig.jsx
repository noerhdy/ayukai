import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import { ThemeProvider } from "../../components/theme-provider";
import "non.geist/mono";
import { useEffect } from "react";
import { trackPageView } from "../../pages/Analytics";

const RoutesConfig = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
};

const AppWrapper = () => (
  <Router>
    <RoutesConfig />
  </Router>
);

export default AppWrapper;
