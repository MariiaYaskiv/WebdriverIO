import Checkbox from "../pageObjects/checkboxesPage";
import AllureReporter from "@wdio/allure-reporter";

const checkbox = new Checkbox();

describe("CheckBox", function() {
  beforeEach(async function() {
    checkbox.open();
  });

  it("Should click on checkbox 2. Verify if an element is selected ", async () => {
    await checkbox.ifTheCheckboxIsDesplayed(await checkbox.checkBoxOne());
    await checkbox.clickCheckboxOne();
    await checkbox.ifTheCheckboxIsDesplayedSecond(await checkbox.checkBoxTwo());
  });
});
