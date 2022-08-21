import KeyPress from "../pageObjects/keyPressPage";

const keyPress = new KeyPress();
describe("Key Press", () => {
  beforeEach(async function() {
    keyPress.open();
  });
  it("Verify if is coping the text out of active element", async () => {
    keyPress.setValueOnTheInput("M");
    await browser.keys(["Meta", "a"]);
    await browser.keys(["Meta", "r"]);
    await browser.keys(["Meta", "i"]);
    await browser.keys(["Meta", "a"]);
    keyPress.expectedResult("Maria");
  });
});
