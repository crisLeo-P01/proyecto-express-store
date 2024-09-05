const express = require('express');
const { faker } = require('@faker-js/faker')

const router = express.Router();

router.get('/', (req, res) => {
  const categorias = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    categorias.push({
      categorias: faker.commerce.productAdjective(),

    })
  }

  res.json(categorias)
})

module.exports = router;
