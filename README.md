# I-PROTECT — Application web (structure complète)

Cette base propose une application web 100% en français pour I-PROTECT, avec :

- un parcours client (accueil, inscription, connexion, espace client, paiement, confirmation)
- un espace administrateur sécurisé (vue globale, gestion clients, paiements, interventions)
- une interface moderne, professionnelle et adaptée au mobile

## Lancer localement

Ouvrez simplement `index.html` dans un navigateur ou servez le dossier avec un serveur statique.

Exemple :

```bash
python3 -m http.server 8080
```

Puis visitez : `http://localhost:8080`.

## Pages

- `index.html` : page d'accueil
- `inscription.html` : inscription client
- `connexion.html` : connexion
- `dashboard-client.html` : espace client
- `paiement.html` : paiement (pré-intégration Genius Pay)
- `confirmation.html` : confirmation de paiement
- `admin.html` : dashboard administrateur

## Important

Le service I-PROTECT présenté ici est **un service d’assistance et de réparation téléphone par abonnement**, et **non une assurance**.
