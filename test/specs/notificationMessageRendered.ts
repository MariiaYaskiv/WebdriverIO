import NotificationMessageRendered from "../pageObjects/notificationMessageRenderedPage";
import {expect} from 'chai'


const notification = new NotificationMessageRendered();

describe('Notification message rendered', function () {
    before(async function () {
        notification.open();

    });
    it.only("Verify what message a user can get from the page, test comparing", async function () {
        await notification.clickButton()
        await notification.textMessage()
    })
})