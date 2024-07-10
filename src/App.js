import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import BookingPage from './pages/BookingPage';
import FinalBookingPage from './pages/FinalBookingPage';
import UpcomingMovieDetails from './pages/UpcomingMovieDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/final-booking/:id" element={<FinalBookingPage />} />
            <Route path="/upcoming-movie/:id" element={<UpcomingMovieDetails />} />
            <Route path="/booking/:id" element={<BookingPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;