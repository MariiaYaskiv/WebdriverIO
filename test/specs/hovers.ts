import Hovers from "../pageObjects/hoversPage";
import { expect } from "chai";

const hovers = new Hovers();
describe(" Hovers ", function() {
  before(async function() {
    hovers.open();
  });

  it(" Should be hover over users profile ", async function() {
    await hovers.moveToElementFirst();
    await hovers.moveToElementSecond();
    // await expect(hovers.getTextSecond()).equals(`name: user2\nView profile`);
    await hovers.moveToElementThird();
    await hovers.getTextThird(/*'name: user3'*/);
    // await expect(hovers.getTextThirt()).equals(`name: user3\nView profile`);
    await hovers.clickOnTheLinkOne(
      "https://the-internet.herokuapp.com/users/3"
    );
  });
});
