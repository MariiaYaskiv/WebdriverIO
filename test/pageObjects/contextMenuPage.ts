import RootObject from "./rootObject";
import AllureReporter from "@wdio/allure-reporter";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";

export default class ContextMenu extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/context_menu");
  }

  async contextMenuClick(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can click on the square and see the alert",
      "The square should be clicked and the alert is visible",
      "The square is clicked and the alert is visible",
      async () => {
        const menu = await $("#hot-spot");
        await menu.click({ button: "right", skipRelease: true });
         await menu.waitForDisplayed();
       //   await browser.getAlertText();
      //  browser.waitUntil(() => !browser.getAlertText());
       // await browser.acceptAlert();
        //assert.deepEqual(myAlert, 'You selected a context menu' )
      }
    );
  }
}
