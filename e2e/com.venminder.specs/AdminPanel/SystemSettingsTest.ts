import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { SystemSettingsPage } from "../../com.venminder.page/AdminPanel/SystemSettingsPage";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";

describe("ORBCR - Functional Testing of Admin Panel System Setting Tab", () => {
  let userrolespage = new UserRolesPage();
  let basePage = new BasePage();
  let systemSettingsPage = new SystemSettingsPage();
  basePage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
  userrolespage.clickOnSystemSettingsTab();
  systemSettingsPage.verifySystemSettingScreen();

  describe("Admin Panel - System Settings : Convert from Page save to section saves ", () => {
    it("PBI 7282- RISK APPROVAL SETTINGS ", () => {
      systemSettingsPage.changeRiskApproverSetting();
      systemSettingsPage.clickRiskSetting("save");
      systemSettingsPage.changeRiskApproverSetting();
      systemSettingsPage.clickRiskSetting("cancel");
      systemSettingsPage.verifyRiskApproversCount();
    });
   });

  describe("Admin Panel - System Settings : Convert from Page save to section saves ", () => {
    it("PBI 7282- DOCUMENT STORAGE PERMISSIONS", () => {
      systemSettingsPage.selectFromList(AdminPanelData.dropDownSelection[2]);
      systemSettingsPage.clickDocumentStorageSetting("save");
      systemSettingsPage.selectFromList(AdminPanelData.dropDownSelection[3]);
      systemSettingsPage.clickDocumentStorageSetting("cancel");
    });
  });

  //Service Permission is diabaled for testy tester user.
  describe("Admin Panel - System Settings : Convert from Page save to section saves ", () => {
    it("PBI 7282- SERVICE PERMISSIONS", () => {
      systemSettingsPage.selectFromServicePermissionList(AdminPanelData.dropDownSelection[1], 'save');
      systemSettingsPage.selectFromServicePermissionList(AdminPanelData.dropDownSelection[3],'cancel');
    });
  });
  
});
