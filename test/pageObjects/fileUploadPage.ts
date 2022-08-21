import RootObject from "./rootObject";
import AllureReporter from "@wdio/allure-reporter";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";

export default class FileUpload extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/upload");
  }

  async uploadFile(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can upload the file",
      "The user can upload the file",
      "The user have uploaded the file",
      async () => {
        const filePath = "./screenShot.png";
        let removeFilePath = await browser.uploadFile(filePath);
        await $("#file-upload").setValue(removeFilePath);
      }
    );
  }

  async clickButton(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can click on the button",
      "The user click on the button",
      "The button is clicked",
      async () => {
        const file = await $("#file-submit");
        // await file.click()
        browser.waitUntil(() => !file.click());
      }
    );
  }
}

/*async enterEmail(somevalue:string ,options?: stepOptions): Promise<void> {

  await step(

    options,

    "My Entering email in email field",

    async () => {

      const field = await this.emailField();

      field.setValue(somevalue);

    },

  );

}*/
