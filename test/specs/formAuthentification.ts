import FormAuthentication from '../pageObjects/formAuthenticationPage';
import users from '../../data/users'


const formAuthentication = new FormAuthentication();

describe('Verify if a user can registrate', function () {
  beforeEach(async function () {
    formAuthentication.open();
  });
  it('Verify if a user can enter his username and password', async function () {
    let pageElement = await $('h2');
    await expect(pageElement).toExist()
    await expect(pageElement).toBeDisplayed()
    await expect(pageElement).toHaveTextContaining('Login Page')

    await formAuthentication.putUsernameAndPassword('users', 'standardUser')
    await browser.pause(2000);
    await formAuthentication.buttonClick()
    await browser.pause(2000);
    await expect(formAuthentication.message).toHaveText('Your username is invalid!')
    await formAuthentication.errorMessage()
    await browser.pause(2000);
    //await expect(formAuthentication.message).toHaveText('Your username is invalid!')
  });


})
