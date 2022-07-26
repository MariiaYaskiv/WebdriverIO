import Screenshot from "../pageObjects/screenshotPage+"



const screenshot = new Screenshot();

describe('Verify if the user can does a screenshot', function () {
  before(async function () {
    screenshot.open();

  });
  it('Verify if the user can does a screenshot', async () => {
    await browser.pause(5000);
    await  screenshot.doScreenshot()
    await browser.pause(5000);


  });

})


