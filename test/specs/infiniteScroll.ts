import InfiniteScroll from '../pageObjects/InfiniteScrollPage-';



const infiniteScroll = new InfiniteScroll();

describe('Verify if a user can scroll down', function () {
    before(async function () {
        infiniteScroll.open();

    });
    it.skip('Verify if a user can scrool down', async () => {
        await infiniteScroll.scrollClick()
        await browser.pause(5000);


    });
})