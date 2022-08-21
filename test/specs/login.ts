import FormAuthenticationTwo from "../pageObjects/loginPage";
import { case1 } from "../../data/data";

const login = new FormAuthenticationTwo();

describe("Login", function() {
  before(async function() {
    login.open();
  });
  it("Verify if a user can enter his username and password", async function() {
    await login.pageName();
    await login.putUsernameInput(case1.username);
    await login.putPasswordInput(case1.password);
    await login.clickLoginButton();
    await login.errorMessage("Your username is invalid!");
  });
});
