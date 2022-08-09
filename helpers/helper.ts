import allure from '@wdio/allure-reporter';
import { stepOptions } from '../data/types';


export default class Steps {
   static async step(

      options: stepOptions = { createStep: true, takeScreenshot: false },
      description: string, expected: string, actual: string, assertion: Function,

   ): Promise<void> {

      global.numberOfTheStep ||= 1;
      const number = global.numberOfTheStep++
      const screenshotNumber = Math.floor(Math.random() * 30);

      const start = async (firstFunction: Function, number: number, description: string, expected: string) => {
         const stepStart = `
         STEP ${number} STARTED.
         Description: ${description}.
         Expected result: ${expected}.`;
         await firstFunction();

         allure.addStep(stepStart,

            {
               content: await browser.saveScreenshot(`./screenshot/${screenshotNumber}.png`),
               name: `Step ${number}${description}`,
               type: 'image/png',
            },
            'passed');

         const stepEnd = `STEP ${number} PASSED.
         Description: ${description}.
         Expected result: ${expected}.
         Actual result: ${actual}.`;
         console.log(stepEnd);
      }

      if (options.createStep || options.takeScreenshot) {
         try {
            await start(assertion, number, description, expected);
         }
         catch (error) {
            await start(assertion, number, description, expected);
            await browser.saveScreenshot(
               `./screenshot/step_${screenshotNumber}_is_failed.png`,
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
            `./screenshot/${screenshotNumber}_failed.png`,
         );
         console.log(
            `STEP ${number} FAILED.Actual result:\n\n${error}\n.`,
         );
      }
      throw Error;
   }
}
export const step = Steps.step;












