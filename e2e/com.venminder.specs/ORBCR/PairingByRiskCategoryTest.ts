import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { OversightRequirementPage } from "../../com.venminder.page/dashboard/OversightRequirementPage";
import { OversightRequirementManagePage } from "../../com.venminder.page/dashboard/OversightRequirementManagePage";
import { OversightRequirementData } from "../../com.venminder.testdata/TestData";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";
import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";

describe("Search a Vendor and navigate to Vendor Dashboard page", () => {
	let vendorDashboardPage = new VendorDashboardPage();
	let oversightRequirementManagePage = new OversightRequirementManagePage();
	let basepage = new BasePage();
  let oversightRequirementPage = new OversightRequirementPage();
  let userrolespage = new UserRolesPage();
  
    it("Login with Admin User , OA= ON and pairing by category with OR", () => {
      basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_old, BasePageOR.vendorNameSearchList_old);
   
        //userrolespage.clickOnSystemSettingsTab();
        //code to click on OA = ON
    //userrolespage.clickOnOversightAutomationTab();
        //verifyPairOR- pairing by Cat or Risk
        // Cat--pair- OR- Data save - Cat ? OR ?
        //risk paired -- risk matrix
	});

    it("PBI 13883 - Disable and enable the O.R. Area on Vendor Dashboard on basis of OA ", () => {
			//  basePage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);
			// userrolespage.clickOnProductCategoriesTab();
			// if (pairing = 'risk') {
			//productProfilePage.clickOnEditProductInformationIcon();
			// productProfilePage.selectCategory();
			// productProfilePage.clickSaveOrCancelButton("save");
			// }
			// else if (pairing = 'categrory') {
			// }
			//  vendorDashboardPage.clickOnOversightRequirementTab();
			//Paired OR- disable button not present
		});
    
    it("PBI=1209: Data Changes that Impact Oversight Requirements because of Oversight Automation ,tasks cancel and OR disable", () => {
			// 	oversightRequirementPage.addCustomOversightRequirement(
			// 	OversightRequirementData.oversightRequirementLevel[0],
			// 	OversightRequirementData.addVendorLevelOversightRequirement + new BasePage().generateRandomText(),
			// 		OversightRequirementData.oversightSelectType[1]
			// 	);
			// 	oversightRequirementPage.verifyIndividualSubmit();
			//OversightRequirementData.oversightRequirementLevel[0],
			// 	OversightRequirementData.addVendorLevelOversightRequirement + new BasePage().generateRandomText(),
			// 		OversightRequirementData.oversightSelectType[1]
			// 	);
			//action -- View task
			// 	oversightRequirementPage.verifyIndividualSubmit();
			//
			// basePage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
			//userrolespage.clickOnOversightAutomationTab();
			//verifyPairOR- pairing by this.Cat or this.Risk
			// this.Cat--pair- OR- Data save - this.Cat ? OR ?
			//this.risk paired -- this.risk matrix
		});
  
    it("PBI=14285 : Displaying Text when Adding a Risk Level (OA =ON & Pairing = Risk) ", () => {
			userrolespage.clickOnSystemSettingsTab();
			//checkk OA=ON
			//check Pairing =Risk
			//Call add risk modal
			//check the message
    });
  
   it("PBI=14286:  Deleting Risk Level in RA Template (OA =ON & Pairing = Risk", () => {
			// 	oversightRequirementPage.addCustomOversightRequirement(
			// 	OversightRequirementData.oversightRequirementLevel[0],
			// 	OversightRequirementData.addVendorLevelOversightRequirement + new BasePage().generateRandomText(),
			// 		OversightRequirementData.oversightSelectType[1]
			// 	);
			// 	oversightRequirementPage.verifyIndividualSubmit();
			//OversightRequirementData.oversightRequirementLevel[0],
			// 	OversightRequirementData.addVendorLevelOversightRequirement + new BasePage().generateRandomText(),
			// 		OversightRequirementData.oversightSelectType[1]
			// 	);
			//action -- View task
			// 	oversightRequirementPage.verifyIndividualSubmit();
			//
			// basePage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
			//userrolespage.clickOnOversightAutomationTab();
			//verifyPairOR- pairing by this.Cat or this.Risk
			// this.Cat--pair- OR- Data save - this.Cat ? OR ?
			//this.risk paired -- this.risk matrix
		});
 

});
