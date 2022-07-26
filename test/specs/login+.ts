import FormAuthenticationTwo from '../pageObjects/loginPage+';
import { case1 } from '../../data/data'


const login = new FormAuthenticationTwo();

describe('Verify if a user can registrate', function () {
    before(async function () {
        login.open();
    });
    it('Verify if a user can enter his username and password', async function () {
        await login.pageName()
        await browser.pause(2000);
        await login.putUsernameInput(case1.username)
        await browser.pause(2000);
        await login.putPasswordInput(case1.password)
        await browser.pause(2000);
        await login.clickLoginButton()
        await login.errorMessage('Your username is invalid!')
        await browser.pause(2000);
    
    });

})
