import JavaScriptAlerts from '../pageObjects/javaScriptAlertsPage+';



const javaScriptAlerts = new JavaScriptAlerts();

describe('Verify if a user can get allerts from the page', function () {
    beforeEach(async function () {
        await javaScriptAlerts.open();

    });
    it('Verify if a user can get allerts from the page, JavaScript Alerts ', async () => {
        await javaScriptAlerts.dropdownOneClick()
        await browser.pause(5000);
        await browser.acceptAlert();
        await browser.pause(5000);

    });

    it('Verify if a user can get allerts from the page, JavaScript Alerts Second', async () => {
        await javaScriptAlerts.dropdownTwoClick()
        await browser.pause(5000);
        await browser.getAlertText();
        await browser.pause(5000);
        await browser.acceptAlert();
        await browser.pause(5000);

    });


    it('Verify if a user can get allerts from the page, JavaScript Alerts Third', async () => {
        await javaScriptAlerts.dropdownThreeClick()
        await browser.pause(5000);
        await browser.sendAlertText("This is Input Text")
        await browser.pause(5000);
        await browser.acceptAlert();
        await browser.pause(5000);

    });


});