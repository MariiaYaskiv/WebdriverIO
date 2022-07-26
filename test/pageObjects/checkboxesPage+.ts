import RootObject from './rootObject';
import { expect } from 'chai';


export default class Checkbox extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/checkboxes');
    }

    get parent() { return $('ul') };
    get childElements() { return this.parent.$$('li') };
    get firstLink() { return $('ul li:nth-child(1) a') };


    getCheckboxElement(index) {
        return  $(`form#checkboxes > input:nth-child(${index})`);
    }

    async clickOnCheckBox(index): Promise<void> {
        await this.getCheckboxElement(index).waitForDisplayed();
        await this.getCheckboxElement(index).click();
    }

    async getLiText(c): Promise<void>  {
        const parent = await $('ul')
        const child = await this.parent.$$('li')
        await child.filter((c) => {
            console.log(c.getText())
        })
    }

    async clickOnClick(): Promise<void> {
        if (await this.firstLink.isDisplayed() === true) {
            await this.firstLink.click()
        }
    }

    async checkBoxOne(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type="checkbox"]:nth-child(1)')
    }

    async clickCheckboxOne(): Promise<void> {
        const click = await this.checkBoxOne();
        await click.click()
    }


    async checkBoxTwo(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes > input[type="checkbox"]:nth-child(3)')
    }

    async clickCheckboxTwo(): Promise<void> {
        const click = await this.checkBoxOne();
        await click.click()
    }


    async ifTheCheckboxIsDesplayed(element): Promise<void>  {
        expect(await element.isDisplayed()).to.be.true;
    }


};
