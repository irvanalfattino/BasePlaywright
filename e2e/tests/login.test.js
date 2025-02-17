import { test, expect } from '../fixtures/baseTestFixtures';

test('success login', async ({ loginPage }) => {
    await loginPage.open(process.env.BASE_URL);
    await loginPage.loginUser(process.env.PID, process.env.PASSWORD);
    await expect(loginPage.page).toHaveURL(`${process.env.BASE_URL}/document/list/todo`);
    await expect(loginPage.page).toHaveTitle('Document Dashboard - PrivySign');
});
