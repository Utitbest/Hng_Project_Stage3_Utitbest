import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (email, orderId, cartItems, totals) => {
  try {
    const templateParams = {
      to_email: email,
      order_id: orderId,
      orders: cartItems.map((item) => ({
        name: item.nickname,
        image_url: `/${item.image}`,
        units: item.quantity,
        price: item.price,
      })),
      cost: {
        shipping: totals.shipping,
        tax: totals.vat,
        total: totals.grandTotal,
      },
      email, 
    };

    const response = await emailjs.send(
      "service_ngbf9no", 
      "template_f80ourw", 
      templateParams,
      "4LO6SUK9y_6S8d4hf" 
    );

    console.log("Email sent:", response);
    return { success: true };
  } catch (error) {
    console.error("Failed to send order email:", error);
    return { success: false };
  }
};
