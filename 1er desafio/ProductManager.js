class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts = () => {
    return this.products;
  };

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      products: [],
    };

    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push(product);
  };

  getProductById = (idProduct) => {
    const productIndex = this.products.findIndex(
      (product) => product.id === idProduct
    );

    if (productIndex === -1) {
      console.log("Not found");
      return;
    }

    const productAdd = this.products[productIndex].products.includes(idProduct);

    if (productAdd) {
      console.log("El producto se agregó correctamente");
      return;
    }
    this.products[productIndex].products.push(idProduct);
  };
}

const manejadorProductos = new ProductManager();
manejadorProductos.addProduct(
  "Gorra",
  "Negra",
  2500,
  "sin imágen",
  "gor17",
  17
);
manejadorProductos.addProduct(
  "Zapatillas",
  "Azul",
  10000,
  "sin imágen",
  "zap12",
  30
);
manejadorProductos.addProduct(
  "Remera",
  "Roja",
  2000,
  "sin imágen",
  "rem89",
  22
);

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);
manejadorProductos.getProductById(4);

console.log(manejadorProductos.getProducts());
