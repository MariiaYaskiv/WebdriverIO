import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';
import AllureReporter from '@wdio/allure-reporter';
import RootObject from './rootObject';

export default class Hovers extends RootObject {

    constructor() {
        super();
    }

    public open() {
        AllureReporter.addStep('Verify if the user can scroll to the image and image will be hover')
        return super.open('/hovers');
    }

    get user1(): Promise<WebdriverIO.Element> { return $('div.figure:nth-child(3) > img:nth-child(1)') }
    get user1Profile(): Promise<WebdriverIO.Element> { return $('div.figure:nth-child(3) > div:nth-child(2)') }

    get user2(): Promise<WebdriverIO.Element> { return $('div.figure:nth-child(4) > img:nth-child(1)') }
    get user2Profile(): Promise<WebdriverIO.Element> { return $('div.figure:nth-child(4) > div:nth-child(2)') }

    get user3(): Promise<WebdriverIO.Element> { return $('div.figure:nth-child(5) > img:nth-child(1)') }
    get user3Profile(): Promise<WebdriverIO.Element> { return $('div.figure:nth-child(5) > div:nth-child(2)') }

    async moveToElementFirst(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can move the mouse to the first element',
            'Check if the user can move the mouse to the first element',
            'The user can move the mouse to the first element',
            async () => {
                const user1 = await $('div.figure:nth-child(3) > img:nth-child(1)')
                browser.waitUntil(() => !user1.waitForDisplayed())

                await user1.waitForDisplayed();
                await user1.moveTo();
            }
        )
    }

    async getTextFirst(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if it is text displayed when the user move the mouse under the first image',
            'Check if it is text displayed when the user move the mouse under the first image',
            'The text is displayed when the user move the mouse under the first image',
            async () => {
                const user1Profile = await $('div.figure:nth-child(3) > div:nth-child(2)')
                return await user1Profile.getText()//.equals(`name: user1\nView profile`);
            }
        )
    }

    async moveToElementSecond(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can move the mouse to the second element',
            'Check if the user can move the mouse to the second element',
            'The user can move the mouse to the second element',
            async () => {
                const user2 = await $('div.figure:nth-child(4) > img:nth-child(1')
                await user2.waitForDisplayed();
                await user2.moveTo();
            }
        )
    }

    async getTextSecond(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if it is text displayed when the user move the mouse under the second image',
            'Check if it is text displayed when the user move the mouse under the second image',
            'The text is displayed when the user move the mouse under the second image',
            async () => {
                const user2Profile = await $('div.figure:nth-child(4) > div:nth-child(2)')
                return await user2Profile.getText();
            }
        )
    }


    async moveToElementThird(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the user can move the mouse to the third element',
            'Check if the user can move the mouse to the third element',
            'The user can move the mouse to the third element',
            async () => {
                const user2 = await $('div.figure:nth-child(5) > img:nth-child(1)')
                await user2.waitForDisplayed();
                await user2.moveTo();
            }
        )
    }

    async getTextThird(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if it is text displayed when the user move the mouse under the third image',
            'Check if it is text displayed when the user move the mouse under the third image',
            'The text is displayed when the user move the mouse under the third image',
            async () => {
                const user2Profile = await $('div.figure:nth-child(5) > div:nth-child(2)')
                await user2Profile.getText();
            }
        )
    }
    async clickOnTheLinkOne(status: string, options?: stepOptions): Promise<void> {
        await step(
            options,

            'Verify if the third image is clickable and go to another page',
            'Check if the third image is clickable and go to another page',
            'The third image is clickable and go to another page',
            async () => {
                const clickOnTheText = await $('*=View profile')
                await clickOnTheText.click()
                expect(browser).toHaveUrlContaining(status)
            }
        )
    }
};
