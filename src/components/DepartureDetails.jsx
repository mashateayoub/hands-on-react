import React from 'react';

export default function DepartureDetails({ selectedDeparture, selectionHidden, onToggleStatus }) {
  if (selectionHidden) {
    return <div className="detail-placeholder" role="status">
      <span className="placeholder-mark" aria-hidden="true">↗</span>
      <p>La sélection est masquée par le filtre</p>
      <span>Revenez à « Tous » pour retrouver son détail.</span>
    </div>;
  }

  if (!selectedDeparture) {
    return <div className="detail-placeholder" role="status">
      <span className="placeholder-mark" aria-hidden="true">↗</span>
      <p>Sélectionnez un départ</p>
      <span>Choisissez une carte pour voir ses informations.</span>
    </div>;
  }

  const isLate = selectedDeparture.status === 'Retard';
  return <div className="detail-content">
    <p className="departure-id">{selectedDeparture.id}</p>
    <h3>{selectedDeparture.destination}</h3>
    <dl className="detail-fields">
      <div><dt>Ligne</dt><dd>{selectedDeparture.line}</dd></div>
      <div><dt>Heure prévue</dt><dd>{selectedDeparture.time}</dd></div>
      <div><dt>Statut</dt><dd>{selectedDeparture.status}</dd></div>
    </dl>
    <button
      className="toggle-button"
      type="button"
      onClick={() => onToggleStatus(selectedDeparture.id)}
    >{isLate ? 'Marquer ponctuel' : 'Signaler un retard'}</button>
    <p className="simulation-note">Changement simulé dans ce navigateur.</p>
  </div>;
}
