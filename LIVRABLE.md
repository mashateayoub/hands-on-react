# Grille remplie

| Critère | Résultat | Preuve dans le projet |
| --- | --- | --- |
| Une carte réutilisée pour quatre départs | Réalisé | `DepartureList.jsx` appelle `DepartureCard` pour chaque objet. |
| Clé stable sur chaque ligne | Réalisé | Le `li` créé par `map` porte `key={departure.id}`. |
| Filtre réactif et liste dérivée | Réalisé | `filter` est dans `App` et `visibleDepartures` est calculé au rendu. |
| Sélection partagée | Réalisé | `selectedId` est dans `App` et descend vers liste et détail. |
| Statut modifié sans mutation | Réalisé | `toggleStatus` utilise `map` et une copie de l’objet visé. |
| Aucune sélection et sélection masquée | Réalisé | `DepartureDetails` affiche les deux messages demandés. |
| Périmètre respecté | Réalisé | Aucun formulaire, appel réseau, effet, routing ou bibliothèque UI. |

# Arbre des composants

```text
App : departures, filter, selectedId
|- Header : total
|- FilterBar : filter, onChange
|- DepartureList : visibleDepartures, selectedId, onSelect
|  `- DepartureCard x N : departure, selected, onSelect
`- DepartureDetails : selectedVisibleDeparture, selectionHidden, onToggleStatus
```

# Démonstration orale (5 minutes)

La prop `departure` descend de `App` vers `DepartureList`, puis vers `DepartureCard`.
Le bouton de la carte remonte son identifiant par `onSelect` jusqu’à `setSelectedId` dans `App`.
`selectedId` appartient à `App`, parent commun de la liste et du détail, pour qu’ils affichent la même sélection.
Scénario : ouvrir « Ponctuels », sélectionner `DEP-102`, signaler un retard, constater une carte et le message de sélection masquée, puis revenir à « Tous ».
