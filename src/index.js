import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";

import i18n from './18n';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();