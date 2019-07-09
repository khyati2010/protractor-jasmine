import { BasePageOR } from "./../../com.venminder.page_object/shared/BasePageOR";
import { VendorDashboardOR } from "../../com.venminder.page_object/dashboard/VendorDashboardOR";
import { AddVendorOR } from "../../com.venminder.page_object/dashboard/AddVendorOR";
import { Click } from "./../../com.venminder.utilities/Click";
import { TextBox } from "./../../com.venminder.utilities/TextBox";
import { browser, protractor } from "protractor";
import { BasePage } from "../shared/BasePage";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { VendorProfileData } from "../../com.venminder.testdata/TestData";
const until = protractor.ExpectedConditions;

export class AddVendorPage extends BasePage {
  vendorName = null;
  productName = null;
  categories = null;
  productManagers = null;

  textbox = new TextBox();
  click = new Click();
  select = new SelectDropDown();

  fillCreateVendorForm(vendarname: string, criticality: string, thirdFourthIndex: number, productname: string, productType: string, productmanager?: string) {
    browser.wait(until.visibilityOf(AddVendorOR.headerAddVendor), 20000);
    this.textbox.setTextValue(AddVendorOR.inputVendorName, vendarname);
    this.select.selectElementByText(AddVendorOR.selectCriticality, criticality);
    this.select.selectElementByIndex(AddVendorOR.selectThirdFourthParty, thirdFourthIndex);
    this.textbox.setTextValue(AddVendorOR.inputProductName, productname);
    this.textbox.setTextValue(AddVendorOR.inputProductType, productType);
    this.categories = this.select.selectRandomDropdownReturnText(AddVendorOR.selectCategory);
    this.productManagers = this.select.selectRandomDropdownReturnText(AddVendorOR.selectProductManager);
  }

  createNewVendor() {
    this.clickOnAddVendorLink();
    this.vendorName = VendorProfileData.vendorName + this.generateRandomText();
    this.productName = VendorProfileData.productName + this.generateRandomText();
    this.fillCreateVendorForm(this.vendorName, VendorProfileData.critical, VendorProfileData.thirdPartyIndex, this.productName, VendorProfileData.productType);
    this.click.buttonClick(AddVendorOR.buttonSubmit);
    browser.wait(until.invisibilityOf(BasePageOR.loadingWaitIndicator), 20000);
    browser.wait(until.presenceOf(AddVendorOR.buttonGoToVendorDashboard), 20000);
    this.click.buttonClick(AddVendorOR.buttonGoToVendorDashboard);
    browser.wait(until.visibilityOf(VendorDashboardOR.headerVendorDashboard), 20000);
    VendorDashboardOR.headerVendorDashboard.getText().then(data => {
      this.assertEquals(data.toString().trim(), VendorProfileData.dashboardLabel);
    });
    VendorDashboardOR.labelVendorName.getText().then(data => {
      this.assertEquals(data.toString().trim(), this.vendorName);
    });
  }
}
