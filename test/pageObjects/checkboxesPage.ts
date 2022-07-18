import RootObject from './rootObject';
import { expect } from 'chai';


export default class Checkbox extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/checkboxes');
    }

    private get checkboxTitle() { return $('#example'); }

    public async checkboxTitleSee() {
        expect(browser).toHaveTitleContaining('Checkboxes')
    }

    public async checkBoxOneCheck() {
        let element = await $('.checkboxes');
        console.log(await element.isSelected());

    }


    ////////////////////////////////////

    async checkBox(): Promise<WebdriverIO.Element> {
        return await $('#checkboxes')
    }



    async checkBoxOneClick(): Promise<void> {
        let selectBox = await this.checkBox();
        await selectBox.selectByVisibleText(' checkbox 1')
        let optionOne = await $('input= checkbox 1')
        await expect(optionOne).toBeSelected()

    }



    async checkBoxOneClickTwoOption(): Promise<void> {
        let selectBoxTwo = await this.checkBox();
        await selectBoxTwo.selectByVisibleText(' checkbox 2')
        let optionTwo = await $('input= checkbox 2')
        await expect(optionTwo).toBeSelected()

    }


};
