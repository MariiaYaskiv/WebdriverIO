import allure from '@wdio/allure-reporter';
import { stepOptions, LogFile } from '../data/types';
import { writeFile} from 'fs';



export default class Steps {

    private static logFile: LogFile = {
        steps: []
    };
    private static screenshotName = `./log/${ Math.floor((Math.random() * 50) + 1)}.json`;

    private static createLogFile() {
        writeFile(
            Steps.screenshotName,
            JSON.stringify(Steps.logFile),
            (error) => console.error(error),
        );
    }

    private static screenshot: string;
    private static async takeTheScreenshot() {
        const screenshotNumber = Math.floor(Math.random() * 50) + 1;
        const screen = await browser.saveScreenshot(`./screenshot/${screenshotNumber}.png`);
        Steps.screenshot = Buffer.from(screen).toString('base64');
        return screen;
    }
    static async step(

        options: stepOptions = {
            createStep: true,
            takeScreenshot: false
        },
        description: string, expected: string, actual: string, assertion: Function,

    ): Promise < void > {
        const screenshotNumber1 = Math.floor(Math.random() * 50) + 1;

        global.numberOfTheStep ||= 1;
        const number = global.numberOfTheStep++
        let allureTestTitle;
        const start = async (firstFunction: Function, description: string, expected: string) => {

            allureTestTitle = `Step ${number}. Description: ${description}.`;
            const stepStart = `
        STEP ${number} STARTED.Expected result: ${expected}.`;
            console.log(stepStart);
            await firstFunction();
        }
        if (options.createStep || options.takeScreenshot) {

            try {
                await start(assertion, description, expected);

                if (options.takeScreenshot) {
                    allure.addStep(
                        allureTestTitle, {
                            content: await Steps.takeTheScreenshot(),
                            name: `Step ${number}. ${description}`,
                            type: 'image/png',
                        },
                        'passed'
                    );
                    Steps.logFile.steps = [...Steps?.logFile?.steps, {
                        stepNumber: `${number}`,
                        description,
                        expected,
                        actual,
                        status: 'PASSED',
                        screenshot: Steps.screenshot,
                    }];
                } else {
                    allure.addStep(
                        allureTestTitle);
                    Steps.logFile.steps = [...Steps?.logFile?.steps, {
                        stepNumber: `${number}`,
                        description,
                        expected,
                        actual,
                        status: 'PASSED',
                    }];
                }
                console.log(`STEP ${number} PASSED. Actual result: ${actual}`);
                Steps.createLogFile();
            } catch (error) {
                await Steps.takeTheScreenshot(),
                    console.log(`STEP ${number} FAILED. Actual result: ${error}`);
                Steps.logFile.steps = [...Steps?.logFile?.steps, {
                    stepNumber: `${number}`,
                    description,
                    expected,
                    actual,
                    status: 'ERROR',
                    screenshot: Steps.screenshot,
                }];
                Steps.createLogFile();
                throw error;
            } finally {
                Steps.createLogFile();
            }
        } else {
            try {
                await assertion();
            } catch (error) {
                browser.saveScreenshot(`./screenshot/${screenshotNumber1}.png`);
                console.log(`STEP ${number} FAILED. Actual result: ${error}`);
                Steps.createLogFile();
                throw error;
            }
        }
    }
}

export const step = Steps.step;