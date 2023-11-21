import React from 'react';

const ShippingTracking = ({ trackingInfo }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Shipping Tracking</h2>
      <p>Your order is on the way. Track your shipment:</p>
      <p>Tracking Number: {trackingInfo.trackingNumber}</p>
      {/* Shipment tracking details and link */}
    </div>
  );
};

export default ShippingTracking;
