import RootObject from './rootObject';
//import { expect } from 'chai';


export default class RedirectLink extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/redirector');
    }


    async redirectLinkClick(status_codes: string)/*: Promise<WebdriverIO.Element>*/ {
        const selectorTwo = await $('*=here')
        await (await $(selectorTwo)).waitForDisplayed()
        await (await $(selectorTwo)).click()
        await expect(browser).toHaveUrlContaining(status_codes)

    }


} 