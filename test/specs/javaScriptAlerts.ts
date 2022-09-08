import JavaScriptAlerts from "../pageObjects/javaScriptAlertsPage";

const javaScriptAlerts = new JavaScriptAlerts();

describe("JavaScript Alerts", function() {
  beforeEach(async function() {
    javaScriptAlerts.open();
  });
  it.skip("Verify if a user can get alerts from the page, JavaScript Alerts ", async () => {
    await javaScriptAlerts.dropdownOneClick(
      "You successfully clicked an alert"
    );
  });

  it.skip("Verify if a user can get alerts from the page, JavaScript Alerts Second", async () => {
    await javaScriptAlerts.dropdownTwoClick("You clicked: Ok");
  });

  it.skip("Verify if a user can get alerts from the page, JavaScript Alerts Third", async () => {
    await javaScriptAlerts.dropdownThreeClick("You entered: Hello");
  });
});
