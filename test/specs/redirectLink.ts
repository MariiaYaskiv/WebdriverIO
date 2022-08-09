import RedirectLink from '../pageObjects/redirectLinkPage';



const redirect = new RedirectLink();

describe('Redirect link', function () {
  before(async function () {
    redirect.open();

  });
  it('Verify if the user can click on the link and he get Redirect link', async () => {
    await redirect.redirectLinkClick('status_codes')


  });

})