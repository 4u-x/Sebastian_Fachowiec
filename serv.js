const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  
  // Konfiguracja Pug jako silnika szablonów
  server.set('view engine', 'pug');
  server.set('views', './views');

  // Odpowiednia trasa do renderowania strony głównej za pomocą Pug
  server.get('/', (req, res) => {
    res.render('index');
  });

  // Obsługa wszystkich innych tras za pomocą Next.js
  server.get('*', (req, res) => {
    return handle(req, res); 
  });

  // Uruchomienie serwera na porcie 3000
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
