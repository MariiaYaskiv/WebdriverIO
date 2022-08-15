import DownloadFile from "../pageObjects/downloadFilePage";

const download = new DownloadFile();

describe("Download file", function() {
  beforeEach(async function() {
    download.open();
  });

  it("Verify if the user can download file from web-site", async () => {
    await download.downloadTheDocument();
  });
});
