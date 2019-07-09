import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { OversightRequirementPage } from "../../com.venminder.page/dashboard/OversightRequirementPage";
import { OversightRequirementManagePage } from "../../com.venminder.page/dashboard/OversightRequirementManagePage";
import { OversightRequirementData } from "../../com.venminder.testdata/TestData";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";
import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import { OversightAutomationPage } from "../../com.venminder.page/AdminPanel/OversightAutomationPage";
import { RiskAssessmentPage } from "../../com.venminder.page/riskAssessment/RiskAssessmentPage";

describe("Search a Vendor and navigate to Vendor Dashboard page", () => {
	let riskAssessmentPage = new RiskAssessmentPage();
	let oversightRequirementManagePage = new OversightRequirementManagePage();
	let basepage = new BasePage();
	let oversightRequirementPage = new OversightRequirementPage();
	let userrolespage = new UserRolesPage();
	let oversightAutomationPage = new OversightAutomationPage();
	let basePage = new BasePage();
	it("Login with Admin User , OA= ON and pairing by risk with OR, verify risk deleted shall reflect mapping modal", () => {
		// basepage.searchVendorAndGoToDashboardPage(
		// 	BasePageOR.inputVendorSearch_old,
		// 	BasePageOR.vendorNameSearchList_old
		// );
		basePage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
		userrolespage.clickOnSystemSettingsTab();
		oversightAutomationPage.verifyOAON();
		userrolespage.clickOnOversightAutomationTab();
		oversightAutomationPage.verifyMethodApplied;
		oversightAutomationPage.verifyRiskApply();
		basePage.clickOnHomeScreen();
		userrolespage.clickOnRiskAssessment();
		riskAssessmentPage.verifyRiskModalAndProceed("continue");
		riskAssessmentPage.verifyDeleteAddRisk("submit");
		riskAssessmentPage.verifySubmitRiskAssesment("apply");
		riskAssessmentPage.verifyDeleteRiskMappingModal("save");
		
	});
});
