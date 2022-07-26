import RootObject from './rootObject';



export default class ForgotPassword extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open('/forgot_password');
  }



  async forgotPasswordInput() {
    const email = 'test@test.email'
    await (await $('input[type="text"]')).waitForDisplayed()
    await (await $('input[type="text"]')).setValue(email)
  }


  async buttonSubmit(): Promise<void> {
    return await (await $('button')).click()

  }

  async passwordInput(text: string) {
    const message = await $('h1')
    await expect(message).toHaveTextContaining(text)
  }




}