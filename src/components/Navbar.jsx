import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-600 text-2xl font-bold">
          NETFLIX
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/favorites" className="text-white">
                Favorites
              </Link>
              <Link to="/profile" className="text-white">
                Profile
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => window.login.showModal()}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;