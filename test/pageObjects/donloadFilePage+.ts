import RootObject from './rootObject';


export default class DownloadFile extends RootObject {
  constructor() {
    super();
  }

  public open() {
    return super.open('/download');
  }


  async downloadTheDocument(): Promise<void>  {
    const fifeElement = $("//a[contains(@href, 'download')]")
    await fifeElement.click()
    await browser.pause(3000)
  }
}