// payment.js

import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {

  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: "failed",
      message: "Invalid payment method"
    };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  const discountDetails = applyDiscount(subtotal, couponCode);

  const finalTotal = discountDetails.finalTotal;

  items.forEach(item => {
    // reduce stock based on item quantity
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: subtotal,
    discount: discountDetails.discount,
    total: finalTotal,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Payment successful"
  };

}

export function validatePaymentMethod(method) {

  const methods = ["card", "upi", "cod"];

  return methods.includes(method);

}

function generateOrderId() {
  return "ORD" + Date.now();
}