# Tableau des départs de bus

## Démarrage

Exécuter `npm install`, puis `npm run dev` ; ouvrir l’URL locale affichée (`Ctrl+C` arrête le serveur).

## Fonctionnement

- Quatre départs locaux affichent ligne, destination, heure et statut ; les filtres « Tous », « Ponctuels » et « En retard » actualisent la liste et son compteur.
- Le bouton d’une carte ouvre son détail ; un second clic la désélectionne. Le détail permet de basculer son statut entre « Ponctuel » et « Retard ».

## Concepts et limites

Composants, JSX, props, `map` et `key`, `useState`, événements, callbacks, lifting state et données dérivées. La simulation reste locale : aucune API ni persistance ; recharger la page restaure les quatre départs initiaux.

## Documentation

Lire le [guide technique avec diagrammes](docs/README.md) et la [grille de réussite avec l’arbre des composants](LIVRABLE.md).
