import { HomePageOR } from "../../com.venminder.page_object/shared/HomePageOR";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { BasePage } from "./BasePage";
import { Click } from "../../com.venminder.utilities/Click";
import { browser, protractor, ExpectedConditions } from "protractor";

const until = protractor.ExpectedConditions;

export class HomePage extends BasePage {
  click = new Click();
  public clickOnSearchVendor() {
    if (
      browser.wait(
        ExpectedConditions.presenceOf(BasePageOR.inputVendorSearch_old),
        20000
      )
    ) {
      this.click.buttonClick(BasePageOR.inputVendorSearch_old);
    }
  }

  enterVendorName(vendor_name) {
    browser.wait(
      until.visibilityOf(BasePageOR.inputVendorSearch_old),
      50000,
      "Product Profile name label is displayed"
    );
    BasePageOR.inputVendorSearch_old.isDisplayed().then(function(displayed) {
      expect(displayed).toEqual(true);
    });
    this.textbox.setTextValue(BasePageOR.inputVendorSearch_old, vendor_name);
  }
}
