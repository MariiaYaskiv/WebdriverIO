import Hovers from '../pageObjects/hoversPage';
import { expect } from 'chai'


const hovers = new Hovers();
describe(" Hovers ", function () {
    before(async function () {
        hovers.open();
    });

    it(" Should be hover over users profile ", async function () {

        await hovers.moveToElementFirst();
        // await expect(hovers.getTextFirst(`1name: user1\nView profile`))//.equals(`name: user1\nView profile`);
        await browser.pause(5000)

        await hovers.moveToElementSecond();
        // await expect(hovers.getTextSecond()).equals(`name: user2\nView profile`);
        await browser.pause(5000)

        await hovers.moveToElementThirt();
        // await expect(hovers.getTextThirt()).equals(`name: user3\nView profile`);
        await browser.pause(5000)

    });


}); 