import React from 'react';

export default function Header({ total }) {
  return <header className="page-header">
    <div className="page-header__content">
      <p className="eyebrow">Suivi local des départs</p>
      <h1>Tableau des départs de bus</h1>
      <p className="header-note">Données locales de démonstration</p>
    </div>
    <div className="total-card" aria-label={`${total} départs au total`}>
      <strong>{total}</strong>
      <span>départs au total</span>
    </div>
  </header>;
}
