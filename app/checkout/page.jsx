"use client";
import  {sendOrderEmail}  from "@/app/lib/sendOrderEmail";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import OrderConfirmationModal from "../components/OrderConfirmationModal";
export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
    const shipping = 50; 
    const vat = total * 0.2; 
    const grandTotal = total + shipping + vat;

    
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setLoading(true);
    const orderId = `ORD-${Date.now().toString().slice(-6)}`;
    const totals = {
      shipping ,
      vat,
      grandTotal,
    };
    const {success} = await sendOrderEmail(formData.email, orderId, cartItems, totals);
    setLoading(false);
  if (success) {
    setShowModal(true);
  } else {
    alert("Order placed, but email failed to send.");
  }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20 flex flex-col md:flex-row gap-10">
      {showModal && <OrderConfirmationModal total={grandTotal} onClose={() => setShowModal(false)} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white flex-1 p-8 rounded-xl shadow-md space-y-8"
      >
        <h1 className="text-3xl font-bold uppercase tracking-wide">Checkout</h1>

        <div>
          <h2 className="text-[#D87D4A] font-bold mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Alexei Ward"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="alexei@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+1 202-555-0136"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full md:col-span-2"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[#D87D4A] font-bold mb-4">Shipping Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="address"
              placeholder="1137 Williams Avenue"
              value={formData.address}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full md:col-span-2"
            />
            <input
              type="text"
              name="zip"
              placeholder="10001"
              value={formData.zip}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="New York"
              value={formData.city}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="United States"
              value={formData.country}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full md:col-span-2"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[#D87D4A] font-bold mb-4">Payment Details</h2>

          <div className="space-y-4">
            <label className="flex items-center gap-3 border p-3 rounded-lg">
              <input
                type="radio"
                name="payment"
                value="e-money"
                checked={formData.payment === "e-money"}
                onChange={handleChange}
              />
              <span>e-Money</span>
            </label>

            <label className="flex items-center gap-3 border p-3 rounded-lg">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={formData.payment === "cash"}
                onChange={handleChange}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {formData.payment === "e-money" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="eMoneyNumber"
                placeholder="238521993"
                value={formData.eMoneyNumber}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="password"
                name="eMoneyPin"
                placeholder="6891"
                value={formData.eMoneyPin}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
          )}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-[#D87D4A] hover:bg-[#fba172] text-white font-semibold py-4 rounded-lg uppercase"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Continue & Pay"
          )}
        </button>
      </form>

      <div className="bg-white w-full md:w-1/3 p-8 rounded-xl shadow-md h-fit">
        <h2 className="font-bold text-lg mb-6 uppercase">Summary</h2>
        <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
          {cartItems.map((item) => (
            <div
              key={item.slug}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-15 h-15 rounded-md p-2 flex justify-center items-center bg-[#F1F1F1]">
                    <img
                        src={`/${item.image}`}
                        alt={item.name}
                        className="w-[80%]"
                    />
                </div>  
                
                <div>
                  <p className="font-semibold">{item.nickname}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <span className="text-gray-600">x{item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-gray-700 font-semibold">
          <div className="flex justify-between">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT (Included)</span>
            <span>${vat.toFixed(0)}</span>
          </div>
          <div className="flex justify-between text-black text-lg font-bold mt-4">
            <span>Grand Total</span>
            <span className="text-[#D87D4A]">
              ${grandTotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}



