import { OversightRequirementsPage } from "../../com.venminder.page/adminPanel/OversightRequirementsPage";
import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { AdminPanelData, OversightRequirementData } from "../../com.venminder.testdata/TestData";

describe("ORBCR - Functional Testing of Admin Panel Oversight Requirement Tab", function() {
	let oversightRequirement = new OversightRequirementsPage();
	let userrolespage = new UserRolesPage();
	let basepage = new BasePage();
	basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
    userrolespage.clickOnOversightRequirementsTab();

	describe("PBI-632 --> Manage Oversight Requirements: Delete an Oversight Requirement Item", function() {
		it("Verify that when click on cancelled on Delete Oversight Requirement modal then close modal and do nothing", function() {
			oversightRequirement.clickOnAddOversightRequirementButton();
			let oversightSelectLevel = AdminPanelData.selectLevel[0];
			let questionLabel = basepage.generateRandomText();
			let oversightSelectType = OversightRequirementData.oversightSelectType[2];
			oversightRequirement.verifyAddOversightRequirementItems(oversightSelectLevel,questionLabel,oversightSelectType);
			oversightRequirement.clickOnSubmitOversightItem();
			oversightRequirement.clickOnEditDeleteOversightRequirementButton(questionLabel,oversightSelectLevel,AdminPanelData.oversightActions[1]);
			oversightRequirement.verfiyDeleteOversightItemModal(questionLabel);
			oversightRequirement.clickOnCancelDeleteOversightItem();
		});

		it("Verify delete when NO task is associated with the Oversight Requirement Item", function() {
			oversightRequirement.clickOnAddOversightRequirementButton();
			let oversightSelectLevel = AdminPanelData.selectLevel[0];
			let questionLabel = basepage.generateRandomText();
			let oversightSelectType = OversightRequirementData.oversightSelectType[2];
			oversightRequirement.verifyAddOversightRequirementItems(oversightSelectLevel,questionLabel,oversightSelectType);
			oversightRequirement.clickOnSubmitOversightItem();
			oversightRequirement.clickOnEditDeleteOversightRequirementButton(questionLabel,oversightSelectLevel,AdminPanelData.oversightActions[1]);
			oversightRequirement.verfiyDeleteOversightItemModal(questionLabel);
			oversightRequirement.clickOnConfirmDeleteOversightItem();
			oversightRequirement.verifyAddedCustomItemOnAdminPanelOversightTab(questionLabel,oversightSelectLevel
			);
		});
	});
});
