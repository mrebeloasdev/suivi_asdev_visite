# Trajets ASDEV — application (version finale)

Carte de déplacements / flux, **installable sur téléphone**. Un dépôt = ce dossier tel quel.

## Fichiers (tous nécessaires, garder les mêmes noms)
- **index.html** — l'application (itinéraire routier, modification de trajet, GPS, recherche d'adresse, carte, exports).
- **manifest.webmanifest** — rend l'app installable (nom, icônes, plein écran).
- **sw.js** — service worker (hors-ligne + gestion du cache).
- **icon-192.png, logo-512.png, icon-maskable-512.png, apple-touch-icon.png, favicon-64.png** — icônes.
- **.nojekyll** — fichier vide qui dit à GitHub Pages de servir les fichiers tels quels (pas de build). Évite les erreurs de déploiement.
- **LISEZMOI.md** — ce fichier.

## Mise en ligne sur un NOUVEAU dépôt GitHub
1. github.com → **New repository** → nom `trajets` → **Public** → **Create repository**.
2. **Add file → Upload files** → glissez **tout le contenu de ce dossier** (les 9 fichiers + `.nojekyll` + ce LISEZMOI).
   - Astuce : si `.nojekyll` ne se glisse pas (fichier caché), créez-le sur GitHub via **Add file → Create new file**, nom `.nojekyll`, laissez vide, Commit.
3. **Commit changes**.
4. **Settings → Pages → Build and deployment → Source = Deploy from a branch**, Branch `main`, dossier `/ (root)` → **Save**.
5. Patientez ~1 min → ouvrez `https://VOTRE-NOM.github.io/trajets/`.

## Installer sur le téléphone
- **Android (Chrome)** : bouton « Installer » en haut, ou menu ⋮ → « Installer l'application ».
- **iPhone (Safari)** : bouton **Partager** → « Sur l'écran d'accueil » (un rappel s'affiche dans l'app).

## Utilisation
- Départ / arrêts / arrivée par recherche d'adresse (liste déroulante) ou GPS.
- Distance et tracé **par la route** (OSRM) ; repli en pointillés à vol d'oiseau si indisponible.
- Km au compteur (départ/arrivée) pour la distance exacte.
- **Modifier** / supprimer un trajet depuis la liste.
- Carte des flux, filtres mois/année, totaux ; export PNG + CSV ; sauvegarde/restauration JSON.
- Les données sont stockées **sur l'appareil** : faites des sauvegardes JSON régulières.

## Notes
- GPS, recherche d'adresse et itinéraire nécessitent une adresse **https** (GitHub Pages convient).
- OSRM public gratuit = usage personnel/léger ; possibilité de passer à un fournisseur avec clé si besoin.
