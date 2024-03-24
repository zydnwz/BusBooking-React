import React, { useState, useEffect } from 'react';
import { Select, Button } from '../UI/UI';
import './BookingForm.css';

function BookingForm({ onBook, editMode, editBooking, onUpdate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bus, setBus] = useState('bus1');

  useEffect(() => {
    if (editMode && editBooking) {
      setName(editBooking.name);
      setEmail(editBooking.email);
      setPhone(editBooking.phone);
      setBus(editBooking.bus);
    }
  }, [editMode, editBooking]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    const newBooking = { name, email, phone, bus };
    if (editMode && editBooking) {
      onUpdate({ ...editBooking, ...newBooking });
    } else {
      onBook(newBooking);
    }
    setName('');
    setEmail('');
    setPhone('');
    setBus('bus1');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Select
        value={bus}
        onChange={(e) => setBus(e.target.value)}
        options={[
          { value: 'bus1', label: 'Bus 1' },
          { value: 'bus2', label: 'Bus 2' },
          { value: 'bus3', label: 'Bus 3' }
        ]}
      />
      <Button type="submit">{editMode ? 'Update' : 'Book'}</Button>
    </form>
  );
}

export default BookingForm;
