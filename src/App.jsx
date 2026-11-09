import React, { useState } from 'react';
import { initialDepartures } from './data/departures.js';
import Header from './components/Header.jsx';
import FilterBar from './components/FilterBar.jsx';
import DepartureList from './components/DepartureList.jsx';
import DepartureDetails from './components/DepartureDetails.jsx';

export default function App() {
  const [departures, setDepartures] = useState(initialDepartures);
  const [filter, setFilter] = useState('Tous');
  const [selectedId, setSelectedId] = useState(null);

  const visibleDepartures = filter === 'Tous'
    ? departures
    : departures.filter(departure => departure.status === filter);
  const selectedDeparture = departures.find(departure => departure.id === selectedId);
  const selectedVisibleDeparture = visibleDepartures.find(
    departure => departure.id === selectedId,
  );
  const selectionHidden = Boolean(selectedDeparture) && !selectedVisibleDeparture;

  function selectDeparture(id) {
    setSelectedId(current => current === id ? null : id);
  }

  function toggleStatus(id) {
    setDepartures(current => current.map(departure =>
      departure.id === id
        ? { ...departure, status: departure.status === 'Ponctuel' ? 'Retard' : 'Ponctuel' }
        : departure,
    ));
  }

  return <main className="page-shell">
    <Header total={departures.length} />
    <div className="workspace">
      <section className="list-panel" aria-labelledby="departures-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Vue des lignes</p>
            <h2 id="departures-heading">Départs</h2>
          </div>
          <p className="visible-count" aria-live="polite">
            <strong>{visibleDepartures.length}</strong> départs affichés
          </p>
        </div>
        <FilterBar filter={filter} onChange={setFilter} />
        <DepartureList
          departures={visibleDepartures}
          selectedId={selectedId}
          onSelect={selectDeparture}
        />
      </section>
      <section className="details-panel" aria-labelledby="details-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Départ choisi</p>
            <h2 id="details-heading">Détail</h2>
          </div>
        </div>
        <DepartureDetails
          selectedDeparture={selectedVisibleDeparture}
          selectionHidden={selectionHidden}
          onToggleStatus={toggleStatus}
        />
      </section>
    </div>
  </main>;
}
