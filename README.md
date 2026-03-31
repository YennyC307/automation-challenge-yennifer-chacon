# QA Automation Challenge - E2E UI Testing

Este proyecto contiene la automatización del flujo de compra de la plataforma **Demoblaze**, utilizando **Playwright** con un enfoque profesional, escalable y mantenible.

## Arquitectura del Proyecto

Se ha implementado el patrón de diseño **Page Object Model (POM)** para separar la lógica de negocio de la interacción con la interfaz de usuario, facilitando el mantenimiento a largo plazo.

### Componentes:
- **Pages (`/pages`):** Encapsulan los selectores y las acciones de cada página (Home, Product, Cart).
- **Data Driven Testing (`/data`):** Los datos de prueba se gestionan de forma externa en archivos JSON, permitiendo parametrizar los tests sin modificar el código.
- **Tests (`/tests`):** Escenarios de prueba limpios y legibles que describen el flujo de usuario.

## Flujo Automatizado
El test `purchase.spec.js` cubre el proceso **End-to-End** de compra:
1. Navegación por categorías.
2. Selección dinámica de producto.
3. Gestión de alertas nativas del navegador (Add to cart).
4. Verificación de integridad de datos en el carrito.
5. Finalización de orden de compra mediante formulario.
6. Validación de mensaje de éxito (`Thank you for your purchase!`).

## Tecnologías Utilizadas
- **Playwright:** Framework de automatización.
- **JavaScript:** Lenguaje de scripting.
- **POM:** Patrón de diseño.
- **GitHub Actions:** Integración Continua (opcional).

## Cómo ejecutar las pruebas

1. **Clonar el repositorio:**
```bash
   git clone https://github.com/YennyC307/automation-challenge-yennifer-chacon.git

2. **Instalar dependencias:**
   npm install

3. **Instalar navegadores de Playwright:**
   npx playwright install

4. **Ejecutar todos los test:**
   npm test

5. **Ejecutar tests viendo el navegador (Headed)**
   npm run test:headed

6. **Ver reporte de resultados:**
   npx playwright show-report