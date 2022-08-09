import ForgotPassword from '../pageObjects/forgotPasswordPage';
import AllureReporter from '@wdio/allure-reporter';


const forgotPassword = new ForgotPassword();

describe('Forgot Password', function () {
    before(async function () {
        forgotPassword.open();
    });

    it('See the message in the page if the user Forgot Password', async function () {
        await forgotPassword.forgotPasswordInput()
        expect(browser).toHaveUrlContaining('forgot_password')
        await forgotPassword.passwordInput()
    });
    
})
