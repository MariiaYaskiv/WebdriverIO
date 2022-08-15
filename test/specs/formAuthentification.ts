import FormAuthentication from "../pageObjects/formAuthenticationPage";
import { case1 } from "../../data/data";

const formAuthentication = new FormAuthentication();

describe("Form Authentification", function() {
  before(async function() {
    formAuthentication.open();
  });
  it("Verify if a user can enter his username and password", async function() {
    await formAuthentication.pageName();
    await formAuthentication.textContaining("Login Page");
    await formAuthentication.putUsernameAndPassword(
      case1.username,
      case1.password
    );
    await formAuthentication.buttonClick();
    await formAuthentication.errorMessage("Your username is invalid!");
  });
});
