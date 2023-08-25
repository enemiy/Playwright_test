import { test, expect } from '@playwright/test';

test('Simulasi investasi', async ({ page }) => {
  await page.goto('https://www.shafiq.id/');
  await page.getByRole('link', { name: 'Daftar Investasi Daftar Investasi" / "' }).click();
  await page.getByPlaceholder('Cari').fill('PT EKA NUSA KREASINDO');
  await page.getByRole('button', { name: 'search' }).click();
  await page.locator('#portfolio-feed div').filter({ hasText: 'Tersisa 28 Hari SUKUK MUSYARAKAH (ENKR-SMY02) Perluasan Villa Delima Residence d' }).nth(1).click();
  await page.locator('#qty-calculator').click();
  await page.locator('#qty-calculator').fill('30');
  await page.getByText('Rp3.006.750')
  await page.locator('#type-calculator').selectOption('nominal');
  await page.locator('#qty-calculator').click();
  await page.locator('#qty-calculator').fill('500.0000');
  await page.getByText('Rp5.011.250')
});