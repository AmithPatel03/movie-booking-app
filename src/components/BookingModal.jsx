import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/bookingSlice';
import { useNavigate } from 'react-router-dom';
import './BookingModal.css';

const BookingModal = ({ movie, onClose }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSeatSelect = (seat) => {
    setSelectedSeats(prev => {
      if (prev.includes(seat)) {
        return prev.filter(s => s !== seat);
      } else {
        return [...prev, seat];
      }
    });
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    const booking = {
      id: Date.now(),
      movie: movie.movie,
      showtime: '12:00 PM',
      seats: selectedSeats,
    };

    dispatch(addBooking(booking));
    onClose();
    navigate('/bookings');
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span> {/* Close button */}
        <h2>Book Tickets for {movie.movie}</h2>
        <div>
          <h3>Select Seats</h3>
          <div className="seat-selection">
            {['A1', 'A2', 'A3', 'B1', 'B2', 'B3'].map(seat => (
              <button 
                key={seat} 
                className={`seat-button ${selectedSeats.includes(seat) ? 'selected' : ''}`} 
                onClick={() => handleSeatSelect(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
          <button className="confirm-button" onClick={handleBooking}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
