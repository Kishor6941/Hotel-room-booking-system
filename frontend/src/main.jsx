import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // 👈 Required for dropdowns

createRoot(document.getElementById("root")).render(
  // <StrictMode>
 
  <BrowserRouter>
      <ToastContainer autoClose={2000} />
      <App />
  </BrowserRouter>
  
  // </StrictMode>,
);
