import React from 'react';
import { Button } from '../UI/UI';
import './Booking.css';

function Booking({ booking, onDelete, onEdit }) {
  return (
    <div className="booking-container">
      <div className="booking-info">
        <p>Name: {booking.name}</p>
        <p>Email: {booking.email}</p>
        <p>Phone: {booking.phone}</p>
        <p>Bus: {booking.bus}</p>
      </div>
      <div className="booking-actions">
        <Button onClick={() => onEdit(booking)}>Edit</Button>
        <Button onClick={() => onDelete(booking)}>Delete</Button>
      </div>
    </div>
  );
}

export default Booking;
