// app.js
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Nodejs w Dockerze!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
