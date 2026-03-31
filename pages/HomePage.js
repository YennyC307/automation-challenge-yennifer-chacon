const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.categoryLaptops = page.getByRole('link', { name: 'Laptops' });
    this.cartLink = page.locator('#cartur');
  }

  async goto() {
    await this.page.goto('/');
  }

  async selectCategoryLaptops() {
    await this.categoryLaptops.click();
  }

  async selectProduct(productName) {
    
    const productLocator = this.page.getByRole('link', { name: productName });
    await productLocator.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
};