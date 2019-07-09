import { BasePageOR } from '../../com.venminder.page_object/shared/BasePageOR';
import { BasePage } from '../../com.venminder.page/shared/BasePage';
import { VendorProfilePage } from '../../com.venminder.page/dashboard/VendorProfilePage';
import { VendorDashboardPage } from '../../com.venminder.page/dashboard/VendorDashboardPage';
import { VendorProfileData } from '../../com.venminder.testdata/TestData';

describe("ORBCR - Answer Type Options for Custom Vendor and Product Profile Items", () => {
  let vendorprofilepage = new VendorProfilePage();
  let venderdashboardpage = new VendorDashboardPage();
  let basepage = new BasePage();

  basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_old, BasePageOR.vendorNameSearchList_old);

  it("PBI-7817 -> Verify the 'Answer Format' options, When user adding the Custom profile items on Vendor profile tab", () => {
    venderdashboardpage.clickOnVendorProfileTab();
    vendorprofilepage.clickOnEditVendorInformationIcon();
    vendorprofilepage.clickOnAddProfileItemButton();
    vendorprofilepage.verifyAddCustomItemModal();
  });

  it("PBI-7818 -> Verify the fields, When user Select 'Dropdown Select' option from Answer Format", () => {
    vendorprofilepage.verifySingleMultiDropDownOptionsBehaviour(VendorProfileData.answerFormatOptions[3]);
    vendorprofilepage.clickOnCancelCustomItem();
  });

  it("PBI-7819 -> Verify the fields, When user Select 'Multi - dropdown Select' option from Answer Format", () => {
    vendorprofilepage.clickOnAddProfileItemButton();
    vendorprofilepage.verifySingleMultiDropDownOptionsBehaviour(VendorProfileData.answerFormatOptions[4]);
    vendorprofilepage.clickOnCancelCustomItem();
  });

  it("PBI-7896 -> Verify the 'Edit Custom Field' modal for 'Single - dropdown Select' when user click on edit icon", () => {
    vendorprofilepage.clickOnAddProfileItemButton();
    let questionLabel = basepage.generateRandomText();
    let answerFormate = VendorProfileData.answerFormatOptions[3];
    vendorprofilepage.addNewCustomProfileItem(questionLabel, answerFormate, VendorProfileData.checkBoxYesNo[1]);
    vendorprofilepage.verifyEditCustomItemModal();
  });

  it("PBI-7897 -> Verify the 'Edit Custom Field' modal for 'Multi - dropdown Select' when user click on edit icon", () => {
    vendorprofilepage.clickOnAddProfileItemButton();
    let questionLabel = basepage.generateRandomText();
    let answerFormate = VendorProfileData.answerFormatOptions[4];
    vendorprofilepage.addNewCustomProfileItem(questionLabel, answerFormate, VendorProfileData.checkBoxYesNo[0]);
    vendorprofilepage.verifyEditCustomItemModal();
  });

  it("PBI-7898 -> Verify the Response Value for 'Single - dropdown Select' when user click on edit icon", () => {
    vendorprofilepage.clickOnAddProfileItemButton();
    let questionLabel = basepage.generateRandomText();
    let answerFormat = VendorProfileData.answerFormatOptions[3];
    vendorprofilepage.addNewCustomProfileItem(questionLabel, answerFormat, VendorProfileData.checkBoxYesNo[1]);
    vendorprofilepage.verifyAnswerFormatResponseValue(questionLabel, answerFormat);
  });

  it("PBI-7899 -> Verify the Response Value for 'Multi - dropdown Select' when user click on edit icon", () => {
    vendorprofilepage.clickOnAddProfileItemButton();
    let questionLabel = basepage.generateRandomText();
    let answerFormat = VendorProfileData.answerFormatOptions[4];
    vendorprofilepage.addNewCustomProfileItem(questionLabel, answerFormat, VendorProfileData.checkBoxYesNo[0]);
    vendorprofilepage.verifyAnswerFormatResponseValue(questionLabel, answerFormat);
  });
});

