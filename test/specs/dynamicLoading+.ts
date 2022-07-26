
import DynamicLoading from '../pageObjects/dynamicLoading+';


const dynamicLoading = new DynamicLoading;
beforeEach(async function () {
    dynamicLoading.open();

});
describe('Dynamic Loading Page', () => {
    it.skip('Wait for the hidden element to show First way', async () => {
        await  dynamicLoading.buttonStart();
        await dynamicLoading.textFinish();
        await dynamicLoading.textFinishSeeTheText("Hello World!")

    });
    it('Wait for the hidden element to show Second way', async () => {
        await  dynamicLoading.buttonStart();
        await dynamicLoading.textFinish();

        it('Wait for the hidden element to show Third way', async () => {
            await   dynamicLoading.dynamicLoading()


        });
    })

})