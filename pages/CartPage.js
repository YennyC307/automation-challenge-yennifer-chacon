const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    // Selectores para el flujo de checkout
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
    
    // Selectores del modal de compra
    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
    this.cardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');
    this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
    
    // Selector del mensaje de éxito
    this.successMessage = page.locator('.sweet-alert h2');
    this.confirmButton = page.getByRole('button', { name: 'OK' });
  }

  async verifyProductInCart(productName) {
    // Validamos que el texto del producto aparezca en la tabla del carrito
    const productInTable = this.page.getByRole('cell', { name: productName });
    await expect(productInTable).toBeVisible();
  }

  async fillOrderForm(details) {
    await this.placeOrderButton.click();
    // Llenamos el formulario (usamos un objeto con los datos para mayor orden)
    await this.nameInput.fill(details.name);
    await this.countryInput.fill(details.country);
    await this.cityInput.fill(details.city);
    await this.cardInput.fill(details.card);
    await this.monthInput.fill(details.month);
    await this.yearInput.fill(details.year);
    await this.purchaseButton.click();
  }

  async validatePurchaseSuccess() {

    await this.successMessage.waitFor({ state: 'visible', timeout: 10000 });

    await expect(this.successMessage).toContainText('Thank you for your purchase!', { timeout: 10000 });
    
    await this.confirmButton.click();
  }
};