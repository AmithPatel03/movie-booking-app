import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import { Link } from "react-router-dom";
import './MovieList.css';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.image} alt={movie.movie} />
          <h3 className="movie-title">{movie.movie}</h3>
          <p className="movie-rating">Rating: {movie.rating}</p>
          <Link className="view-details" to={`/movies/${movie.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
