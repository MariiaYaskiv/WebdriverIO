import RootObject from "./rootObject";
import { expect } from "chai";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";
import AllureReporter from "@wdio/allure-reporter";

export default class NotificationMessageRendered extends RootObject {
  constructor() {
    super();
  }
  public open() {
    return super.open("/notification_message_rendered");
  }

  async clickButton(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can click on the button",
      "Check if the user can click on the button",
      "The button is clicked",
      async () => {
        const button = await $("p > a");
        await button.click();
      }
    );
  }

  async textMessage(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can get the comparing massage ",
      "Check if the user can get the comparing massage",
      "The comparing massage is displayed",
      async () => {
        const messageHeader = await $("#flash");
        const messageHeaderText = await messageHeader.getText();
        const messages = [
          "Action successful\n×",
          "Action unsuccesful, please try again\n×",
        ];
        expect(messageHeaderText).to.be.oneOf(messages);
      }
    );
  }
}
