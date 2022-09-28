import React from "react";
import { createRoot, render } from "react-dom/client";
import App from "./Components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
