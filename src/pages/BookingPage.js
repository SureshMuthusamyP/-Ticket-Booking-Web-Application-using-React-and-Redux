// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const BookingPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [seats, setSeats] = useState(1);

//   const handleBooking = () => {
//     // Here you would typically make an API call to book the tickets
//     // For now, we'll just navigate to the final booking page
//     navigate(`/final-booking/${id}`, { state: { seats } });
//   };

//   return (
//     <div className="booking-page">
//       <h1>Book Tickets</h1>
//       <label>
//         Number of Seats:
//         <input
//           type="number"
//           value={seats}
//           onChange={(e) => setSeats(parseInt(e.target.value))}
//           min="1"
//         />
//       </label>
//       <button onClick={handleBooking}>Book Now</button>
//     </div>
//   );
// };

// export default BookingPage;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const totalSeats = 50; // Example total seats

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats(prev => 
      prev.includes(seatNumber)
        ? prev.filter(seat => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    navigate(`/final-booking/${id}`, { state: { selectedSeats } });
  };

  return (
    <div className="booking-page">
      <h1>Select Seats</h1>
      <div className="seat-layout">
        {[...Array(totalSeats)].map((_, index) => (
          <button
            key={index}
            className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookingPage;