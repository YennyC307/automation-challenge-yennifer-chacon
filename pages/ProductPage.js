exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
  }

  async addProduct() {
    // 1. Preparamos el listener de la alerta
    const dialogPromise = this.page.waitForEvent('dialog');
    
    // 2. Ejecutamos la acción
    await this.addToCartButton.click();

    // 3. Esperamos a que la alerta aparezca y la aceptamos
    const dialog = await dialogPromise;
    console.log(`Alerta recibida: ${dialog.message()}`);
    await dialog.accept();

  }
};