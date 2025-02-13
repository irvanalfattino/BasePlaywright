import { BasePage } from './basepage.js';
import { LoginSelectors } from './selectors/loginSelectors.js';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.inputPrivyID = page.locator(LoginSelectors.inputPrivyID);
        this.continueButton = page.locator(LoginSelectors.continueButton);
        this.inputPassword = page.locator(LoginSelectors.inputPassword);
        this.submitButton = page.locator(LoginSelectors.submitButton);
    }

    async login(privyID, password) {
        await this.inputPrivyID.fill(privyID);
        await this.continueButton.click();
        await this.inputPassword.fill(password);
        await this.submitButton.click();
    }
}

export { LoginPage };