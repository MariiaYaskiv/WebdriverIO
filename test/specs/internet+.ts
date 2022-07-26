import Internet from '../pageObjects/InternetPage+';



const internet = new Internet();

describe(' Testing Innit page', function () {
    before(async function () {
        internet.open();
    });

    it('Is footer Displayed', async () => {
        await console.log(internet.pageFooter.isDisplayed())
        await browser.pause(5000);
    })

    it('Does the header exist?', async () => {
        await console.log(internet.pageHeader.isExisting())
        await browser.pause(5000);
    })

    it('Is Header in viewport?', async () => {
        await console.log(internet.pageHeader.isDisplayedInViewport())
        await browser.pause(5000);
    })

    it('Click and Call', async () => {
        await internet.clickOnClick()
        await browser.pause(5000);
    })
})