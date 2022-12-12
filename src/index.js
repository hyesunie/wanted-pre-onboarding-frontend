import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./components/templates/GlobalStyle";
import ErrorPage from "./pages/ErrorPage";
import HomePage, { loader as homeLoader } from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: homeLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
