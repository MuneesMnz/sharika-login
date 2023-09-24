import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/home",
//         element: <Home />,
//       },
//   {
//     path: "/",
//     element: <Login />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>,
);
