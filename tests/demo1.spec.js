const { test, expect } = require('@playwright/test')

test('Login Success', async ({ page }) => { //VALIDAMOS UN LOGIN EXITOSO
  await page.goto('https://www.saucedemo.com/') //Vamos a la url.
  await page.locator('[data-test="username"]').click() //Encontramos el elemento username y le damos click.
  await page.locator('[data-test="username"]').fill('standard_user') // Ingresamos texto.
  await page.locator('[data-test="password"]').click() //Encontramos el elemento username y le damos click.
  await page.locator('[data-test="password"]').fill('secret_sauce') // Ingresamos texto.
  await page.locator('[data-test="login-button"]').click() //Damos click en el boton Login.
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs') //Validamos que el titulo de la pagina contenga un texto.
})