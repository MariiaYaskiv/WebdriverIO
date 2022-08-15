import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";
import AllureReporter from "@wdio/allure-reporter";
import RootObject from "./rootObject";

export default class Inputs extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/inputs");
  }

  async inputIsFocused(string: string, options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can move the mouse to the first element",
      "Check if the user can move the mouse to the first element",
      "The user can move the mouse to the first element",
      async () => {
        const inputBox = await $("input[type=number]");
        // console.log('isFocused State: ', await inputBox.isFocused())
        await inputBox.click();
        expect(inputBox).toBeFocused();
        // console.log('isFocused State: ', await inputBox.isFocused())
        await inputBox.isFocused();
        await expect(inputBox.isFocused());
        await inputBox.setValue(string);
      }
    );
  }
}
