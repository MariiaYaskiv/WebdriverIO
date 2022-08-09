import RootObject from './rootObject';
import { expect } from 'chai';
import AllureReporter from '@wdio/allure-reporter';
import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';

export default class Checkbox extends RootObject {
    constructor() {
        super();
    };


    public open() {
        AllureReporter.addStep('Verify if the user can click on the needed checkbox')
        return super.open('/checkboxes');
    };

    async checkBoxOne(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type="checkbox"]:nth-child(1)')
    };

    async clickCheckboxOne(
        options?: stepOptions
    ): Promise<void> {
        await step(
            options,

            'Click on the first checkbox ',
            'The first checkbox should be clicked',
            'The first checkbox is clicked',
            async () => {

                const click = await this.checkBoxOne();
                await click.click()
               // browser.waitUntil(() => !click.isDisplayed())
            }
        )
    };

    async checkBoxTwo(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type="checkbox"]:nth-child(3)')
    };

    async ifTheCheckboxIsDesplayed(
        element: WebdriverIO.Element,
        options?: stepOptions
    ): Promise<void> {
        await step(
            options,

            'Verify if the second checkbox is choosed and displayed',
            'The second checkbox should be choosed and displayed',
            'The second checkbox is choosed and displayed',
            async () => {

                expect(await element.isDisplayed()).to.be.true;
              //  browser.waitUntil(() => !element.isDisplayed())
            }
        )
    };

    async ifTheCheckboxIsDesplayedSecond(
        element: WebdriverIO.Element,
        options?: stepOptions
    ): Promise<void> {
        await step(
            options,

            'Verify if the first checkbox is choosed and displayed',
            'The first checkbox should be choosed and displayed',
            'The first checkbox is choosed and displayed',
            async () => {

                expect(await element.isDisplayed()).to.be.true;
                browser.waitUntil(() => !element.isDisplayed())
            }
        )
    };
};
