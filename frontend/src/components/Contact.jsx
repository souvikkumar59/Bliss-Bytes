import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if needed

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 pt-20">
        <div className="backdrop-blur-md bg-white/60 border border-pink-200 shadow-2xl rounded-3xl p-8 w-full max-w-xl transition-all duration-300 hover:scale-[1.01]">
          <h2 className="text-3xl font-extrabold text-center text-pink-900 mb-6 drop-shadow">
            📞 Contact Us
          </h2>
          <div className="space-y-5 text-gray-800 text-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📱</span>
              <span><strong>Mobile:</strong> 8116860140</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <span><strong>Email:</strong> souvikkumarbaguli51@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <span><strong>Location:</strong> Old Nimta Road (near chai adda)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚚</span>
              <span><strong>Note:</strong> Home delivery available</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
