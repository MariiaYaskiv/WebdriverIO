import RootObject from './rootObject';
import { expect } from 'chai';

export default class NotificationMessageRendered extends RootObject {
    constructor() {
        super();
    }
    public open() {
        return super.open('/notification_message_rendered');
    }


    async clickButton() {
        const button = await $("p > a")
        await button.click()
    }

    async textMessage(toSee) {
        const textMessage = await $("#flash-messages > div")
        await textMessage.waitForDisplayed()
        const text = await textMessage.getText()
        await expect(text).to.be.equal(toSee)
    }
}



