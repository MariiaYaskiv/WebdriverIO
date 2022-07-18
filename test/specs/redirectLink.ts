import RedirectLink from './../pageObjects/redirectLinkPage';



const redirect = new RedirectLink();

describe('Redirect link', function () {
  beforeEach(async function () {
    redirect.open();

  });
  it('Redirect link', async () => {
    redirect.redirectLinkClick()
    await browser.pause(5000);


  });

})