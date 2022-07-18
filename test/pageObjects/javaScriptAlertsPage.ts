import RootObject from './rootObject';
import { expect } from 'chai';


export default class JavaScriptAlerts extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/javascript_alerts');
    }


    async button(): Promise<WebdriverIO.Element> {
        return await $(".//button[text()='Click for JS Alert']")
    }

    async dropdownOneClick(): Promise<void> {
        await (await this.button()).click()

    };


} 