import RootObject from "./rootObject";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";
import AllureReporter from "@wdio/allure-reporter";

export default class Screenshot extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/rederection");
  }

  async doScreenshot(options?: stepOptions): Promise<void> {
    await step(
      options,

      "Verify if the user can do the screenshot of the page",
      "Check if the user can do the screenshot of the page",
      "The screenshot is downloaded",
      async () => {
        await browser.saveScreenshot("./screenshot/myScrinshot.png");
        let title = await $("h1");
        await title.saveScreenshot("./screenshot/screen.png");
      }
    );
  }
}
