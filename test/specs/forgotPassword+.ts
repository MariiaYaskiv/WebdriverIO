import ForgotPassword from '../pageObjects/forgotPasswordPage+';



const forgotPassword = new ForgotPassword();

describe('Forgot Password', function () {
    before(async function () {
        forgotPassword.open();
    });
    it('See the message in the page if the user Forgot Password', async function () {
        await forgotPassword.forgotPasswordInput()
        await browser.pause(2000);
        await forgotPassword.buttonSubmit()
        await browser.pause(2000);
        await expect(browser).toHaveUrlContaining('forgot_password')
        await browser.pause(2000);
        await forgotPassword.passwordInput('Internal Server Error')

    });

})
