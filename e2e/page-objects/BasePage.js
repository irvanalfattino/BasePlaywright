import { expect } from '@playwright/test';

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);
    }

    async expectURL(expectedURL) {
        await expect(this.page).toHaveURL(expectedURL);
    }

    async getTitle() {
		return await this.page.title()
	}

    async waitForElement(locator) {
        await locator.waitFor();
    }
}

export { BasePage };
