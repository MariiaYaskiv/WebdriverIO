import Screenshot from "../pageObjects/screenshotPage"



const screenshot = new Screenshot();

describe(' Screenshot', function () {
  before(async function () {
    screenshot.open();

  });
  it('Verify if the user can does a screenshot', async () => {

    await screenshot.doScreenshot()

  });

})


