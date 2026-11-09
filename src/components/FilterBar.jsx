import React from 'react';

const options = [
  { label: 'Tous', value: 'Tous' },
  { label: 'Ponctuels', value: 'Ponctuel' },
  { label: 'En retard', value: 'Retard' },
];

export default function FilterBar({ filter, onChange }) {
  return <nav className="filter-bar" aria-label="Filtrer les départs">
    {options.map(option => <button
      key={option.value}
      className="filter-button"
      type="button"
      aria-pressed={filter === option.value}
      onClick={() => onChange(option.value)}
    >{option.label}</button>)}
  </nav>;
}
