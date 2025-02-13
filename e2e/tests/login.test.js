import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { config } from '../config/env';

test('success login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open(config.baseURL);
    await loginPage.login(config.privyID, config.password);
    await expect(page).toHaveURL(`${config.baseURL}/document/list/todo`);
    await expect(page).toHaveTitle('Document Dashboard - PrivySign');

});

