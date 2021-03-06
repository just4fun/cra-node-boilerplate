const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3001;
const csrfProtection = csrf({ cookie: true });

app.use(bodyParser.json());
app.use(cookieParser());

app.post(
  '/api/have_some_fun',
  (req, res, next) => process.env.NODE_ENV === 'production' ? csrfProtection(req, res, next) : next(),
  (req, res) => {
    console.log(`request from: *** ${req.body.name} ***`);
    res.status(200).json({ data: 'Here is your fun'});
  }
);

// https://facebook.github.io/create-react-app/docs/title-and-meta-tags#generating-dynamic-meta-tags-on-the-server
// https://facebook.github.io/create-react-app/docs/title-and-meta-tags#injecting-data-from-the-server-into-the-page
const getRenderedIndexFile = (req, res) => {
  const indexFile = path.join(__dirname, 'client/build', 'index.html');
  fs.readFile(indexFile, 'utf8', (err, data)  => {
    if (data) {
      res.send(
        data.replace('{{__OG_TITLE__}}', 'Good luck, have fun.')
            .replace('{{__SERVER_DATA__}}', 'Provided by Express')
            .replace('{{__CSRF_TOKEN__}}', req.csrfToken())
      );
    }
  });
};

if (process.env.NODE_ENV === "production") {
  // This is to handle landing page (first render).
  app.get('/', csrfProtection, getRenderedIndexFile);

  app.use(express.static(path.join(__dirname, 'client/build')));

  // This is to handle client-side routing (Avoid to get 404 page when refresh in other page).
  app.get('*', csrfProtection, getRenderedIndexFile);
}

app.listen(port, () => console.log(`Listening on port ${port}`));
