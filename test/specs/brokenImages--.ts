import BrokenImages from "../pageObjects/brokenImages-";
//import AllureReporter from '@wdio/allure-reporter';

const brokenImages = new BrokenImages();

describe("Broken Images", function() {
  before(async function() {
    brokenImages.open();
  });
  it("Verify img Images and verify value of images ", async () => {
    await brokenImages.brokenImages();
    await brokenImages.brokenImagesThree();
    await brokenImages.brokenImagesTwo();
    await brokenImages.cssProperty();
    await brokenImages.cssProperty2();
    await brokenImages.cssProperty3();
  });
});
