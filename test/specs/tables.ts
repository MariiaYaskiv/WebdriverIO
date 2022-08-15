import TablesPage from "../pageObjects/tablesPage";

const tables = new TablesPage();

describe("Tables ", function() {
  before(async function() {
    tables.open();
  });

  it("Get content from table cell", async () => {
    await tables.clickTableOneForthChild();
    await tables.clickTableOneThirthChild();
    await tables.clickTableOneSecondhChild();
    await tables.clickTableOneFirsthChild();
    await tables.clickTableTwoFirstChild();
    await tables.clickTableTwoSecondhChild();
    await tables.clickTableTwoThirtChild();
  });
});
