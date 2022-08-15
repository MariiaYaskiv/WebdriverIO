import Dropdown from "../pageObjects/dropdownPage";
import AllureReporter from "@wdio/allure-reporter";

const dropdown = new Dropdown();

describe("Dropdown", function() {
  beforeEach(async function() {
    dropdown.open();
  });

  it("Verify if a user can click on Dropdown and choose the option First way ", async () => {
    await dropdown.dropdownOneClick();
  });

  it("Verify if a user can click on Dropdown and choose the option Second way", async () => {
    await dropdown.dropdownOneClickTwoOption();
  });
});
