import { RoutesConfig } from "../config";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-YWLZCC3289`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-YWLZCC3289");
    };
  }, []);

  return (
    <>
      <RoutesConfig />
    </>
  );
}

export default App;
