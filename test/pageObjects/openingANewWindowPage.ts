import RootObject from './rootObject';
import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';
import AllureReporter from '@wdio/allure-reporter';

export default class OpeningANewWindow extends RootObject {
    constructor() {
        super();
    }

    public open() {
        AllureReporter.addStep('Verify if the user can click on the link and follow to another page')
        return super.open('/windows');
    }


    async redirectLinkClick(text: string, options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can click on the link and follow to another page',
            'Check if the user can click on the link and follow to another page',
            'The link is clicked and new window is opened',
            async () => {
                const selectorTwo = await $('*=Click')
                await (await $(selectorTwo)).waitForDisplayed()
                await (await $(selectorTwo)).click({ skipRelease: true })
                expect(browser).toHaveUrlContaining(text)
                // await expect(browser).toHaveUrlContaining()
            }
        )
    }
} 