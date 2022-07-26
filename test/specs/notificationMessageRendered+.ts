import NotificationMessageRendered from "../pageObjects/notificationMessageRenderedPage+";



const notification = new NotificationMessageRendered();

describe('Verify what message a user can get from the page', function () {
    before(async function () {
        await notification.open();

    });
    it.only("Verify what message a user can get from the page, test comparing", async function () {
        await notification.clickButton()
        await notification.textMessage("Action successful\n×" && "Action unsuccesful, please try again\n×")

    })
})