import RootObject from './rootObject';
import AllureReporter from '@wdio/allure-reporter';
import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';

export default class DynamicLoading extends RootObject {
  constructor() {
    super();
  };

  public open() {
    AllureReporter.addStep('Verify if the user can click on the button and download the text')
    return super.open('/dynamic_loading/1');
  };

  async buttonStart(options?: stepOptions): Promise<void> {
    await step(

      options,

      "Verify if the user can click on the button",
      "The user click on the button",
      "The button is clicked",
      async () => {
        const btnStart = await $("#start button");
        // await btnStart.click();
        browser.waitUntil(() => !btnStart.click())
      }
    )
  };

  async textFinish(options?: stepOptions): Promise<void> {
    await step(

      options,

      "Verify if object under the button is downloading",
      "The object under the button is downloading",
      "The object under the button is downloaded",
      async () => {
        const textFinish = await $("#finish h4");
        await textFinish.waitForDisplayed({ reverse: true });
      }
    )
  };

  async textFinishSeeTheText(text: string, options?: stepOptions): Promise<void> {
    await step(

      options,

      "Verify if object under the button downloaded and the user can see the text",
      "The object under the button should be downloaded and the user can see the text",
      "The object under the button is downloaded and the user can see the text",
      async () => {
        const textFinish = await $("#finish h4");
        // await textFinish.waitForDisplayed()
        await textFinish.waitForDisplayed({ reverse: true });
        expect(textFinish.getText()).toHaveTextContaining(text);
      }
    )
  };

};