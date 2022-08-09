import { step } from "../../helpers/helper"
import { stepOptions } from '../../data/types';
import AllureReporter from '@wdio/allure-reporter';
import RootObject from './rootObject';

export default class Internet extends RootObject {
    constructor() {
        super();
    }

    public open() {
        AllureReporter.addStep('Verify if the needed text and items are displayed on the main page')
        return super.open();
    }


    async clickOnTheFirstLincAndItShoulBeDisplayed(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the first link is displayed',
            'Check if the first link is displayed',
            'The first link is displayed',
            async () => {
                const firstLink = $('ul li:nth-child(1) a');
                if (await firstLink.isDisplayed() === true) {
                    await firstLink.click()
                }
            }
        )
    }

    async displayPageFooter(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the page footer is displayed',
            'Check if the page footer is displayed',
            'The page footer is displayed',
            async () => {
                const pageFooter = await $('#page-footer')
                await pageFooter.isDisplayed()
            }
        )
    }

    async displayPageHeader(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the title is displayed',
            'Check if the title is displayed',
            'The title is displayed',
            async () => {
                const pageHeader = await $('h1.heading');
                await pageHeader.isExisting()
            }
        )
    }

    async displayInViewportPageHeader(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if the page head is displayed',
            'Check if the page head is displayed',
            'The page head is displayed',
            async () => {
                const pageHeader = await $('h1.heading');
                await pageHeader.isDisplayedInViewport()
            }
        )
    }

    async listOfItemsArrayOfSize(options?: stepOptions
    ): Promise<void> {

        await step(
            options,

            'Verify if there are in the page enough items',
            'Check if there are in the page enough items',
            'There is enough items in the page ',
            async () => {
                const listItems = await $$('ul > li')
                console.log('listItems count: ', listItems)
                expect(listItems).toBeElementsArrayOfSize(44)
                // expect( listItems).toBeElementsArrayOfSize({ lte: 50 })
            }
        )
    }
}