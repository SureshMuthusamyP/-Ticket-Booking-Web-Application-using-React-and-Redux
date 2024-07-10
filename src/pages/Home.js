// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchLatestMovies, fetchUpcomingMovies, fetchEvents } from '../redux/moviesSlice';
// import MovieCard from '../components/MovieCard';
// import EventCard from '../components/EventCard';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { latestMovies, upcomingMovies, events } = useSelector((state) => state.movies);

//   useEffect(() => {
//     dispatch(fetchLatestMovies());
//     dispatch(fetchUpcomingMovies());
//     dispatch(fetchEvents());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Latest Movies</h1>
//       <div className="movie-list">
//         {latestMovies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>

//       <h1>Upcoming Movies</h1>
//       <div className="movie-list">
//         {upcomingMovies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>

//       <h1>Nearby Events</h1>
//       <div className="event-list">
//         {events.map((event) => (
//           <EventCard key={event.id} event={event} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLatestMovies, fetchUpcomingMovies, fetchEvents } from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';
import EventCard from '../components/EventCard';

const Home = () => {
  const dispatch = useDispatch();
  const { latestMovies, upcomingMovies, events } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchLatestMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movie-list">
        {latestMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isUpcoming={false} />
        ))}
      </div>

      <h1>Upcoming Movies</h1>
      <div className="movie-list">
        {upcomingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isUpcoming={true} />
        ))}
      </div>

      <h1>Nearby Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;