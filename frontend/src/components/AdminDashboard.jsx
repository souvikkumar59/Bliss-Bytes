import React from 'react';
import AdminOrders from './AdminOrders.jsx';
import AdminTables from './AdminTables.jsx';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex justify-center items-center space-x-3 bg-gradient-to-r from-blue-500 to-teal-400 p-4 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
  <span>Admin</span>
  <span className="text-pink-500">Dashboard</span>
</h2>
      <AdminOrders />
      
    </div>
  );
};

export default AdminDashboard;
