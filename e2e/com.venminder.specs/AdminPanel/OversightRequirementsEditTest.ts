import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { OversightRequirementsPage } from "../../com.venminder.page/adminPanel/OversightRequirementsPage";
import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import {AdminPanelData,OversightRequirementData} from "../../com.venminder.testdata/TestData";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";

describe("ORBCR - Functional Testing of Admin Panel Oversight Requirement Tab", function() {
	let oversightRequirement = new OversightRequirementsPage();
    let basePage = new BasePage();
    let userrolespage = new UserRolesPage();
    basePage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
    userrolespage.clickOnOversightRequirementsTab();

    describe("PBI-631,627 --> Manage Oversight Requirements: Edit Oversight Requirement Item", function() {
    it("Verify Admin Panel Oversight Requirement setting informational box and admin user shall able to edit the custom Oversight Requirement item under Vendor", function() {
      oversightRequirement.clickOnInformationalBoxButton();
      oversightRequirement.verifyInformationalBoxModal();
      oversightRequirement.clickOnAddOversightRequirementButton();
      let oversightSelectLevel = AdminPanelData.selectLevel[0];
      let questionLabel = basePage.generateRandomText();
      let oversightSelectType = OversightRequirementData.oversightSelectType[2];
      oversightRequirement.verifyAddOversightRequirementItems(oversightSelectLevel,questionLabel,oversightSelectType);
      oversightRequirement.clickOnSubmitOversightItem();
      oversightRequirement.clickOnEditDeleteOversightRequirementButton(questionLabel,oversightSelectLevel,AdminPanelData.oversightActions[0]);
      oversightRequirement.verifyEditOversightRequirementModal(oversightSelectLevel, questionLabel,oversightSelectType);
      let updateQuestionLabel = questionLabel + basePage.generateRandomText();
      let updateOversightSelectType =OversightRequirementData.oversightSelectType[3];
      oversightRequirement.updateOversightRequirementItems(updateQuestionLabel,updateOversightSelectType);
      oversightRequirement.clickOnSubmitOversightItem();
      oversightRequirement.verifyAddedCustomItemOnAdminPanelOversightTab(updateQuestionLabel,oversightSelectLevel);
    });

    it("Verify that user shall able to edit the custom Oversight Requirement item under Product", function() {
      oversightRequirement.clickOnAddOversightRequirementButton();
      let oversightSelectLevel = AdminPanelData.selectLevel[1];
      let questionLabel = basePage.generateRandomText();
      let oversightSelectType = OversightRequirementData.oversightSelectType[2];
      oversightRequirement.verifyAddOversightRequirementItems(oversightSelectLevel,questionLabel, oversightSelectType);
      oversightRequirement.clickOnSubmitOversightItem();
      oversightRequirement.clickOnEditDeleteOversightRequirementButton(questionLabel,oversightSelectLevel,AdminPanelData.oversightActions[0] );
      oversightRequirement.verifyEditOversightRequirementModal(oversightSelectLevel,questionLabel,oversightSelectType);
      let updateQuestionLabel = questionLabel + basePage.generateRandomText();
      let updateOversightSelectType =OversightRequirementData.oversightSelectType[3];
      oversightRequirement.updateOversightRequirementItems(updateQuestionLabel,updateOversightSelectType);
      oversightRequirement.clickOnSubmitOversightItem();
      oversightRequirement.verifyAddedCustomItemOnAdminPanelOversightTab(updateQuestionLabel,oversightSelectLevel);
    });

    it("Verify When user cancelled Edit Oversight Requirement modal, Then modal should be closed and changes should not be saved", function() {
      oversightRequirement.clickOnAddOversightRequirementButton();
      let oversightSelectLevel = AdminPanelData.selectLevel[0];
      let questionLabel = basePage.generateRandomText();
      let oversightSelectType = OversightRequirementData.oversightSelectType[2];
      oversightRequirement.verifyAddOversightRequirementItems(oversightSelectLevel,questionLabel,oversightSelectType);
      oversightRequirement.clickOnSubmitOversightItem();
      oversightRequirement.clickOnEditDeleteOversightRequirementButton(questionLabel,oversightSelectLevel, AdminPanelData.oversightActions[0]);
      let updateQuestionLabel = questionLabel + basePage.generateRandomText();
      let updateOversightSelectType =OversightRequirementData.oversightSelectType[3];
      oversightRequirement.updateOversightRequirementItems(updateQuestionLabel,updateOversightSelectType);
      oversightRequirement.clickOnCancelOversightItem();
      oversightRequirement.verifyAddedCustomItemOnAdminPanelOversightTab(updateQuestionLabel,oversightSelectLevel);
    });
  });

  it("Verify that Oversight Requirement item label input box should not exceed 50 characters and type drop down options on Edit Oversight Requirement modal", function() {
     oversightRequirement.clickOnAddOversightRequirementButton();
    let oversightSelectLevel = AdminPanelData.selectLevel[1];
      let oversightSelectType = OversightRequirementData.oversightSelectType[2];
      oversightRequirement.verifyAddOversightRequirementItems(oversightSelectLevel,AdminPanelData.moreThan50Characters+"111", oversightSelectType);
      oversightRequirement.clickOnSubmitOversightItem();
      oversightRequirement.clickOnCancelOversightItem();
      oversightRequirement.clickOnAddOversightRequirementButton();
      oversightRequirement.verifyOversightQuestionLabelInputMaxLength(AdminPanelData.moreThan50Characters);
      oversightRequirement.verifyOversightSelectTypeDropDownOptions();
      oversightRequirement.clickOnCancelOversightItem();
    });
});