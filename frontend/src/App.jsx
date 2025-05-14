import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { FaShoppingCart } from 'react-icons/fa'; // Cart icon import

const App = () => {
  const [tablenumber, setTablenumber] = useState(null);
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showCartDetails, setShowCartDetails] = useState(false); // Toggle for cart details

  // Prompt for table number only once when the app loads
  useEffect(() => {
    let table = prompt("Enter your table number:");
    if (table && !isNaN(table) && Number(table) > 0) {
      setTablenumber(Number(table));
    } else {
      alert("Invalid table number. Please refresh and enter a valid number.");
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item._id !== itemToRemove._id));
  };

  const placeOrder = () => {
    if (!tablenumber) {
      alert("Table number is required.");
      return;
    }

    const orderData = {
      tableNo: tablenumber,
      items: cart.map(item => ({
        itemId: item._id,
        name: item.name,
        quantity: item.quantity,
      }))
    };

    axios.post('http://localhost:5000/api/orders', orderData)
      .then(response => {
        alert(`Order placed successfully for Table ${tablenumber}!`);
        setCart([]);
      })
      .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* Cart Icon at the top */}
      <div className="absolute top-4 right-4 flex items-center cursor-pointer" onClick={() => setShowCartDetails(!showCartDetails)}>
        <FaShoppingCart className="text-3xl text-violet-700" />
        <span className="ml-2 text-lg text-gray-700">{cart.length}</span> {/* Cart Item Count */}
      </div>

      {/* Cart Details Popup or Sidebar */}
      {showCartDetails && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-80 max-h-96 overflow-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map(item => (
                <div key={item._id} className="flex justify-between items-center mb-2">
                  <p className="text-gray-800">{item.name} x {item.quantity}</p>
                  <button onClick={() => removeFromCart(item)} className="text-red-500">Remove</button>
                </div>
              ))}
              <button onClick={placeOrder} className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Place Order
              </button>
            </div>
          )}
        </div>
      )}

      <h1 className="text-2xl font-extrabold text-center text-violet-700 drop-shadow-md tracking-wide mb-6">
        🍽️ Bliss-<span className="text-pink-500">Bites</span>
      </h1>
      <p className="text-center text-gray-600 mb-2">Table Number: {tablenumber || 'Not set'}</p>
      <Menu menuItems={menuItems} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} placeOrder={placeOrder}/>
    </div>
  );
};

export default App;
