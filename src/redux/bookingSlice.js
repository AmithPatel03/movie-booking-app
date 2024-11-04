import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    bookedSeats: [],
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      state.bookedSeats.push(...action.payload.seats);
    },
    cancelBooking: (state, action) => {
      const bookingToCancel = state.bookings.find(booking => booking.id === action.payload);
      if (bookingToCancel) {
        state.bookedSeats = state.bookedSeats.filter(seat => !bookingToCancel.seats.includes(seat));
      }
      state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
    },
  },
});

export const { addBooking, cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
