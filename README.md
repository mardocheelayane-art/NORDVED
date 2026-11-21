# NORDVED — Next.js

Refonte du site statique fourni vers une application Next.js App Router, avec une interface responsive, des images optimisées et un formulaire de devis côté serveur.

## Prérequis
- Node.js 20.9 ou supérieur
- npm

## Installation et lancement
```bash
npm install
cp .env.example .env.local
npm run dev
```
Puis ouvrir http://localhost:3000.

## Activer le formulaire de devis
Le formulaire envoie les demandes via l'API Resend. Pour l'activer :
1. Créer un compte Resend et vérifier le domaine expéditeur.
2. Renseigner `RESEND_API_KEY`, `RESEND_FROM_EMAIL` et `CONTACT_EMAIL` dans `.env.local`.
3. Redémarrer le serveur.

Sans ces variables, le formulaire renvoie volontairement un message d'indisponibilité : aucune demande n'est prétendue envoyée.

## Production
```bash
npm run lint
npm run build
npm run start
```
Déployer sur une plateforme compatible avec Next.js (par exemple Vercel). Ajouter les trois variables d'environnement dans les paramètres du déploiement. Configurer aussi le domaine réel pour les métadonnées Open Graph/canonical si nécessaire.

## Points à valider avant livraison client
- Confirmer le nom commercial, les coordonnées et les zones réellement desservies.
- Confirmer les types de bois, disponibilités, prix, volumes et délais. Le site ne publie volontairement aucun tarif ni promesse non vérifiée.
- Ajouter une politique de confidentialité adaptée et les informations légales de l'entreprise.
- Les anciens témoignages et chiffres de performance commerciale ont été retirés car leur authenticité ne peut pas être vérifiée à partir des fichiers fournis.
- Les trois fichiers de galerie référencés dans l'ancien HTML n'existaient pas dans l'archive. La galerie utilise donc uniquement les images réellement fournies.
- La vidéo source de 29 Mo n'est pas chargée en arrière-plan : la photo optimisée est utilisée pour éviter un téléchargement lourd dès l'ouverture. Si une vidéo est indispensable, l'encoder en MP4/WebM léger, fournir un poster et ne pas la charger sur les connexions économes.

## Optimisation média
Les photos ont été redimensionnées et converties en WebP. Les originaux restent dans l'archive remise initialement ; ils ne sont pas nécessaires au fonctionnement de cette version.
