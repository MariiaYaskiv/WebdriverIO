import RootObject from "./rootObject";
import AllureReporter from "@wdio/allure-reporter";
import { step } from "../../helpers/helper";
import { stepOptions } from "../../data/types";

export default class DownloadFile extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open("/download");
  }

  async downloadTheDocument(options?: stepOptions): Promise<void> {
    await step(
      options,
      "Verify if the user can click on the link and download the document",
      "The link should be clicked and the document should be downloaded",
      "The link is clicked and the document is downloaded",
      async () => {
        const fifeElement = $("//a[contains(@href, 'download')]");
        await fifeElement.click();
        // (await fifeElement).isExisting()
        browser.waitUntil(() => !fifeElement.isExisting());
      }
    );
  }
}

