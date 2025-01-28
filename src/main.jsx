import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "sweetalert2/src/sweetalert2.scss";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import resources from "./translations/index.js";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  fallbackLng: "en",
  resources: resources,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
