import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import Booking from './components/Booking';
import { Select } from './UI/UI';

function App() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editMode, setEditMode] = useState(false);
  const [editBooking, setEditBooking] = useState(null);

  const handleBook = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const handleDelete = (bookingToDelete) => {
    setBookings(bookings.filter((booking) => booking !== bookingToDelete));
  };

  const handleEdit = (bookingToEdit) => {
    setEditMode(true);
    setEditBooking(bookingToEdit);
  };

  const handleUpdate = (updatedBooking) => {
    const updatedBookings = bookings.map((booking) =>
      booking === editBooking ? updatedBooking : booking
    );
    setBookings(updatedBookings);
    setEditMode(false);
    setEditBooking(null);
  };

  const filteredBookings =
    filter === 'all' ? bookings : bookings.filter((booking) => booking.bus === filter);

  return (
    <div>
      <h1>Bus Booking</h1>
      <BookingForm onBook={handleBook} editMode={editMode} editBooking={editBooking} onUpdate={handleUpdate} />
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        options={[
          { value: 'all', label: 'All' },
          { value: 'bus1', label: 'Bus 1' },
          { value: 'bus2', label: 'Bus 2' },
          { value: 'bus3', label: 'Bus 3' }
        ]}
      />
      <h2>Bookings</h2>
      {filteredBookings.map((booking, index) => (
        <Booking key={index} booking={booking} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
}

export default App;
