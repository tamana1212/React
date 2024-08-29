import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const appRouter = createBrowserRouter([
    {
      element: <AppLayout search={search} setSearch={setSearch} />, // Wrapping layout component
      children: [
        {
          path: "/", // Route for Home page
          element: <Home search={search} />,
        },
        {
          path: "about", // Route for About page
          element: <About />,
        },
      ],
    },
  ]);
  
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
