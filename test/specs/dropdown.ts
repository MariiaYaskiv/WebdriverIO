import Dropdown from '../pageObjects/dropdownPage';



const dropdown = new Dropdown();

describe('Dropdown', function () {
    beforeEach(async function () {
        dropdown.open();

    });

    it('Dropdown 1', async () => {
        new Dropdown().dropdownOneClick()
        await browser.pause(5000);

    });


    it('Dropdown 2', async () => {

        new Dropdown().dropdownOneClickTwoOption()
        await browser.pause(5000);
    });

});

