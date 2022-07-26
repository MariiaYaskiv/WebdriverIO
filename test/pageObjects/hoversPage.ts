//import { expect } from 'chai';
import RootObject from './rootObject';

export default class Hovers extends RootObject {

    constructor() {
        super();
    }

    public open() {
        return super.open('/hovers');
    }

    get user1() { return $('div.figure:nth-child(3) > img:nth-child(1)') }
    get user1Profile() { return $('div.figure:nth-child(3) > div:nth-child(2)') }

    get user2() { return $('div.figure:nth-child(4) > img:nth-child(1)') }
    get user2Profile() { return $('div.figure:nth-child(4) > div:nth-child(2)') }

    get user3() { return $('div.figure:nth-child(5) > img:nth-child(1)') }
    get user3Profile() { return $('div.figure:nth-child(5) > div:nth-child(2)') }

    async moveToElementFirst() {
        const user1 = await $('div.figure:nth-child(3) > img:nth-child(1)')
        await user1.waitForDisplayed();
        await user1.moveTo();

    }

    async getTextFirst(a: string) {
        const user1Profile = await $('div.figure:nth-child(3) > div:nth-child(2)')
        return await user1Profile.getText()//.equals(`name: user1\nView profile`);
    }

    async moveToElementSecond() {
        const user2 = await $('div.figure:nth-child(4) > img:nth-child(1')
        await  user2.waitForDisplayed();
        await user2.moveTo();
    }

    async getTextSecond() {
        const user2Profile = await $('div.figure:nth-child(4) > div:nth-child(2)')
        return await user2Profile.getText();
    }


    async moveToElementThirt() {
        const user2 = await $('div.figure:nth-child(5) > img:nth-child(1)')
        await  user2.waitForDisplayed();
        await user2.moveTo();
    }

    async getTextThirt() {
        const user2Profile = await $('div.figure:nth-child(5) > div:nth-child(2)')
        return await user2Profile.getText();
    }





}
