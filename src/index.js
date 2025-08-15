import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const root = createRoot(container);
import { LanguageProvider } from "./i18n/LanguageContext";
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

serviceWorker.unregister();
