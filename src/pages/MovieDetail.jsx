import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/movieApi";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user, addToFavorites, removeFromFavorites, isFavorite } = useAuth();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Failed to load movie details",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "Please Login",
        text: "You need to be logged in to add favorites",
        icon: "warning",
      });
      return;
    }

    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
      Swal.fire({
        title: "Removed!",
        text: "Movie removed from favorites",
        icon: "success",
      });
    } else {
      addToFavorites(movie);
      Swal.fire({
        title: "Added!",
        text: "Movie added to favorites",
        icon: "success",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-400 mb-4">{movie.release_date}</p>
          <p className="mb-4">{movie.overview}</p>
          <div className="flex gap-4 mb-4">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-red-600 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
          {isAuthenticated && (
            <button
              onClick={handleFavoriteClick}
              className={`px-6 py-2 rounded ${
                isFavorite(movie.id)
                  ? "bg-gray-600 hover:bg-gray-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isFavorite(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;