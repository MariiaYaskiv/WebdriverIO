import JavaScriptAlerts from '../pageObjects/javaScriptAlertsPage';



const javaScriptAlerts = new JavaScriptAlerts();

describe('Verify if an element is selected (CheckBox)', function () {
    beforeEach(async function () {
        new JavaScriptAlerts().open();

    });
    it('JavaScript Alerts ', async () => {
        javaScriptAlerts.dropdownOneClick()
        await browser.pause(5000);
        await browser.acceptAlert();
        await browser.pause(5000);

    });
})