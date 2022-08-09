import { stepOptions } from '../../data/types';

import RootObject from './rootObject';



export default class BrokenImages extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/broken_images');
    }


    async brokenImages(): Promise<void> {
        const userImage = await $('img:nth-child(4)')
        expect(userImage).toHaveAttrContaining('src', '.jpg')
    }
    async brokenImagesThree(): Promise<void> {
        const userImage = await $('#content > div > img:nth-child(3)')
        expect(userImage).toHaveAttrContaining('src', '.jpg')
    }
    async brokenImagesTwo(): Promise<void> {
        const userImage = await $('#content > div > img:nth-child(2)')
        expect(userImage).toHaveAttrContaining('src', '.jpg')
    }





    async cssProperty(): Promise<void> {
        const elem = await $('#content > div > img:nth-child(2)')
        const width = await elem.getCSSProperty('border-box')
        console.log(width)
    }

    async cssProperty2(): Promise<void> {
        const elem = await $('#content > div > img:nth-child(3)')
        const width = await elem.getCSSProperty('border-box')
        console.log(width)
    }
    async cssProperty3(): Promise<void> {
        const elem = await $('#content > div > img:nth-child(4)')
        const width = await elem.getCSSProperty('border-box')
        console.log(width)
    }


}
