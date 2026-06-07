// Imports React, which is needed to use React features
import React from "react";

// Imports ReactDOM so React can display the app inside the browser
import ReactDOM from "react-dom/client";

// BrowserRouter allows the website to use page routing/navigation
import { BrowserRouter } from "react-router-dom";

// Imports the main App component that contains the website layout and routes
import App from "./App";

// Imports the main CSS file for styling the whole website
import "./design.css";

// Finds the root element in index.html and renders the React app inside it
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wraps the App with BrowserRouter so Link and Routes work properly
  <BrowserRouter>
    <App />
  </BrowserRouter>
);