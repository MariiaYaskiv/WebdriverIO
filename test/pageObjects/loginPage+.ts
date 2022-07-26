import RootObject from './rootObject';



export default class FormAuthenticationTwo extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open('/login');
  }

  async pageName() {
    let pageElement = await $('h2');
        await expect(pageElement).toExist()
        await expect(pageElement).toBeDisplayed()
        await expect(pageElement).toHaveTextContaining('Login Page')
  }

  async usernameInput(): Promise<WebdriverIO.Element> {
    return await $('#username')
  }


  async putUsernameInput(name): Promise<void> {
    let usernameInput = await this.usernameInput();
    await usernameInput.setValue(name);
  }

  async passwordInput(): Promise<WebdriverIO.Element> {
    return await $("#password");
  }


  async putPasswordInput(password): Promise<void> {
    let passwordInput = await this.passwordInput();
    await passwordInput.setValue(password);
  }

  async loginButton(): Promise<WebdriverIO.Element> {
    return await $('button[type="submit"]')
  }


  async clickLoginButton(): Promise<void> {
    let loginButton = await this.loginButton();
    await loginButton.click()
  }

  async errorMessage(text) {
    const errorMessage = await $('div [class="flash error"]');
    await expect(errorMessage).toHaveTextContaining(text)
}
}