import React from 'react';
import './UI.css';

export function Select({ value, onChange, options }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

