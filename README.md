# IRIS Curățenie

Responsive business website built with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel.

[View the website](https://iris-eight-drab.vercel.app)

## Overview

A Romanian-language website for IRIS Curățenie, a cleaning-services business in Bacău. The application presents services, subscriptions, portfolio content, company information, and contact options.

## Stack and architecture

- Next.js App Router with TypeScript and React.
- Tailwind CSS for responsive layouts and reusable styles.
- Route pages in `src/app/` and shared UI in `src/components/`.
- Public assets in `public/`; earlier static pages remain under legacy/backup directories.

The manifest currently declares Next.js `^16.0.7` and React `^19.1.1`.

## Run locally

```sh
git clone https://github.com/ioanaghi/Iris-Curatenie-Web.git
cd Iris-Curatenie-Web
npm install
npm run dev
```

Use a Node.js release compatible with the declared Next.js version. To check the production build:

```sh
npm run build
npm start
```

## Delivery and security

The public deployment is hosted on Vercel. The contact form currently uses a `mailto:` action and depends on the visitor's email application; it is not a backend form-processing service. No payment processing is implemented by this contact flow.

Before extending the site with a server-side form, define validation, rate limiting, delivery handling, and retention of submitted data. Keep private service credentials on the server.

## Project scope

This repository demonstrates frontend implementation and deployment for a business use case. Business claims and service information belong to the business content and are not technical certifications of this software.

## Next steps

Improve the contact delivery flow, verify keyboard/mobile accessibility, consolidate legacy assets, and keep deployment checks aligned with the current framework version.
