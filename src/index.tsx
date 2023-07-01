import React from "react";
import ReactDOM from "react-dom/client";
import ResumePortfolio from "./ResumePortfolio";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ResumePortfolio />
  </React.StrictMode>
);
