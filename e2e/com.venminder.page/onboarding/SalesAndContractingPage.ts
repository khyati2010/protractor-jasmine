import { browser, protractor } from "protractor";
import { SalesAndContractingOR } from "../../com.venminder.page_object/onboarding/SalesAndContractingPageOR";
import { LoginPageOR } from "../../com.venminder.page_object/shared/LoginPageOR";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";
const until = protractor.ExpectedConditions;

export class AddSoftware {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();

  addUsername() {
    LoginPageOR.username.sendKeys(this.userData.dc_admin_username);
  }

  addPassword() {
    LoginPageOR.password.sendKeys(this.userData.password);
  }

  clickLoginBtn() {
    LoginPageOR.login_button.click();
  }

  clickSalesAndContracting() {
    browser.wait(until.presenceOf(SalesAndContractingOR.salesAndContractingTab), 10000);
    SalesAndContractingOR.salesAndContractingTab.click();
  }

  clickNewClientSale() {
    SalesAndContractingOR.newClientSaleTab.click();
  }

  inputClientName(clientName) {
    SalesAndContractingOR.clientSearchTxtBox.sendKeys(clientName);
  }

  clickClientSearchBtn() {
    SalesAndContractingOR.clientSearchSubmitBtn.click();
  }

}
