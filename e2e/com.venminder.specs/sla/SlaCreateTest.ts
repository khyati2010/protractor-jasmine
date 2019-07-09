import { browser, element, by, protractor, Browser, WebElement } from "protractor";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { VenminderHomePage } from "../../com.venminder.page/sla/VenminderHomePage";
import { siteUrls, userData } from "../../com.venminder.utilities/TestData";

describe("  Setup SLA functionality", function () {
  let loginPage = new LoginPage();
  let sla = new VenminderHomePage();
  let siteUrl = new siteUrls();
  let credential = new userData();

  it("Clicking create button", function () {
    // loginPage.openUrl(siteUrl.sand_dev_3_url);
    // loginPage.login();
    sla.slaCreateClick();
  });

});



