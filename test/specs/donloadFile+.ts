import DownloadFile from "../pageObjects/donloadFilePage+";



const download = new DownloadFile();

describe('Download file', function () {
    beforeEach(async function () {
        await download.open();

    });

    it('Verify if the user can download file from web-site', async () => {
        await download.downloadTheDocument()
    });




});
