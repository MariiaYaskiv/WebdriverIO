import RootObject from './rootObject';
import { expect } from 'chai';


export default class InfiniteScroll extends RootObject {
    constructor() {
        super();
    }

    public open() {
        return super.open('/infinite_scroll');
    }


    async scroll(): Promise<WebdriverIO.Element> {
        return await $("#page-footer")
    }

    async scrollClick(): Promise<void> {
        await (await this.scroll()).moveTo()

    };


} 