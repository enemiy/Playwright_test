import { test, expect } from '@playwright/test';

test('Register account', async ({ page }) => {
  await page.goto('https://www.shafiq.id/');
  await page.getByRole('link', { name: 'Daftar', exact: true }).click();
  await page.getByRole('link', { name: 'Daftar Atas Nama Individu' }).click();
  await page.getByPlaceholder('Nama lengkap sesuai KTP').click();
  await page.getByPlaceholder('Nama lengkap sesuai KTP').fill('ihsan');
  await page.getByPlaceholder('email@anda.com').fill('ihsantest1@gmail.com');
  await page.getByLabel('Kata Sandi', { exact: true }).fill('IhsanTEST2');
  await page.getByPlaceholder('Ulangi kata sandi').fill('IhsanTEST2');
  await page.frameLocator('iframe[name="a-c2ys8v893vr7"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('option', { name: 'Instagram' }).click();
  await page.getByRole('button', { name: 'Daftar' }).click();
  await page.getByLabel('Saya telah membaca dan menyetujui syarat dan ketentuan umum, serta\nkebijakan privasi yang ditentukan oleh SHAFIQ').check();
  await page.getByRole('button', { name: 'Setujui' }).click(); 
});


