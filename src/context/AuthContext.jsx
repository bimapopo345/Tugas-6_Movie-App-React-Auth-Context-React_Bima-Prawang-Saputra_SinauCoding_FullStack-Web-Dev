import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser({ ...userData, favorites });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setFavorites([]);
  };

  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      const updatedFavorites = [...prev, movie];
      // Update the user object to include the updated favorites
      setUser((prevUser) => ({
        ...prevUser,
        favorites: updatedFavorites,
      }));
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.filter((movie) => movie.id !== movieId);
      // Update the user object to reflect the updated favorites
      setUser((prevUser) => ({
        ...prevUser,
        favorites: updatedFavorites,
      }));
      return updatedFavorites;
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        favorites,
        login,
        logout,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
