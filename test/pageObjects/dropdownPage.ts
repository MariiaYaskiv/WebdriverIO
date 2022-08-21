import RootObject from "./rootObject";
import AllureReporter from "@wdio/allure-reporter";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";

export default class Dropdown extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/dropdown");
  }

  async dropdown(): Promise<WebdriverIO.Element> {
    return await $("#dropdown");
  }

  async dropdownOneClick(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Click on the second option ",
      "The second option should be clicked",
      "The second option is clicked",
      async () => {
        let selectBox = await this.dropdown();
        await selectBox.selectByVisibleText("Option 2");
        let option = await $("option=Option 2");
        expect(option).toBeSelected();
      }
    );
  }

  async dropdownOneClickTwoOption(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Click on the first option ",
      "The first option should be clicked",
      "The first option is clicked",
      async () => {
        let selectBox = await this.dropdown();
        await selectBox.selectByVisibleText("Option 1");
        let option = await $("option=Option 1");
        expect(option).toBeSelected();
      }
    );
  }
}
