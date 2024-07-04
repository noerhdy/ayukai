import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import { ThemeProvider } from "../../components/theme-provider";
import "non.geist/mono";

const RoutesConfig = () => {
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
