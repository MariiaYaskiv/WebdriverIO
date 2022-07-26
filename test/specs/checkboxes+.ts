import Checkbox from '../pageObjects/checkboxesPage+';
//import AllureReporter from '@wdio/allure-reporter';


const checkbox = new Checkbox();

describe('Verify if an element is selected (CheckBox)', function () {
  beforeEach(async function () {
    checkbox.open();

  });
  it("Should click on checkbox", async function () {
   // await AllureReporter.startStep('checkbox')
    await checkbox.clickOnCheckBox(1);
    await browser.pause(2000);
    await expect(checkbox.getCheckboxElement(1).isSelected());
    await browser.pause(2000);
    await browser.pause(5000);
    //await AllureReporter.endStep('passed')
  });


  it('should click CheckBox Second way', async () => {
  //  await AllureReporter.startStep('checkbox')
    await checkbox.ifTheCheckboxIsDesplayed(await checkbox.checkBoxOne())
    await browser.pause(2000);
    await checkbox.clickCheckboxOne()
    await browser.pause(2000);
    await checkbox.ifTheCheckboxIsDesplayed(await checkbox.checkBoxTwo())
    await browser.pause(2000);
   // await AllureReporter.endStep('passed')
  })

})
