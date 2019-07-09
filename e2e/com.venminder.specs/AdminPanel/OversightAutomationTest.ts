import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { SystemSettingsPage } from "../../com.venminder.page/AdminPanel/SystemSettingsPage";
import { OversightAutomationPage } from "../../com.venminder.page/AdminPanel/OversightAutomationPage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import {
	userData,
	OversightAutomation
} from "../../com.venminder.testdata/TestData";
import { AddVendorPage } from "../../com.venminder.page/dashboard/AddVendorPage";
import { VendorDashboardPage } from "./../../com.venminder.page/dashboard/VendorDashboardPage";
import { OversightRequirementPage } from "../../com.venminder.page/dashboard/OversightRequirementPage";
import { ProductProfilePage } from "../../com.venminder.page/dashboard/ProductProfilePage";
import { ProductCategoriesByCategoryPage } from "../../com.venminder.page/adminPanel/ProductCategoriesByCategoryPage";

let oversightRequirementPage = new OversightRequirementPage();
let vendorDashboardPage = new VendorDashboardPage();
let addvendor = new AddVendorPage();

describe("ORBCR - Functional Testing of Admin Panel Oversight Automation Tab", function() {
	let loginPage = new LoginPage();
	let userrolespage = new UserRolesPage();
	let basePage = new BasePage();
	let UserData = new userData();
	let productProfilePage = new ProductProfilePage();
	let oversightAutomationPage = new OversightAutomationPage();
	let productCategoriesPage = new ProductCategoriesByCategoryPage();
	let systemSettingsPage = new SystemSettingsPage();

	it("PBI-8241 ORBCR - Oversight Automation in Admin Panel Area", () => {
		// loginPage.logoff();
		// loginPage.dcAdminLogin(UserData.dc_admin_username, UserData.password);
		// oversightAutomationPage.verifyOASoftwareModule();
		// loginPage.dcAdminLogout();
		// loginPage.login();
 		basePage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
  		userrolespage.clickOnSystemSettingsTab();
  		systemSettingsPage.verifySystemSettingScreen();
		//userrolespage.clickOnOversightAutomationTab();
	});

  describe("Admin Panel - Oversight Automation tab and information modal ", () => {
    //oversightAutomationPage.verifySimplifiedModal();
		//userrolespage.clickOnSystemSettingsTab();
		it("PBI=13621 : Pairing unpairing and pairing methods with oversight requirement in case of OA On/Off, Display text when adding category and vendor product ", () => {	
			oversightAutomationPage.verifySystemSettings(
				OversightAutomation.save_cancelPair[1],
				OversightAutomation.actionAddDelete[1],
				OversightAutomation.select_Product[1]
			);
		});

		it("PBI=1209 : Deleting a Category when Pairing=Category and OA=ON", () => {
			oversightAutomationPage.verifySystemSettings(
				OversightAutomation.save_cancelPair[1],
				OversightAutomation.actionAddDelete[2],
				OversightAutomation.select_Product[1]
			);
		});

		it("PBI=1209 : Check Tasks status for marking product as active/inactive when OA=ON", () => {
			userrolespage.clickOnSystemSettingsTab();
			oversightAutomationPage.verifyOAON();
			basePage.searchVendorAndGoToDashboardPage(
				BasePageOR.inputVendorSearch_old,
				BasePageOR.vendorNameSearchList_old
			);
			vendorDashboardPage.clickOnProductProfileTab();
			productProfilePage.clickOnEditProductInformationIcon();
			//mark product as inactive
			productProfilePage.clickSaveOrCancelButton("save");
			vendorDashboardPage.clickOnOversightRequirementTab();
			//check product should not be present
			vendorDashboardPage.clickOnProductProfileTab();
			productProfilePage.clickOnEditProductInformationIcon();
			//mark product as active again
			productProfilePage.clickSaveOrCancelButton("save");
			vendorDashboardPage.clickOnOversightRequirementTab();
			//check product should be present  with no task paired according to OA(reuse pair method )
		});

		it("PBI=1209 : Check Tasks status for marking product as exempt/non-exempt when OA=ON", () => {
			userrolespage.clickOnSystemSettingsTab();
			oversightAutomationPage.verifyOAON();
			basePage.searchVendorAndGoToDashboardPage(
				BasePageOR.inputVendorSearch_old,
				BasePageOR.vendorNameSearchList_old
			);
			vendorDashboardPage.clickOnProductProfileTab();
			productProfilePage.clickOnEditProductInformationIcon();
			productProfilePage.selectCategory("new");
			productCategoriesPage.checkExemptOption();
			productProfilePage.clickSaveOrCancelButton("save");
			vendorDashboardPage.clickOnOversightRequirementTab();
			oversightRequirementPage.verifyExemptCategory(2);
			//check product should be present  with no task paired according to OA(reuse pair method )
		});

		it("PBI=1209 : Adding a new vendor and product when OA=ON", () => {
			oversightAutomationPage.verifyOAON();
			addvendor.createNewVendor("new");
			vendorDashboardPage.clickOnOversightRequirementTab();
			oversightRequirementPage.verifyMsgNoOrEnabled();
		});
	});
});
