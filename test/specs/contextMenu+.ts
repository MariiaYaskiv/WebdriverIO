import ContextMenu from "../pageObjects/contextMenuPage+";



const contextMenu = new ContextMenu();

describe('Verify if the user can click on the square and get alert', function () {
    beforeEach(async function () {
        contextMenu.open();

    });

    it('Verify if the user can click on the square and get alert', async () => {
        await contextMenu.contextMenuClick()
        await browser.pause(5000);
    });




});