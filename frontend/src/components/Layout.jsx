// components/Layout.jsx
import React from 'react';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Outlet /> {/* Renders the current route */}
      </div>
      <Footer /> {/* Always visible */}
    </div>
  );
};

export default Layout;
