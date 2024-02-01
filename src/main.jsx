import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import TrendingMoviesDetails from "./Components/TrendingMovies/TrendingMoviesDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/trendingMoviesDetails/:id",
        element : <TrendingMoviesDetails></TrendingMoviesDetails>,
        loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
