import Checkbox from '../pageObjects/checkboxesPage';



const checkbox = new Checkbox();

describe('Verify if an element is selected (CheckBox)', function () {
  beforeEach(async function () {
    checkbox.open();

  });
  it('should detect if an element is selected (CheckBox) ', async () => {
    new Checkbox().checkboxTitleSee()
    await browser.pause(2000);
    new Checkbox().checkBoxOneCheck()
    await browser.pause(2000);

  });

  it('should detect if an element is selected 1 (CheckBox)', async () => {
    new Checkbox().checkBoxOneClick()
    await browser.pause(5000);

  });

  it('should detect if an element is selected 2 (CheckBox)', async () => {
    new Checkbox().checkBoxOneClickTwoOption()
    await browser.pause(5000);

  });

})
