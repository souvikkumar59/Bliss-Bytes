import React from 'react'
import { useState } from 'react'
import AdminDashboard from './AdminDashboard.jsx';
import Menu from './Menu.jsx';
 import axios from 'axios';
function Adminview({addToCart}) {
    const [menuItems, setMenuItems] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
       
      <AdminDashboard />
    </div>
  )
}

export default Adminview
