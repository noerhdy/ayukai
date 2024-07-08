import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import { ThemeProvider } from "../../components/theme-provider";
import "non.geist/mono";
import ReactGA from "react-ga4";

const RoutesConfig = () => {
  // Inisialisasi ReactGA dengan ID Pelacakan GA4
  ReactGA.initialize("G-YWLZCC3289");

  useEffect(() => {
    // Melacak halaman yang dilihat saat komponen dimuat
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default RoutesConfig;
