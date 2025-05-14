import React from 'react';
import Navbar from './Navbar';

// Sample image URLs (replace with actual image URLs or import them if local)
const items = [
  {
    name: 'Margherita Pizza',
    description: 'Classic cheese pizza with tomato sauce and mozzarella',
    price: 199,
    imageUrl: 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2014/09/Margherita-Pizza.HEADER.jpg', // Replace with actual image URL
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with pancetta and parmesan',
    price: 125,
    imageUrl: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg', // Replace with actual image URL
  },
  {
    name: 'Caesar Salad',
    description: 'Crisp romaine with Caesar dressing and croutons',
    price: 75,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWk-FIMM5Ms_3fCNdb70po3wP6qz6kjywvqw&s', // Replace with actual image URL
  },
  {
    name: 'Pepperoni Pizza',
    description: 'Savory pizza topped with pepperoni slices and mozzarella cheese',
    price: 159,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg', // Replace with actual image URL
  },
  {
    name: 'Butter Chicken',
    description: 'Creamy butter with grilled chicken and amul cream',
    price: 145,
    imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg', // Replace with actual image URL
  },
  {
    name: 'Premium Coffee',
    description: 'Rich and aromatic coffee made from freshly ground beans',
    price: 79,
    imageUrl: "data:image/jpeg;base64,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", // Make sure to import coffeeImg
  },
];

const Menu = ({ addToCart }) => {
  return (
    <div className="container mx-auto p-6">
      <Navbar />
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.name}
            className="p-6 border-2 border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold text-green-600">₹{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
