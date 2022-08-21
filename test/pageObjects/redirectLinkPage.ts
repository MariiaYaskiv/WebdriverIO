import RootObject from "./rootObject";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";
import AllureReporter from "@wdio/allure-reporter";

export default class RedirectLink extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/redirector");
  }

  async redirectLinkClick(
    status: string,
    options?: stepOptions
  ): Promise<void> {
    await step(
      options,
      "Verify if the user can click on the link and follow to another page",
      "Check if the user can click on the link and follow to another page",
      "The link is clicked and new window is opened",
      async () => {
        const selectorTwo = await $("*=here");
        await (await $(selectorTwo)).waitForDisplayed();
        await (await $(selectorTwo)).click();
        expect(browser).toHaveUrlContaining(status);
      }
    );
  }
}
