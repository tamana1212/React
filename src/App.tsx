import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import ErrorPage from "./pages/ErroPage";
import ProductDetails from "./pages/ProductDetails";
import { Profile } from "./pages/Profile";
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const InstaMart = lazy(() => import("./pages/InstaMart"));

function App() {
  const [search, setSearch] = useState("");
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlistItems = localStorage.getItem("wishlistItems");
    return savedWishlistItems ? JSON.parse(savedWishlistItems) : [];
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const moveToWishlist = (productCard) => {
    console.log(productCard);
    if (wishlistItems.find((item) => item.id === productCard.id)) {
      alert("item already in wishlist");
    } else {
      setWishlistItems((prev) => [...prev, productCard]);
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
                setwishlistItems={setWishlistItems}
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
