# CAMELEYON Dynamics - Site officiel

Site web officiel de CAMELEYON Dynamics, construit avec Next.js, TypeScript, Tailwind CSS et l'App Router.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible par défaut sur `http://localhost:3000`.

## Structure principale

- `src/app/` contient les pages du site: accueil, solutions, à propos et contact.
- `src/components/` contient les composants réutilisables: navigation, footer, hero, cartes, CTA et formulaire.
- `src/data/site.ts` centralise les contenus importants du site.

## Modifier les produits

Les produits SaaS sont dans `src/data/site.ts`, propriété `products`.

Vous pouvez modifier:

- le nom du produit avec `name`
- la description avec `description`
- le statut avec `status`
- le lien avec `href`
- le texte du bouton avec `cta`

Les liens actuels sont des placeholders et peuvent être remplacés par les vraies URLs des produits.

## Modifier les services

Les services sont dans `src/data/site.ts`, propriété `services`.

Chaque service contient:

- `title`
- `description`

Les pages se mettent à jour automatiquement à partir de ces données.

## Remplacer les liens placeholders

Dans `src/data/site.ts`, modifiez:

- `company.email`
- `company.linkedInUrl`
- `company.appointmentUrl`
- les `href` des produits dans `products`

L'espace logo se trouve dans `src/components/Hero.tsx` et peut être remplacé plus tard par une image officielle ou un composant dédié.

## Préparer l'intégration du formulaire de contact

Le formulaire frontend est dans `src/components/ContactForm.tsx`.

Pour connecter l'envoi d'email plus tard:

1. Créer une API route Next.js, par exemple `src/app/api/contact/route.ts`.
2. Dans `ContactForm.tsx`, remplacer la simulation actuelle par un `fetch("/api/contact", ...)`.
3. Brancher l'API route à Resend, SendGrid ou un autre service.
4. Ajouter les variables d'environnement nécessaires dans `.env.local`.

## Scripts utiles

```bash
npm run dev
npm run build
npm run lint
```
