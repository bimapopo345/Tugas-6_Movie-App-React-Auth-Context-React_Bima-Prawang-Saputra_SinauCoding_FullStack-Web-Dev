import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="relative group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold">{movie.title}</h3>
            <p className="text-sm">{movie.release_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;