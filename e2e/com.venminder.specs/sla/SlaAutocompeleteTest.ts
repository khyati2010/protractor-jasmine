import { browser, element, by, protractor, Browser, WebElement } from "protractor";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { AddVendorPage } from "../../com.venminder.page/sla/AddVendorPage";
import { siteUrls, userData } from "../../com.venminder.utilities/TestData";

describe("  Setup SLA functionality", function () {
  let loginPage = new LoginPage();
  let sla = new AddVendor();
  let siteUrl = new siteUrls();
  let credential = new userData();

  it("Verfying Autocompelete textbox for vendor selection", function () {
    loginPage.openUrl(siteUrl.sand_dev_3_url);
    loginPage.login();
    sla.slaAutoCompelete();
  });
});