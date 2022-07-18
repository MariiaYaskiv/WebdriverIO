import InfiniteScroll from '../pageObjects/InfiniteScrollPage';



const infiniteScroll = new InfiniteScroll();

describe('Verify if an element is selected (CheckBox)', function () {
    beforeEach(async function () {
        infiniteScroll.open();

    });
    it('JavaScript Alerts ', async () => {
        infiniteScroll.scrollClick()
        await browser.pause(5000);


    });
})