import { ProductProfilePage } from "../../com.venminder.page/dashboard/ProductProfilePage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";
import { VendorProfilePage } from "../../com.venminder.page/dashboard/VendorProfilePage";
import { ProductProfileData } from "../../com.venminder.testdata/TestData";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { BasePageOR } from '../../com.venminder.page_object/shared/BasePageOR';
declare const allure: any;

describe("Search a Vendor and navigate to Vendor Dashboard page", () => {
  let basepage = new BasePage();
  let productProfilePage = new ProductProfilePage();
  let profilepage = new VendorProfilePage();
  let venderdashboardpage = new VendorDashboardPage();

  it("Login with Admin User and navigate to Vendor Dashboard Page", () => {
    allure.createStep(
      "Logging in the system and searching for a vendor",
      function () {
        basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_old, BasePageOR.vendorNameSearchList_old);
      }
    )();
  });

  /* it("open the product profile tab and edit form", () => {
    basepage.searchVendorAndGoToDashboardPage_Old();
    productProfilePage.openProductProfile();
    productProfilePage.clickOnEditProductInformationIcon();
    productProfilePage.enterProductName();
    productProfilePage.enterProductType();
    productProfilePage.selectStatusAsActive();
    productProfilePage.selectStatusAsInactive();
    productProfilePage.enterDescription();
    productProfilePage.selectProductManager();
    productProfilePage.selectCollaborators();
    productProfilePage.selectCategory();
    productProfilePage.radioBtnNpiAccess();
    productProfilePage.radioBtnProductOutsourced();
    productProfilePage.selectContacts();
    productProfilePage.radioBtnProductProcessed();
    productProfilePage.clickSaveButton();
    //Need to add assertions
  });*/

  it("PBI-7817 -> Verify the 'Answer Format' options, When user adding the Custom profile items on product profile tab", () => {
    venderdashboardpage.clickOnProductProfileTab();
    productProfilePage.clickOnEditProductInformationIcon();
    productProfilePage.clickOnAddProfileItemButton();
    allure.createStep("Verify the add custom profile item modal is present", function () {
      productProfilePage.verifyAddCustomItemModal();
    }
    )();
  });

  it("PBI-7818 -> Verify the fields, When user Select 'Dropdown Select' and  'Multi - dropdown Select' option from Answer Format", () => {
    profilepage.verifySingleMultiDropDownOptionsBehaviour(
      ProductProfileData.answerFormatOptions[3]
    );
    profilepage.verifySingleMultiDropDownOptionsBehaviour(
      ProductProfileData.answerFormatOptions[4]
    );
  });

  it("PBI-7836 -> Verify that when 'Dropdown Select' OR 'Multi - Dropdown Select' selected and user is not provided  value in at-least 2 response fields", () => {
    let questionname = basepage.generateRandomText();
    // profilepage.fillAddCustomItemModal(
    //   questionname,
    //   ProductProfileData.answerFormatOptions[4],
    //   ProductProfileData.checkBoxYesNo[0]
    // );
  });
});