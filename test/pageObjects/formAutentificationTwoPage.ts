import RootObject from './rootObject';
import { expect } from 'chai';


export default class FormAuthenticationTwo extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open('/login');
  }

  async usernameInput(): Promise<WebdriverIO.Element> {
    return await $('#username')
  }


  async putUsernameInput(): Promise<void> {
    let usernameInput = await this.usernameInput();
    await usernameInput.setValue('Mariia');
  }

  async passwordInput(): Promise<WebdriverIO.Element> {
    return await $("#password");
  }


  async putPasswordInput(): Promise<void> {
    let passwordInput = await this.passwordInput();
    await passwordInput.setValue('something');
  }

  async loginButton(): Promise<WebdriverIO.Element> {
    return await $('button[type="submit"]')
  }


  async clickLoginButton(): Promise<void> {
    let loginButton = await this.loginButton();
    await loginButton.click()
  }


}