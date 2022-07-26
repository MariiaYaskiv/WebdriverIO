import RootObject from './rootObject';
//import { expect } from 'chai';


export default class Screenshot extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/rederection');
    }


    async doScreenshot(){
        await browser.saveScreenshot('myScrinshot.png')
        let title = await $('h1')
        await title.saveScreenshot('screen.png')
    }


} 