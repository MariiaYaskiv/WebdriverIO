import Internet from "../pageObjects/InternetPage";

const internet = new Internet();

describe(" Internet main page", function() {
  before(async function() {
    internet.open();
  });

  it("Verify if the needed text of the main page is displayed", async () => {
    internet.displayPageFooter();
    internet.displayPageHeader();
    internet.displayInViewportPageHeader();
  });

  it("Verify if a user can click on the first link and it should be displayed", async () => {
    await internet.clickOnTheFirstLincAndItShoulBeDisplayed();
  });

  it("Verify how many numbers of li items present are on the page", async () => {
    await internet.listOfItemsArrayOfSize();
  });
});
