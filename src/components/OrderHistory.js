import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <h3>Order #{order.orderNumber}</h3>
            <p>Order Date: {order.orderDate}</p>
            {/* Display order details and status */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
