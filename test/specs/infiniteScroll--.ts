import InfiniteScroll from '../pageObjects/InfiniteScrollPage--';



const infiniteScroll = new InfiniteScroll();

describe(' Scroll down', function () {
    before(async function () {
        infiniteScroll.open();

    });
    it.skip('Verify if a user can scrol down', async () => {
        await infiniteScroll.scrollClick()


    });
})