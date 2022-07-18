import RootObject from './rootObject';
import { expect } from 'chai';


export default class RedirectLink extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/redirector');
    }


    async redirectLinkClick()/*: Promise<WebdriverIO.Element>*/ {
        const selectorTwo = await $('*=here')
        await (await $(selectorTwo)).waitForDisplayed()
        await (await $(selectorTwo)).click()
        await expect(browser).toHaveUrlContaining('https://the-internet.herokuapp.com/status_codes')

    }


} 