import RootObject from './rootObject';


export default class DynamicLoading extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open('/dynamic_loading/1');
  }


  async buttonStart() {
    const btnStart =  await $("#start button");
    await btnStart.click();

  }

  async textFinish() {
    const textFinish =  await $("#finish h4");
    await textFinish.waitForDisplayed();
  }

  async textFinishSeeTheText(text) {
    const textFinish =  await $("#finish h4");
    await textFinish.waitForDisplayed({ reverse: true });
    expect(textFinish.getText()).toHaveTextContaining(text);
  }

  async dynamicLoading() {
    const buttonStart =  await $("#start button");
    const textFinish =  await $("#finish h4");
    const loading =  await $("#loading");
    await buttonStart.click();
    await loading.waitForDisplayed();
    await loading.waitForDisplayed({ reverse: true });
    await textFinish.waitForDisplayed();
    await  expect(textFinish.getText()).toHaveTextContaining('Hello World!');

  }

}