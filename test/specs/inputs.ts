import Inputs from "../pageObjects/inputsPage";
const inputs = new Inputs();

describe("Inputs", function() {
  before(async function() {
    inputs.open();
  });

  it("Verify if a user can put numbers and if the input has a focus", async () => {
    await inputs.inputIsFocused("11111");
  });
});
