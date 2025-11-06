"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import "../../styles/cartList.css"; 

export default function ShowCartList({ onClose }) {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <div className="cart-container">
        <div className="cart-header">
          <h2>
            CART ({cartItems.length})
          </h2>
          <button onClick={clearCart} className="remove-all">
            Remove all
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.slug} className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-img">
                    <img src={`/${item.image}`} alt={item.name} />
                  </div>
                  <div>
                    <p className="item-name">{item.nickname}</p>
                    <p className="item-price">${item.price}</p>
                  </div>
                </div>
                <div className="item-quantity">x{item.quantity}</div>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <span>TOTAL</span>
          <span>${total.toLocaleString()}</span>
        </div>

        <Link href="/checkout">
          <button
            disabled={cartItems.length === 0}
            className="checkout-btn"
            onClick={() => onClose()}
          >
            CHECKOUT
          </button>
        </Link>
      </div>
    </>
  );
}

