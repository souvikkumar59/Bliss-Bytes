import React from 'react';

const Cart = ({ cart, removeFromCart, placeOrder }) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">🛒 Your Cart</h2>

      {cart.length > 0 ? (
        <div className="space-y-6">
          {cart.map(item => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-xl shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="px-4 py-2 text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={placeOrder}
            className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            ✅ Place Order
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty. Add some items!</p>
      )}
    </div>
  );
};

export default Cart;
