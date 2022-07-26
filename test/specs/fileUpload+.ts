import FileUpload from '../pageObjects/fileUploadPage+';



const fileUpload = new FileUpload();

describe('FileUpload', function () {
    beforeEach(async function () {
        fileUpload.open();

    });

    it('Verify if the user can Upload the file', async () => {
        await  fileUpload.uploadFile()
        await browser.pause(5000);
        await fileUpload.clickButton()
        await browser.pause(5000);

    });


    it('File Upload empty (negative)', async () => {
        await browser.pause(5000);
        await fileUpload.clickButton()
        await browser.pause(5000);
    });

});

