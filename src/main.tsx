import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About.tsx";
// import Root from "./routes/root.tsx";

// const router = createBrowserRouter([
//   { path: "/about", element: <About /> },
//   { path: "/", element: <Root /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);