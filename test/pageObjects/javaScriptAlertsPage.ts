import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';
import AllureReporter from '@wdio/allure-reporter';
import RootObject from './rootObject';


export default class JavaScriptAlerts extends RootObject {
    constructor() {
        super();
    }

    public open() {
        AllureReporter.addStep(`Verify if the user can click on the alert,
         prompt and  if they can enter the text on the input confirm and confirm it`)
        return super.open('/javascript_alerts');
    }


    async button(): Promise<WebdriverIO.Element> {
        return await $(".//button[text()='Click for JS Alert']")
    }

    async dropdownOneClick(text: string, options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click on the button and receive the alert and confirm it',
            'Check if the user can click on the button and receive the alert and confirm it',
            'The user can click on the button and receive the alert and confirm it',
            async () => {
                const alert = await this.button();
                await alert.waitForDisplayed({ timeout: 1000 })
                await alert.click({ skipRelease: true })
                await browser.acceptAlert();
                await expect($("#result")).toHaveText(text)
            }
        )
    };

    async buttonClickForJSConfirm(): Promise<WebdriverIO.Element> {
        return await $(".//button[text()='Click for JS Confirm']")
    }

    async dropdownTwoClick(text: string, options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click on the button and receive the confirm alert and confirm it',
            'Check if the user can click on the button and receive the confirm alert and confirm it',
            'The user clicked on the button and received the confirm alert and confirm it',
            async () => {
                const confirm = await this.buttonClickForJSConfirm()
                await confirm.waitForDisplayed({ timeout: 3000 })
                await confirm.click({ skipRelease: true })
                await browser.acceptAlert();
                await expect($("#result")).toHaveText(text)
            }
        )
    };

    async buttonClickForAlertText(): Promise<WebdriverIO.Element> {
        return await $(".//button[text()='Click for JS Prompt']")
    }

    async dropdownThreeClick(text: string, options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click on the button and receive the prompt, enter the text and confirm it',
            'Check if the user can click on the button and receive the prompt, enter the text and confirm it',
            'The user clicked on the button and received the prompt, entered the text and confirmed it',
            async () => {
                const prompt = await this.buttonClickForAlertText()
                await prompt.waitForDisplayed({ timeout: 2000 })
                await prompt.click({ skipRelease: true })
                await browser.sendAlertText("Hello")
                await browser.acceptAlert();
                await expect($('#result')).toHaveText(text)
            }
        )
    };
}
