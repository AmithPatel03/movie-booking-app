import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelBooking } from '../redux/bookingSlice';

const BookingHistory = () => {
  const bookings = useSelector((state) => state.bookings.bookings);
  const dispatch = useDispatch();

  const handleCancelBooking = (id) => {
    dispatch(cancelBooking(id));
  };

  return (
    <div>
      <h2>Your Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              Movie: {booking.movie}, Showtime: {booking.showtime}, Seats: {booking.seats.join(', ')}
              <button onClick={() => handleCancelBooking(booking.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
