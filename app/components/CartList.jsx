"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
export default function ShowCartList({ onClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div
        className="fixed inset-0 bg-[#000000c2] bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      <div className="fixed right-8 top-24 w-96 bg-white rounded-2xl shadow-xl p-6 z-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">
            CART ({cartItems.length})
          </h2>
          <button onClick={clearCart} className="text-gray-500 text-sm">
            Remove all
          </button>
        </div>

        <div className="space-y-4 max-h-80 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.slug}
                className="flex items-center justify-between border-b pb-3"
              >
                <div className="flex items-center gap-3">
                    <div className="w-15 h-15 rounded-md flex justify-center items-center p-2 bg-[#F1F1F1]">
                        <img
                        src={`/${item.image}`}
                        alt={item.name}
                        className="w-[80%]"
                        />
                    </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div className="text-gray-700">x{item.quantity}</div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between items-center mt-6 font-semibold">
          <span>TOTAL</span>
          <span>${total.toLocaleString()}</span>
        </div>
         <Link href="/checkout">
            <button
              disabled={cartItems.length === 0}
                className="w-full mt-6 bg-[#D87D4A] text-white py-3 rounded-lg font-semibold hover:bg-[#fba172]"
                onClick={() => {
                  onClose();
                }}
                >
                CHECKOUT
            </button>
         </Link> 
      </div>
    </>
  );
}
