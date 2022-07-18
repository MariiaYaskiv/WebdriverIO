import FormAuthenticationTwo from '../pageObjects/formAutentificationTwoPage';
import users from '../../data/users'


const formAuthenticationTwo = new FormAuthenticationTwo();

describe('Verify if a user can registrate', function () {
    beforeEach(async function () {
        formAuthenticationTwo.open();
    });
    it('Verify if a user can enter his username and password', async function () {
        let pageElement = await $('h2');
        await expect(pageElement).toExist()
        await expect(pageElement).toBeDisplayed()
        await expect(pageElement).toHaveTextContaining('Login Page')
        await browser.pause(2000);

        await formAuthenticationTwo.putUsernameInput()
        await browser.pause(2000);
        await formAuthenticationTwo.putPasswordInput()
        await browser.pause(2000);
        await formAuthenticationTwo.clickLoginButton()
        await browser.pause(2000);
    });

})
