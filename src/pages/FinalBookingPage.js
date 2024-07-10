// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const FinalBookingPage = () => {
//   const location = useLocation();
//   const { seats } = location.state;

//   // In a real application, you would generate a QR code here
//   // For this example, we'll just display the booking details

//   return (
//     <div className="final-booking">
//       <h1>Booking Confirmed</h1>
//       <p>Number of seats: {seats}</p>
//       <div className="qr-code">
//         [QR Code Placeholder]
//       </div>
//     </div>
//   );
// };

// export default FinalBookingPage;


import React from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';

const FinalBookingPage = () => {
  const location = useLocation();
  const { selectedSeats } = location.state;

  const bookingDetails = {
    movieId: location.pathname.split('/').pop(),
    seats: selectedSeats,
    timestamp: new Date().toISOString()
  };

  const qrCodeData = JSON.stringify(bookingDetails);

  return (
    <div className="final-booking">
      <h1>Booking Confirmed</h1>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <div className="qr-code">
        <QRCode value={qrCodeData} size={256} />
      </div>
      <p>Scan this QR code to view your booking details</p>
    </div>
  );
};

export default FinalBookingPage;
