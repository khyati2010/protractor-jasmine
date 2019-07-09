import { ProductProfileData } from "./../../com.venminder.testdata/TestData";
import { Click } from "./../../com.venminder.utilities/Click";
import { TextBox } from "./../../com.venminder.utilities/TextBox";
import { protractor, browser } from "protractor";
import { BasePage } from "../shared/BasePage";
import { VendorProfileOR } from "../../com.venminder.page_object/dashboard/VendorProfileOR";
import { VendorProfileData, OversightRequirementData } from '../../com.venminder.testdata/TestData';
import { VendorDashboardOR } from "../../com.venminder.page_object/dashboard/VendorDashboardOR";
import { ProductProfileOR } from "../../com.venminder.page_object/dashboard/ProductProfileOR";
import { OversightRequirementOR } from '../../com.venminder.page_object/dashboard/OversightRequirementOR';
import { HomePageOR } from "../../com.venminder.page_object/shared/HomePageOR";
const until = protractor.ExpectedConditions;

export class VendorDashboardPage extends BasePage {
  textbox = new TextBox();
  click = new Click();

  clickOnVendorProfileTab() {
    browser.wait(
      until.visibilityOf(VendorDashboardOR.vendorProfileTab),
      20000,
      "Vendor Profile Tab is not Visible"
    );
    this.click.buttonClick(VendorDashboardOR.vendorProfileTab);
    browser.wait(
      until.visibilityOf(VendorProfileOR.labelVendorInformation),
      20000,
      "Vendor Information Label is not displayed"
    );
    VendorProfileOR.labelVendorInformation.getText().then(text => {
      this.assertEquals(
        text.toString().trim(),
        VendorProfileData.label_Vendor_Information
      );
    });
  }

  clickOnProductProfileTab() {
    browser.wait(
      until.visibilityOf(VendorDashboardOR.productProfileTab),
      20000,
      "Product Profile Tab is not Visible"
    );
    this.click.buttonClick(VendorDashboardOR.productProfileTab);
    browser.wait(
      until.visibilityOf(ProductProfileOR.lblProductInfo),
      20000,
      "Product Information Label is not displayed"
    );
    ProductProfileOR.lblProductInfo.getText().then(text => {
      this.assertEquals(
        text.toString().trim(),
        ProductProfileData.lbl_Product_Information
      );
    });
  }

  clickOnOversightRequirementTab() {
    browser.wait(until.visibilityOf(VendorDashboardOR.oversightRequirementTab), 20000, "Oversight Requirement Tab is not Visible");
    this.click.buttonClick(VendorDashboardOR.oversightRequirementTab);
    browser.wait(until.visibilityOf(OversightRequirementOR.labelOversightRequirement), 20000, "Oversight Requirement Label is not displayed");
    OversightRequirementOR.labelOversightRequirement.getText().then(text => {
      this.assertEquals(text.toString().trim(), OversightRequirementData.label_Oversight_requirement);
    });
  }

  clickOnDeleteVendor(vendorName: string) {
    this.click.buttonClick(VendorDashboardOR.buttonDeleteVendor);
    browser.wait(until.visibilityOf(VendorDashboardOR.labelDeleteVendor), 30000);
    this.textbox.setTextValue(VendorDashboardOR.inputVendorName, vendorName);
    VendorDashboardOR.btnDeleteVendorSubmit.isEnabled().then(isEnabled => {
      if (isEnabled)
        this.click.buttonClick(VendorDashboardOR.btnDeleteVendorSubmit);
    });
    browser.wait(until.visibilityOf(HomePageOR.venminderLogo), 30000);
  }
}
