// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/Swag Labs/);
});

test('has title novamente', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('adicionar produto ao carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');
  
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
 
test('login com senha invalida', async ({ page })=> {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'senha_errada');

  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
}) 

test('remover produto do carrinho', async ({ page }) => { 
await page.goto('https://www.saucedemo.com/');

await page.fill('#user-name', 'standard_user');
await page.fill('#password', 'secret_sauce');
await page.click('#login-button');

await page.click('#add-to-cart-sauce-labs-backpack');
await page.click('#remove-sauce-labs-backpack');

await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});