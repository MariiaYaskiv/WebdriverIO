import ContextMenu from "../pageObjects/contextMenuPage";
import AllureReporter from '@wdio/allure-reporter';
import type { Browser } from 'webdriverio';

const contextMenu = new ContextMenu();

describe('Context menu', function () {
    beforeEach(async function () {
        contextMenu.open();

    });

    it('Verify if the user can click on the square and get alert', async () => {
        browser.pause(5000)
        await contextMenu.contextMenuClick()
        browser.pause(50000)
        //await contextMenu.contextMenuClick1()
        browser.pause(500000)
    });




});