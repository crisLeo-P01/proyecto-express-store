const { faker } = require('@faker-js/faker');

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
  }

  async create(data) {
    const nuevoProducto = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(nuevoProducto);
    return nuevoProducto;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000)
    })
  }

  async findOne(id) {
    return this.products.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Producto no encontrado');
    };

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Producto no encotrado');
    }
    this.products.splice(index, 1)
    return { id };
  }
}

module.exports = ProductService;
