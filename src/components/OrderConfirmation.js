import React from 'react';

const OrderConfirmation = ({ orderNumber }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Order Confirmation</h2>
      <p>Your order has been placed successfully.</p>
      <p>Order Number: {orderNumber}</p>
      {/* Order details and next steps */}
    </div>
  );
};

export default OrderConfirmation;
