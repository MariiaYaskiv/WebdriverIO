import Dropdown from '../pageObjects/dropdownPage+';



const dropdown = new Dropdown();

describe('Dropdown', function () {
    beforeEach(async function () {
        await dropdown.open();

    });

    it('Verify if a user can click on Dropdown and choose the option First way ', async () => {
        await dropdown.dropdownOneClick()
        await browser.pause(5000);

    });


    it('Verify if a user can click on Dropdown and choose the option Second way', async () => {

        await dropdown.dropdownOneClickTwoOption()
        await browser.pause(5000);
    });

});

