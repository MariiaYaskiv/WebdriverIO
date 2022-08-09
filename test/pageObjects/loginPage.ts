import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';
import AllureReporter from '@wdio/allure-reporter';
import RootObject from './rootObject';



export default class FormAuthenticationTwo extends RootObject {
  constructor() {
    super();
  }

  public open() {
    AllureReporter.addStep('Verify if the user can click on the needed checkbox')
    return super.open('/login');
  }

  async pageName(options?: stepOptions
  ): Promise<void> {

    await step(
      options,

      'Verify if the login page exist, if there is expected text',
      'Check if the login page exist, if there is expected text',
      'The login page  exist, and there is written expected text',
      async () => {
        let pageElement = await $('h2');
        expect(pageElement).toExist()
        expect(pageElement).toBeDisplayed()
        expect(pageElement).toHaveTextContaining('Login Page')
      }
    )
  };

  async usernameInput(): Promise<WebdriverIO.Element> {
    return await $('#username')
  }


  async putUsernameInput(name: string, options?: stepOptions
  ): Promise<void> {

    await step(
      options,

      'Verify if the user can enter their name in the input',
      'Check if the user can enter their name in the input',
      'The user  entered their name in the input',
      async () => {
        let usernameInput = await this.usernameInput();
        await usernameInput.setValue(name);
      }
    )
  };

  async passwordInput(): Promise<WebdriverIO.Element> {
    return await $("#password");
  }


  async putPasswordInput(password: string, options?: stepOptions
  ): Promise<void> {

    await step(
      options,

      'Verify if the user can enter their password in the input',
      'Check if the user can enter their password in the input',
      'The user should enter their password in the input',
      async () => {
        let passwordInput = await this.passwordInput();
        await passwordInput.setValue(password);
      }
    )
  }

  async loginButton(): Promise<WebdriverIO.Element> {
    return await $('button[type="submit"]')
  }


  async clickLoginButton(options?: stepOptions
  ): Promise<void> {

    await step(
      options,

      'Verify if the user can click on the button to confirm their credentials',
      'Check if the user can click on the button to confirm their credentials',
      'The button should be clicked',
      async () => {
        let loginButton = await this.loginButton();
        await loginButton.click()
      }
    )
  };

  async errorMessage(text: string, options?: stepOptions
  ): Promise<void> {

    await step(
      options,

      'Verify if the user receive the error message when they entered wrong credentials',
      'Check if the user receive the error message when they entered wrong credentials',
      'The message should be displayed',
      async () => {
        const errorMessage = await $('div [class="flash error"]');
        expect(errorMessage).toHaveTextContaining(text)
      }
    )
  }
};