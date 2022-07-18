import OpeningANewWindow from '../pageObjects/openingANewWindowPage';



const newWindow = new OpeningANewWindow();

describe('Opening new window', function () {
  beforeEach(async function () {
    newWindow.open();

  });
  it('Verify if the user can open a new window ', async () => {
    newWindow.redirectLinkClick()
    await browser.pause(5000);


  });

})