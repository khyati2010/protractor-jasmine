import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { OversightRequirementPage } from "../../com.venminder.page/dashboard/OversightRequirementPage";
import { OversightRequirementManagePage } from "../../com.venminder.page/dashboard/OversightRequirementManagePage";
import { OversightRequirementData } from "../../com.venminder.testdata/TestData";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { DashboardAfterPairingPage } from "../../com.venminder.page/ORBCR/DashboardAfterPairingPage";
import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import { userData,OversightAutomation } from "../../com.venminder.testdata/TestData";
import { OversightAutomationPage } from "../../com.venminder.page/adminPanel/OversightAutomationPage";

describe("Search a Vendor and navigate to Vendor Dashboard page", () => {
	let vendorDashboardPage = new VendorDashboardPage();
	let loginPage = new LoginPage();
	let basepage = new BasePage();
	let oversightRequirementPage = new OversightRequirementPage();
	let oversightAutomationPage = new OversightAutomationPage();
	let dashboardAfterPairingPage = new DashboardAfterPairingPage();
	let userrolespage = new UserRolesPage();
	
	basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
			userrolespage.clickOnSystemSettingsTab();
			dashboardAfterPairingPage.verifyOAON();
			userrolespage.clickOnOversightAutomationTab();
  
    it("Login with Admin User , OA= ON and pairing by category with OR", () => {
			dashboardAfterPairingPage.verifyMethodPaired(OversightAutomation.save_cancelPair[1],OversightAutomation.select_Product[1])
			dashboardAfterPairingPage.verifyTaskStatus(OversightRequirementData.oversightSelectType[2]);
	});
  // working on it.
    it("Missing Data with Product", () => {
    basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
	userrolespage.clickOnSystemSettingsTab();
	oversightAutomationPage.verifyOAON();
//	oversightAutomationPage.verifyCMOff();
	dashboardAfterPairingPage.verifyMissingDataText();
    });
   //});
});
