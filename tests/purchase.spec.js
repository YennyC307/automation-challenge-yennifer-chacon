const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');

// Importamos los datos de prueba
const testData = require('../data/customerData.json');

test('Compra exitosa de una laptop usando datos externos', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  // Accedemos a los datos del JSON
  const user = testData.validUser;
  const productToBuy = testData.products.laptop;

  await home.goto();
  await home.selectCategoryLaptops();
  await home.selectProduct(productToBuy);
  
  await product.addProduct();
  await home.goToCart();

  await cart.verifyProductInCart(productToBuy);
  
  // Pasamos el objeto completo que viene del JSON
  await cart.fillOrderForm(user);
  await cart.validatePurchaseSuccess();
});