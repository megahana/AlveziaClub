# ALVEZIA — site alvezia-club.fr

Site vitrine du projet ALVEZIA Women's Club (Annecy) avec le questionnaire de participation.
Site statique : HTML, CSS et JavaScript, sans framework ni dépendance.

## Structure

```
alvezia-club/
├── index.html               Page principale
├── mentions-legales.html    Mentions légales
├── confidentialite.html     Politique de confidentialité
├── assets/
│   ├── css/style.css        Styles (couleurs et polices en haut du fichier)
│   ├── js/main.js           Questionnaire Tally, liens réseaux, bouton « Copier »
│   ├── img/                 Logo, monogramme, photos, image de partage (og-image.jpg)
│   └── icons/               Favicon et icônes pour téléphone
├── package.json             Commande « npm run dev »
└── LISEZMOI.md
```

## Voir le site en local

```
npm run dev
```
puis ouvrir http://localhost:3000

## Réglages courants (assets/js/main.js)

- `TALLY_ID` : identifiant du formulaire Tally (actuellement `lbQdWB`).
- `LIENS` : adresses Instagram, TikTok, Facebook. Laisser `""` affiche le nom en gris, sans lien.

## Remplacer une photo

Déposer la nouvelle image dans `assets/img/` avec exactement le même nom de fichier
(hero.jpg, strength.jpg, glutes.jpg, pilates.jpg, wellness.jpg, evenements.jpg).

## Mise en ligne (Vercel)

1. Dans ce dossier : `npm i -g vercel` puis `vercel` (adresse de test), puis `vercel --prod`.
   Aucune commande de build : c'est un site statique.
2. Vercel → projet → Settings → Domains : ajouter `alvezia-club.fr` et `www.alvezia-club.fr`.
3. Infomaniak → Domaines → alvezia-club.fr → Zone DNS : créer uniquement la ligne A (@)
   et la ligne CNAME (www) indiquées par Vercel.
   Ne pas modifier les lignes MX, SPF et DKIM (messagerie hello@alvezia-club.fr).
4. Tester : https://alvezia-club.fr/?source=test
