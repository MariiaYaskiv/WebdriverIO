import RootObject from './rootObject';
import { expect } from 'chai';


export default class Dropdown extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/dropdown');
    }


    async dropdown(): Promise<WebdriverIO.Element> {
        return await $('#dropdown')
    }

    async dropdownOneClick(): Promise<void> {
        let selectBox = await this.dropdown();
        await selectBox.selectByVisibleText('Option 2')
        let option = await $('option=Option 2')
        await expect(option).toBeSelected()

    };

    async dropdownOneClickTwoOption(): Promise<void> {
        let selectBox = await this.dropdown();
        await selectBox.selectByVisibleText('Option 1')
        let option = await $('option=Option 1')
        await expect(option).toBeSelected()

    };

}