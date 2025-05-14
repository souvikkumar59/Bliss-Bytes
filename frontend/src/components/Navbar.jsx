import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-400 text-white px-6 py-4 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
        Bliss-Bites
      </h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-gray-300 transition duration-300 ease-in-out">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300 transition duration-300 ease-in-out">Contact</Link>
        </li>
        <li>
          <Link to="/branches" className="hover:text-gray-300 transition duration-300 ease-in-out">Branches</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
