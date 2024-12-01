import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <p className="text-xl">{user.email}</p>
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Favorite Movies</label>
            <p className="text-xl">{user.favorites?.length || 0} movies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;