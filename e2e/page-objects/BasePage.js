import { expect } from '@playwright/test';

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);
    }

    async enterText(locator, text) {
        await locator.fill(text);
    }

    async click(locator) {
        await locator.click();
    }

    async clickWaitVisible(locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async expectURL(expectedURL) {
        await expect(this.page).toHaveURL(expectedURL);
    }

    async getTitle() {
        return await this.page.title();
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async waitForElement(locator) {
        await locator.waitFor();    }


    async takeScreenShot(name) {     
        await this.page.screenshot({ path: `./reports/screenshots/${name}.png` });

    }    
}

export { BasePage };
