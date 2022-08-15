import RootObject from "./rootObject";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";
import AllureReporter from "@wdio/allure-reporter";

export default class FormAuthentication extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/login");
  }

  get inputUsername() {
    return $("#username");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $('button[type="submit"]');
  }
  get message() {
    return $(".flash error");
  }

  async pageName(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the page exist",
      "Check if the text on the page is displayed",
      "The text on the page is displayed",
      async () => {
        let pageElement = await $("h2");
        expect(pageElement).toExist();
        expect(pageElement).toBeDisplayed();
      }
    );
  }

  async textContaining(text?: string, options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the text on the page has needed containing",
      "The text on the page should have needed containing",
      "The text on the page has needed containing",
      async () => {
        let pageElement = await $("h2");
        expect(pageElement).toHaveTextContaining(text);
      }
    );
  }

  async putUsernameAndPassword(
    username?: string,
    password?: string,
    options?: stepOptions
  ): Promise<void> {
    await step(
      options,
      "Verify if the user can enter his credentials",
      "The user enter his credentials",
      "The credentials are entered",
      async () => {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
      }
    );
  }
  async buttonClick(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can click the button",
      "The user click the button",
      "The button is clicked",
      async () => {
        await this.btnSubmit.click();
      }
    );
  }

  async errorMessage(text?: string, options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the error massage has text containing",
      "The error massagee should have text containing",
      "The button is clicked",
      async () => {
        const errorMessage = await $('div [class="flash error"]');
        expect(errorMessage).toHaveTextContaining(text);
      }
    );
  }
}
