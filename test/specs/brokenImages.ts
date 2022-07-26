
import BrokenImages from '../pageObjects/brokenImages-';
//import AllureReporter from '@wdio/allure-reporter';

const brokenImages = new BrokenImages();

describe.skip('Broken Images', function () {
  beforeEach(async function () {
    brokenImages.open();

  });
  it.skip('Verify img Images and verify value of images ', async () => {
   // await AllureReporter.startStep('check')
    await brokenImages.brokenImages()
    await browser.pause(5000);
    await brokenImages.brokenImagesThree();
    await browser.pause(5000);
    await brokenImages.brokenImagesTwo();
    await browser.pause(5000);
    await brokenImages.cssProperty();
    await brokenImages.cssProperty2();
    await brokenImages.cssProperty3();
   // await browser.debug()

  })

})

