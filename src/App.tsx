import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import ErrorPage from "./pages/ErroPage";
import ProductDetails from "./pages/ProductDetails";
import { Profile } from "./pages/Profile";
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const InstaMart = lazy(() => import("./pages/InstaMart"));

function App() {
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setwishlistItems] = useState([]);
  const moveToWishlist = (productCard) => {
    console.log(productCard);
    if (wishlistItems.find((item) => item.id === productCard.id)) {
      alert("item already in wishlist");
    } else {
      setwishlistItems((prev) => [...prev, productCard]);
    }
  };

  const moveToCart = (productCard) => {
    if (cartItems.find((item) => item.id === productCard.id)) {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.id === productCard.id) {
            item.quantity++;
          }
          return item;
        })
      );
    } else {
      productCard.quantity = 1;
      setCartItems((prev) => [...prev, productCard]);
    }
  };

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
          element: (
            <ProductDetails
              moveToWish={(value) => moveToWishlist(value)}
              cartMove={(item) => moveToCart(item)}
            />
          ),
        },
        {
          path: "instamart",
          element: (
            <Suspense fallback="Loading...">
              <InstaMart />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense fallback="Loading...">
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                moveToWish={(value) => moveToWishlist(value)}
              />
            </Suspense>
          ),
        },
        {
          path: "wishlist",
          element: (
            <Suspense fallback="Loading...">
              <Wishlist
                wishlistItems={wishlistItems}
                setwishlistItems={setwishlistItems}
                cartMove={(item) => moveToCart(item)}
              />
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
