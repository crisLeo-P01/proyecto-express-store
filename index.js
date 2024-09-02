const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('esta es mi nueva ruta');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Cafetéra',
    price: 30,
  })
})

app.listen(port, () => {
  console.log('mi port' + port)
})
