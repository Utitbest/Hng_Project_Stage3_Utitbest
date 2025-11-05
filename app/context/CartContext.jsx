
// "use client";
// import { createContext, useState, useContext, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     if (typeof window !== "undefined") {
//       try {
//         const savedCart = localStorage.getItem("cart");
//         return savedCart ? JSON.parse(savedCart) : [];
//       } catch {
//         return [];
//       }
//     }
//     return [];
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item.slug === product.slug);

//       if (existing) {
//         return prev.map((item) =>
//           item.slug === product.slug
//             ? { ...item, quantity: product.quantity }
//             : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: product.quantity || 1 }];
//       }
//     });
//   };


//   const getQuantity = (slug) => {
//     const product = cartItems.find((item) => item.slug === slug);
//     return product ? product.quantity : 0;
//   };

//   const AllProduct = ()=>{
//      return cartItems.length
//   }
//   const removeFromCart = (slug) => {
//     setCartItems((prev) => prev.filter((item) => item.slug !== slug));
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart, getQuantity, AllProduct }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
"use client";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load cart only on client
    try {
      const savedCart = localStorage.getItem("cart");
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
    } catch {
      setCartItems([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.slug === product.slug);
      if (existing) {
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: product.quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const getQuantity = (slug) => {
    const product = cartItems.find((item) => item.slug === slug);
    return product ? product.quantity : 0;
  };

  const AllProduct = () => cartItems.length;

  const removeFromCart = (slug) =>
    setCartItems((prev) => prev.filter((item) => item.slug !== slug));

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getQuantity, AllProduct, isLoaded }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
