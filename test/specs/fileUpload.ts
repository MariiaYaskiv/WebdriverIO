import FileUpload from '../pageObjects/fileUploadPage';



const fileUpload = new FileUpload();

describe('FileUpload', function () {
    beforeEach(async function () {
        fileUpload.open();

    });

    it('FileUpload', async () => {
        new FileUpload().uploadFile()
        await browser.pause(5000);
        new FileUpload().clickButton()
        await browser.pause(5000);

    });


    it('FileUpload empty', async () => {
        new FileUpload().clickButton()
        await browser.pause(5000);
    });

});

