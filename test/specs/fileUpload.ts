import FileUpload from "../pageObjects/fileUploadPage";

const fileUpload = new FileUpload();

describe("FileUpload", function() {
  beforeEach(async function() {
    fileUpload.open();
  });

  it("Verify if the user can Upload the file", async () => {
    await fileUpload.uploadFile();
    await fileUpload.clickButton();
  });

  it("File Upload empty (negative)", async () => {
    await fileUpload.clickButton();
  });
});

