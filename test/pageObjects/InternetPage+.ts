import { getTextOfJSDocComment } from "typescript";
import RootObject from "./rootObject";

export default class Internet extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open();
    }

    get pageHeader() { return $('h1.heading') };
    get subHeading() { return $('h2') };
    get pageFooter() { return $('#page-footer') };
    get parent() { return $('ul') };
    get childElements() { return this.parent.$$('li') };
    get firstLink() { return $('ul li:nth-child(1) a') };


    async clickOnClick() {
        if (await this.firstLink.isDisplayed() === true) {
            await  this.firstLink.click()
        }
    }
}