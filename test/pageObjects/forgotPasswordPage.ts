import RootObject from './rootObject';
import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';
import AllureReporter from '@wdio/allure-reporter';



export default class ForgotPassword extends RootObject {
  constructor() {
    super();
  }

  public open() {

    AllureReporter.addStep('Verify if the user can enter his credentials if he forgot his password')
    return super.open('/forgot_password');
  }



  async forgotPasswordInput(
    options?: stepOptions
  ): Promise<void> {

    await step(
      options,

      'Enter the value of password in the input',
      'The value should be displayed in the input',
      'The value is written and displayed in the input',
      async () => {
        const email = 'test@test.email'
        const input = await $('input[type="text"]')
        // browser.waitUntil(() => !input.waitForDisplayed())
        await input.waitForDisplayed()
        await input.setValue(email)

      },
    );
  }

  async passwordInput(
    options?: stepOptions
  ): Promise<void> {
    await step(
      options,
      'Click the button enter and verify if the text displays in the screen',
      'Should be displayed the text containing in the screen',
      'The text containing is displayed in the screen',
      async () => {
        await (await $('button')).click()
        const message = await $('h1')
        expect(message).toHaveTextContaining('Internal Server Error')
      }

    )


  }

}