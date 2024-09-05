const express = require('express');
const ProductService = require('./../services/product.service.js');

const router = express.Router();
const service = new ProductService();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const nuevoProducto = await service.create(body);
  res.status(201).json({ nuevoProducto });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }


});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const rta = await service.delete(id, body);
  res.json(rta);
})

module.exports = router;
