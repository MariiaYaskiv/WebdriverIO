export interface stepOptions {
    takeScreenshot?: boolean;
    createStep?: boolean;
}

export interface LogFile {
    steps: {
      stepNumber: string;
      description: string;
      expected: string;
      actual: string;
      status: string;
      screenshot?: string;
      attachment?: JSON;
    }[];
  }


  

 /* import allure from '@wdio/allure-reporter';
import { stepOptions } from '../data/types';


export default class Steps {
   private static screenshotNumber = Math.floor(Math.random() * 30);
   private static logFile: LogFile = { steps: [] };
   private static screenshotName = `./logs/log${Math.floor(new Date().getTime() + Math.random() * 1000)}.json`;
   private static screenshot = Buffer.from(data).toString('base64');
   private static createLogFile() {
      writeFile(
        Logger.screenshotName,
        JSON.stringify(Logger.logFile),
        (error) => console.error(error),
      );
    }

    private static async handleScreenshot() {
      const data = await browser.saveScreenshot(`./screenshots/step_${Logger.stepNumber}_test_name.png`);
      Logger.screenshot = Buffer.from(data).toString('base64');
      return data;
    }

   static async step(

      options: stepOptions = { createStep: true, takeScreenshot: false },
      description: string, expected: string, actual: string, assertion: Function,

   ): Promise<void> {
      if (options.createStep || options.takeScreenshot) {
         try {
      global.numberOfTheStep ||= 1;
      const number = global.numberOfTheStep++
      //const screenshotNumber = Math.floor(Math.random() * 30);

      const start = async (firstFunction: Function, number: number, description: string, expected: string) => {
         const stepStart = `
         STEP ${number} STARTED.
         Description: ${description}.
         Expected result: ${expected}.`;
         console.log(stepStart);
         await firstFunction();
         if (options.takeScreenshot) {
         allure.addStep(allureTestTitle,

            {
               content: await Steps.handleScreenshot(),
               name: `Step ${number}${description}`,
               type: 'image/png',
            },
            'passed');

         const stepEnd = `STEP ${number} PASSED.
         Description: ${description}.
         Expected result: ${expected}.
         Actual result: ${actual}.`;
         Steps.screenshot,
         console.log(stepEnd);
      }

      if (options.createStep || options.takeScreenshot) {
         try {
            await start(assertion, number, description, expected);
         }
         catch (error) {
            await start(assertion, number, description, expected);
            await browser.saveScreenshot(
               `./screenshot/step_${Steps.screenshotNumber}_is_failed.png`,
            ),
               console.error(
                  console.log(`STEP ${number} FAILED. Actual result:\n\n${error}\n.`)
               );
            throw error;
         }
         return;
      }
      try {
         await assertion();
      } catch (error) {
         await browser.saveScreenshot(
            `./screenshot/${Steps.screenshotNumber}_failed.png`,
         );
         console.log(
            `STEP ${number} FAILED.Actual result:\n\n${error}\n.`,
         );
      }
      throw Error;
   }
}
export const step = Steps.step;*/












