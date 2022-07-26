
import TablesPage from "../pageObjects/tablesPage+";


const tables = new TablesPage();

describe('Verify if an element is selected ', function () {
    before(async function () {
        await tables.open();

    });

    it('Get content from table cell', async () => {
        await browser.pause(5000);
        await tables.clickTableOneForthChild();
        await browser.pause(5000);
        await tables.clickTableOneThirthChild()
        await browser.pause(5000);
        await tables.clickTableOneSecondhChild()
        await browser.pause(5000);
        await tables.clickTableOneFirsthChild()
        await browser.pause(5000);
        await tables.clickTableTwoFirstChild()
        await browser.pause(5000);
        await tables.clickTableTwoSecondhChild()
        await browser.pause(5000);
        await tables.clickTableTwoThirtChild()
        await browser.pause(5000);
    });
})
