import React, { useState, useEffect } from "react";
import { fetchMovies, searchMovies } from "../api/movieApi";
import MovieSlider from "../components/MovieSlider";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await fetchMovies();
      setMovies(data.results);
      setError(null);
    } catch (err) {
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      loadMovies();
      return;
    }

    try {
      setLoading(true);
      const data = await searchMovies(searchQuery);
      setMovies(data.results);
      setError(null);
    } catch (err) {
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            className="flex-1 p-2 border rounded text-black"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Search
          </button>
        </div>
      </form>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      {movies.length === 0 ? (
        <div className="text-center text-xl">No movies found</div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
          <MovieSlider movies={movies} />
        </>
      )}
    </div>
  );
};

export default Home;