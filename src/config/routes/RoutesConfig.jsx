import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import { ThemeProvider } from "../../components/theme-provider";
import "non.geist/mono";
import ReactGA from "react-ga4";

const RoutesConfig = () => {
  ReactGA.initialize("G-YWLZCC3289");

  useEffect(() => {
    if (userHasConsentedToCookies()) {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  const userHasConsentedToCookies = () => {
    // Implementasi logika untuk mengecek apakah pengguna telah memberikan persetujuan
    // Misalnya, cek apakah cookie consent telah disetujui dalam local storage atau cookie
    return localStorage.getItem("cookieConsent") === "true";
  };

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
