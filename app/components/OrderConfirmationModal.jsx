"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

export default function OrderConfirmationModal({ total, onClose }) {
  const router = useRouter();
  const { cartItems, clearCart } = useCart();

  if (!cartItems || cartItems.length === 0) return null;

  const firstItem = cartItems[0];
  const remainingItems = cartItems.length - 1;

  const handleBackHome = () => {
    clearCart();
    onClose();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 top-0 left-0 bg-[#000000bf] bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] md:w-[480px] rounded-xl p-8 shadow-xl text-center animate-fadeIn">
        <div className="flex justify-center mb-6">
          <div className="bg-[#d87d4a] rounded-full w-12 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold uppercase mb-2">Thank you for your order</h1>
        <p className="text-gray-500 mb-6">You will receive an email confirmation shortly.</p>

        <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col md:flex-row text-left mb-6">
          <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-300">
            <div className="flex items-center gap-3">
              <img
                src={firstItem.image}
                alt={firstItem.name}
                className="w-12 h-12 rounded-md"
              />
              <div>
                <p className="font-semibold text-sm">{firstItem.name}</p>
                <p className="text-gray-500 text-xs">${firstItem.price}</p>
              </div>
              <span className="ml-auto text-gray-600 text-sm">x{firstItem.quantity}</span>
            </div>

            {remainingItems > 0 && (
              <p className="text-gray-400 text-center text-sm mt-2">
                and {remainingItems} other item{remainingItems > 1 ? "s" : ""}
              </p>
            )}
          </div>

          <div className="bg-black text-white p-4 flex flex-col justify-center items-start">
            <p className="text-gray-400 text-xs uppercase mb-1">Grand Total</p>
            <p className="text-lg font-bold">${total.toLocaleString()}</p>
          </div>
        </div>

        <button
          onClick={handleBackHome}
          className="bg-[#d87d4a] hover:bg-[#fba172] text-white font-semibold w-full py-4 rounded-lg uppercase"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}



