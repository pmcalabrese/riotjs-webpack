# RiotJS & Webpack 3 boilerplate

A Webpack 3 + Riotjs boilerplate with performance in mind.

[https://pmcalabrese.github.io/riotjs-webpack/](https://pmcalabrese.github.io/riotjs-webpack/)

Lighthouse performance
![Image of Yaktocat](readme_assets/lighthouse_performance.png)

Features:
 - ES6
 - Bulma CSS
 - Webpack 3
 - Tree shaking
 - Code splitting
 - Support for SCSS
 - Service Worker with sw-precache [https://github.com/GoogleChrome/sw-precache](https://github.com/GoogleChrome/sw-precache)
 - Minimal footprint (the entire boilerplate index page is 50K including CSS)
 - Manifest file
 - Icons set
 - Good lighthouse score (90+)
 - Routing with riot-route
 - Critical CSS
 - Web installed app ready

## Install

```bash
npm install
```

## Run locally for development

```bash
npm start
```

## Build for production

```bash
npm run build
```

## Build for production and run on a local server

```bash
npm run build-serve
```