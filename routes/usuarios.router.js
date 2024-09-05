const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const persons = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    persons.push({
      nombre: faker.person.firstName(),
      apellido: faker.person.lastName(),
      genero: faker.person.gender(),
    })
  }

  res.json(persons);
});

module.exports = router;

