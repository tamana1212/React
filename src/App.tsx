import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import ErrorPage from "./pages/ErroPage";
import ProductDetails from "./pages/ProductDetails";
import { Profile } from "./pages/Profile";
const InstaMart = lazy(() => import("./pages/InstaMart"));

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
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
        {
          path: "product/:id",
          element: <ProductDetails />,
        },
        {
          path: "instamart",
          element: (
            <Suspense fallback="Loading...">
              <InstaMart />
            </Suspense>
          ),
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
