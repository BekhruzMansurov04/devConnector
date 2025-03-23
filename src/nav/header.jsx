import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
    
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <FaCode /> DevConnector
        </Link>

     
        <div className="flex items-center gap-6">
          <Link to="/developers" className="hover:text-gray-300">Developers</Link>
          <Link to="/posts" className="hover:text-gray-300">Posts</Link>
          <Link to="/dashboard" className="flex items-center gap-1 hover:text-gray-300">
            <FaUser /> Dashboard
          </Link>
          <Link to="/login" className="flex items-center gap-1 hover:text-gray-300">
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </div>
    </nav>
  
  );
};

export default Header;

