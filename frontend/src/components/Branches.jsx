import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path if needed

const branches = [
  'Belgaria Rathtala',
  'Belgharia Station',
  'Sodhpur',
  'Barrackpore',
];

const Branches = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 pt-20">
        <div className="backdrop-blur-md bg-white/60 border border-blue-200 shadow-2xl rounded-3xl p-8 w-full max-w-xl transition-all duration-300 hover:scale-[1.01]">
          <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-6 drop-shadow">
            🏪 Our Branches
          </h2>
          <ul className="space-y-4">
            {branches.map((branch, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-white/80 border border-gray-200 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:bg-blue-50 transition"
              >
                <span className="text-gray-800 font-semibold text-lg">{branch}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-gray-700 font-medium italic">
            More branches are joining soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default Branches;
