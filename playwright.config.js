// @ts-check
import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',
  /* Ejecución en paralelo para ahorrar tiempo (Muy valorado en Senior) */
  fullyParallel: true,
  /* Fallar el build en CI si olvidaste un .only en local */
  forbidOnly: !!process.env.CI,
  /* Reintentar solo en CI para evitar falsos positivos por flujos de red */
  retries: process.env.CI ? 2 : 0,
  /* Trabajadores simultáneos */
  workers: process.env.CI ? 1 : undefined,
  /* Reporte detallado en HTML */
  reporter: 'html',
  
  use: {
    /* URL base para no repetirla en cada test */
    baseURL: 'https://www.demoblaze.com',

    /* Capturar trazas de errores (Video, capturas, logs) solo cuando falla */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

