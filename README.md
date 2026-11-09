# Tableau des départs de bus

Projet React et JSX lancé avec Vite : `npm install`, puis `npm run dev`.
Ouvrir l’URL locale affichée par Vite ; `Ctrl+C` arrête le serveur.
Quatre départs locaux sont affichés avec leur ligne, destination, heure et statut.
Les boutons filtrent la liste ; une carte sélectionnée ouvre son détail.
Le détail peut simuler un changement entre « Ponctuel » et « Retard ».
Les notions utilisées sont composants, props, `map` et `key`, `useState`, `onClick`, callbacks et lifting state.
La liste filtrée, le compteur et le détail sont calculés pendant le rendu.
Aucune API ni persistance : un rechargement restaure les données initiales.
Lire le [guide technique](docs/README.md) ; la [grille et l’arbre](LIVRABLE.md) complètent le rendu.
