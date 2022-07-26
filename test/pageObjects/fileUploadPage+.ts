import RootObject from './rootObject';
//import { expect } from 'chai';


export default class FileUpload extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/upload');
    }

    async uploadFile() {
        const filePath = "./screenShot.png"
        let removeFilePath = await browser.uploadFile(filePath)
        await $('#file-upload').setValue(removeFilePath)

    };


    async clickButton() {
        await (await $('#file-submit')).click()

    };

}


