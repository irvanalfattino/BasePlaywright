import { BasePage } from './BasePage';
import { LoginSelectors } from './selectors/LoginSelectors';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.PidInput = page.locator(LoginSelectors.inputPrivyID);
        this.forgotPasswordText = page.getByText('Forgot your password? ');
        this.forgotPasswordLink = page.getByRole('link', { name: 'Click here' });
        this.registerText = page.getByText('Don’t have an account? ');
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.continueButton = page.locator(LoginSelectors.continueButton);
        this.passwordInput = page.locator(LoginSelectors.inputPassword);
        this.submitButton = page.locator(LoginSelectors.submitButton);
    }

    async loginUser(userPrivyId, userPassword) {
        await this.enterText(this.PidInput, userPrivyId);
        await this.click(this.continueButton);
        await this.enterText(this.passwordInput, userPassword);
        await this.click(this.submitButton);
    }
    
}

export { LoginPage };