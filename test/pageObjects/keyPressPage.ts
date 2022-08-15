import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";
import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class KeyPress extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/key_presses");
  }

  async setValueOnTheInput(text: string, options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can enter numbers in the input and it is displayed",
      "Check if the user can enter numbers in the input and it is displayed",
      "The user entered numbers in the input and it is displayed",
      async () => {
        const input = await $("#target");
        await input.waitForDisplayed({ timeout: 1000 });
        await input.setValue(text);
      }
    );
  }
  async expectedResult(text: string, options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can enter numbers in the input and it is displayed",
      "Check if the user can enter numbers in the input and it is displayed",
      "The user entered numbers in the input and it is displayed",
      async () => {
        const result = await $("#result");
        expect(result).toHaveTextContaining(text);
      }
    );
  }
}
