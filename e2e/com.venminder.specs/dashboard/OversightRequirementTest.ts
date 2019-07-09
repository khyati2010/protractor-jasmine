import { BasePageOR } from "./../../com.venminder.page_object/shared/BasePageOR";
import { OversightRequirementPage } from "../../com.venminder.page/dashboard/OversightRequirementPage";

import { HomePage } from "../../com.venminder.page/shared/HomePage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import {
  siteUrls,
  userData,
  OversightRequirementData,
  ProductProfileData
} from "../../com.venminder.testdata/TestData";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";
declare const allure: any;

describe("Search a Vendor and navigate to Vendor Dashboard page", () => {
  let loginPage = new LoginPage();
  let siteUrl = new siteUrls();
  let vendor = new userData();
  let vendorDashboardPage = new VendorDashboardPage();
  let basepage = new BasePage();
  let oversightRequirementPage = new OversightRequirementPage();
  it("Login with Admin User and navigate to Vendor Dashboard Page", () => {
    allure.createStep(
      "Logging in the system and searching for a vendor",
      function() {
        basepage.searchVendorAndGoToDashboardPage(
          BasePageOR.inputVendorSearch_old,
          BasePageOR.vendorNameSearchList_old
        );
      }
    )();
    vendorDashboardPage.clickOnOversightRequirementTab();
  });

  it("Verify  Oversight requirement screen is opening and user will be able to add  Oversight requirement modal", () => {
    let questionLabel = basepage.generateRandomText();
    oversightRequirementPage.checkOversightRequiementLabel();
    oversightRequirementPage.clickOnAddOversightRequirementButton();
    oversightRequirementPage.addCustomOversightRequirement(
      questionLabel,
      OversightRequirementData.oversightRequirementType[1]
    );
    oversightRequirementPage.clickOnSubmitOversightItem();
  });

  it("Verify annual review date is getting set in Oversight requirement screen", () => {
    oversightRequirementPage.checkOversightRequiementLabel();
    oversightRequirementPage.setAnnualReviewDate(
      OversightRequirementData.dropDownSelectMonth[1],
      OversightRequirementData.dropDownSelectYear[3],
      OversightRequirementData.lbl_yes
    );
    oversightRequirementPage.clickOnSubmitOversightItem();
  });

  it("Verify task date is getting assign to all in Oversight requirement screen", () => {
    oversightRequirementPage.checkOversightRequiementLabel();
    oversightRequirementPage.assignAllTaskDates(
      OversightRequirementData.dropDownSelectMonth[1],
      OversightRequirementData.dropDownSelectYear[3],
      OversightRequirementData.lbl_yes
    );
  });

  // it("Verify task owner is getting assigned to all in Oversight requirement screen", () => {
  //   oversightRequirementPage.checkOversightRequiementLabel();
  //   oversightRequirementPage.clickOnAddOversightRequirementButton();

  //   oversightRequirementPage.clickOnSubmitOversightItem();
  // });
});
