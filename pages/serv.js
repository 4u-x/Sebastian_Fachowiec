const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  
  server.set('view engine', 'pug');
  server.set('views', './views'); // Ustaw ścieżkę do folderu z szablonami Pug

  // Tutaj dodajesz swoją trasę dla Pug
  server.get('/', (req, res) => {
    res.render('/');
  });

  server.get('*', (req, res) => {
    return handle(req, res); // Obsługa pozostałych tras przez Next.js
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

