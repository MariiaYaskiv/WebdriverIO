import RootObject from './rootObject';
import { expect } from 'chai';


export default class OpeningANewWindow extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/windows');
    }


    async redirectLinkClick()/*: Promise<WebdriverIO.Element>*/ {
        const selectorTwo = await $('*=Click')
        await (await $(selectorTwo)).waitForDisplayed()
        await (await $(selectorTwo)).click()
        await expect(browser).toHaveUrlContaining('new')

    }
} 