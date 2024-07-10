import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpcomingMovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://3.17.216.66:4000/upcomingMovies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching upcoming movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="upcoming-movie-details">
      <h1>{movie.name}</h1>
      <img src={movie.imageUrl} alt={movie.name} />
      <p>Release Date: {movie.releaseDate}</p>
      <p>Running Time: {movie.runningTime}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default UpcomingMovieDetails;