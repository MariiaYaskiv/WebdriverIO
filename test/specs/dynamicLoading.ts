
import DynamicLoading from "../pageObjects/dynamicLoading";

const dynamicLoading = new DynamicLoading();

describe("Dynamic Loading Page", () => {
  beforeEach(async function() {
    dynamicLoading.open();
  });

  it("Wait for the hidden element to show First way", async () => {
    await dynamicLoading.buttonStart();
    await dynamicLoading.textFinish();
    await dynamicLoading.textFinishSeeTheText("Hello World!");
  });
  it("Wait for the hidden element to show Second way", async () => {
    await dynamicLoading.buttonStart();
    await dynamicLoading.textFinish();
  });
});

