import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import ErrorPage from "./pages/ErroPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [search, setSearch] = useState("");
  const appRouter = createBrowserRouter([
    {
      element: <AppLayout search={search} setSearch={setSearch} />, 
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home search={search} />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "product/:id",
          element: <ProductDetails />,
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
