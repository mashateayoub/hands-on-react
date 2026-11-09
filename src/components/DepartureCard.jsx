import React from 'react';

export default function DepartureCard({ departure, selected, onSelect }) {
  return <article className={`departure-card${selected ? ' departure-card--selected' : ''}`}>
    <div className="card-topline">
      <span className="departure-id">{departure.id}</span>
      <span className={`status status--${departure.status === 'Retard' ? 'late' : 'on-time'}`}>
        {departure.status}
      </span>
    </div>
    <div className="route-line">
      <span className="line-badge">{departure.line}</span>
      <h3>{departure.destination}</h3>
    </div>
    <p className="card-time">Départ prévu : <strong>{departure.time}</strong></p>
    <button className="select-button" type="button" onClick={() => onSelect(departure.id)}>
      {selected ? 'Sélectionné · retirer' : 'Voir le détail'}
    </button>
  </article>;
}
