import ReactGA from "react-ga4";

const TRACKING_ID = "G-YWLZCC3289"; // Gantilah dengan ID Pelacakan GA4 Anda
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};
