## What

A boilerplate to show how to serve [create-react-app](https://github.com/facebook/create-react-app) with node server for [injecting server data dynamically into page](https://facebook.github.io/create-react-app/docs/title-and-meta-tags#injecting-data-from-the-server-into-the-page) and securing API without login authentication.

## When

- If you want to build a lightweight app
- If you want to deploy [create-react-app](https://github.com/facebook/create-react-app) without static server but dynamic one
- If you want to inject server data dynamically into page
- If your app doesn't have login feature (to get something like JWT token) but you want to secure non-GET APIs

## When not

- If you need to support SSR (you can try [next.js](https://github.com/zeit/next.js/))

## Development

```bash
yarn dev
```

Note: Client and server will be started via two servers (webpack and node) in DEV mode.

## Deployment

### Heroku

1. Choose `heroku/nodejs` as buildpack
2. Add following script in your `package.json`

<img width="530" alt="heroku_postbuild" src="https://user-images.githubusercontent.com/7512625/61267820-032da200-a7cc-11e9-81f9-d61276941700.png">

## Last

Enjoy.
