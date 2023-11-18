import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TimeProvider } from "./contexts/timeContext.jsx";
import { FontProvider } from "./contexts/fontContext.jsx";
import { ColourProvider } from "./contexts/colourContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimeProvider>
      <FontProvider>
        <ColourProvider>
          <App />
        </ColourProvider>
      </FontProvider>
    </TimeProvider>
  </React.StrictMode>
);
