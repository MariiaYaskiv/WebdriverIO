import FormAuthentication from '../pageObjects/formAuthenticationPage+';
import { case1 } from '../../data/data'


const formAuthentication = new FormAuthentication();

describe('Verify if a user can registrate', function () {
  before(async function () {
    formAuthentication.open();
  });
  it('Verify if a user can enter his username and password', async function () {
    await formAuthentication.pageName()
    await formAuthentication.putUsernameAndPassword(case1.username, case1.password)
    await browser.pause(2000);
    await formAuthentication.buttonClick()
    await browser.pause(2000);
    await formAuthentication.errorMessage('Your username is invalid!')
    await browser.pause(2000);

  });


})
