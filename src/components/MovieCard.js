import React from 'react';
import { Link } from 'react-router-dom';



const MovieCard = ({ movie, isUpcoming }) => {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.name} />
      <h3>{movie.name}</h3>
      {isUpcoming ? (
        <Link to={`/upcoming-movie/${movie.id}`}>View Details</Link>
      ) : (
        <Link to={`/booking/${movie.id}`} className="book-now-button">Book Now</Link>
      )}
    </div>
  );
};

export default MovieCard;





