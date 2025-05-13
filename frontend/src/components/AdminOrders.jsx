import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders?status=pending')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const updateOrderStatus = (orderId, status) => {
    axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { orderId, status })
      .then(response => {
        setOrders(prevOrders =>
          prevOrders.filter(order => order._id !== orderId)
        );
      })
      .catch(error => console.error('Error updating order:', error));
  };

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-3xl font-semibold text-gray-800 mb-8">Pending Orders</h3>
      {orders.length === 0 ? (
        <p className="text-xl text-gray-600">No pending orders.</p>
      ) : (
        orders.map(order => (
          <div key={order._id} className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-gray-800">Table {order.tableNo}</h4>
              <span className={`text-sm font-medium ${order.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <ul className="mb-4 space-y-2">
              {order.items.map(item => (
                <li key={item._id} className="text-gray-700 text-lg flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-gray-500">x {item.quantity}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => updateOrderStatus(order._id, 'completed')}
              className="w-full py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition duration-200"
            >
              Mark as Completed
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminOrders;
