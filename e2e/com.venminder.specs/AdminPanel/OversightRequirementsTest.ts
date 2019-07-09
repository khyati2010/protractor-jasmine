import { BasePage } from '../../com.venminder.page/shared/BasePage';
import { OversightRequirementsPage } from '../../com.venminder.page/adminPanel/OversightRequirementsPage';
import { UserRolesPage } from '../../com.venminder.page/AdminPanel/UserRolesPage';
import { BasePageOR } from '../../com.venminder.page_object/shared/BasePageOR';
import { VendorDashboardPage } from '../../com.venminder.page/dashboard/VendorDashboardPage';
import { OversightRequirementPage } from '../../com.venminder.page/dashboard/OversightRequirementPage';
import { AdminPanelData, OversightRequirementData } from '../../com.venminder.testdata/TestData';

describe("ORBCR - Functional Testing of Admin Panel Oversight Requirement Tab", function () {
    let oversightrequirement = new OversightRequirementsPage();
    let vendordashboard = new VendorDashboardPage();
    let dashboardoversight = new OversightRequirementPage();
    let userrolespage = new UserRolesPage();
    let basepage = new BasePage();

    basepage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);

    describe("PBI-1844 --> Admin Panel - Manage Oversight Requirements: Separate into Vendor vs Product", function () {
        it("Verify the venminder specific items under VENDOR vs  PRODUCT column on Admin Panel Oversight Requirements tab", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.verfiyVendorItemsCoulmn();
            oversightrequirement.verfiyProductItemsCoulmn();
        });

        it("Verify that, added/custom by client user from Dashboard Oversight Requirement tab should add in Product Column on Admin Panel Oversight Requirement tab", function () {
            basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_new, BasePageOR.vendorNameSearchList_new);
            vendordashboard.clickOnOversightRequirementTab();
            dashboardoversight.clickOnAddOversightRequirementButton();
            let questionLabel = basepage.generateRandomText();
            dashboardoversight.addCustomOversightRequirement(questionLabel, 4);
            dashboardoversight.clickOnSubmitOversightItem();
            basepage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(questionLabel, AdminPanelData.selectLevel[1]);
        });
    });

    describe("PBI-2321 --> Admin Panel - Add Oversight Requirement Item: Vendor or Product", function () {

        it("Verify the 'Add Oversight Requirement' modal on Admin Panel Oversight Requirement tab", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            oversightrequirement.verifyAddOversightRequirementModal();
            oversightrequirement.clickOnCancelOversightItem();
        });

        it("Verify the when user add new custom oversight Requirement items then Vendor/Product option should be mandatory", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            oversightrequirement.addOversightRequirementItems("", basepage.generateRandomText(), 2);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.clickOnCancelOversightItem();
        });

        it("Verify the when user add new custom oversight Requirement items then Vendor option should be mandatory", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            let vendorProductOptions = AdminPanelData.selectLevel[0];
            let question = basepage.generateRandomText();
            oversightrequirement.addOversightRequirementItems(vendorProductOptions, question, 2);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(question, vendorProductOptions);
        });

        it("Verify the when user add new custom oversight Requirement items then Product option should be mandatory", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            let vendorProductOptions = AdminPanelData.selectLevel[1];
            let question = basepage.generateRandomText();
            oversightrequirement.addOversightRequirementItems(vendorProductOptions, question, 2);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(question, vendorProductOptions);
        });
    });

    describe("PBI-627 --> Admin Panel: Manage Oversight Requirements", function () {

        it("Verify the Admin Panel Oversight Requirement setting informational box and functional operation that admin user can perform", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnInformationalBoxButton();
            oversightrequirement.verifyInformationalBoxModal();
        });
    });

    describe("PBI-631 --> Manage Oversight Requirements: Edit Oversight Requirement Item", function () {

        it("Verify that user shall able to edit the custom Oversight Requirement item under Vendor", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            let oversightSelectLevel = AdminPanelData.selectLevel[0];
            let questionLabel = basepage.generateRandomText();
            let oversightSelectType = OversightRequirementData.oversightSelectType[2];
            oversightrequirement.addOversightRequirementItems(oversightSelectLevel, questionLabel, oversightSelectType);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.clickOnEditDeleteOversightRequirementButton(questionLabel, oversightSelectLevel, AdminPanelData.oversightActions[0]);
            oversightrequirement.verifyEditOversightRequirementModal(oversightSelectLevel, questionLabel, oversightSelectType);
            let updateQuestionLabel = questionLabel + basepage.generateRandomText();
            let updateOversightSelectType = OversightRequirementData.oversightSelectType[3];
            oversightrequirement.updateOversightRequirementItems(updateQuestionLabel, updateOversightSelectType);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(updateQuestionLabel, oversightSelectLevel);
        });

        it("Verify that user shall able to edit the custom Oversight Requirement item under Product", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            let oversightSelectLevel = AdminPanelData.selectLevel[1];
            let questionLabel = basepage.generateRandomText();
            let oversightSelectType = OversightRequirementData.oversightSelectType[2];
            oversightrequirement.addOversightRequirementItems(oversightSelectLevel, questionLabel, oversightSelectType);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.clickOnEditDeleteOversightRequirementButton(questionLabel, oversightSelectLevel, AdminPanelData.oversightActions[0]);
            oversightrequirement.verifyEditOversightRequirementModal(oversightSelectLevel, questionLabel, oversightSelectType);
            let updateQuestionLabel = questionLabel + basepage.generateRandomText();
            let updateOversightSelectType = OversightRequirementData.oversightSelectType[3];
            oversightrequirement.updateOversightRequirementItems(updateQuestionLabel, updateOversightSelectType);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(updateQuestionLabel, oversightSelectLevel);
        });

        it("Verify that Oversight Requirement item label input box should not exceed 50 characters", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            oversightrequirement.verifyOversightQuestionLabelInputMaxLenght();
            oversightrequirement.clickOnCancelOversightItem();
        });

        it("Verify the oversight requirement type drop down options on Edit Oversight Requirement modal", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            oversightrequirement.verifyOversightSelectTypeDropDownOptions();
            oversightrequirement.clickOnCancelOversightItem();
        });

        it("Verify that, When user cancelled Edit Oversight Requirement modal, Then modal should be closed and changes should not be saved", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            let oversightSelectLevel = AdminPanelData.selectLevel[0];
            let questionLabel = basepage.generateRandomText();
            let oversightSelectType = OversightRequirementData.oversightSelectType[2];
            oversightrequirement.addOversightRequirementItems(oversightSelectLevel, questionLabel, oversightSelectType);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.clickOnEditDeleteOversightRequirementButton(questionLabel, oversightSelectLevel, AdminPanelData.oversightActions[0]);
            let updateQuestionLabel = questionLabel + basepage.generateRandomText();
            let updateOversightSelectType = OversightRequirementData.oversightSelectType[3];
            oversightrequirement.updateOversightRequirementItems(updateQuestionLabel, updateOversightSelectType);
            oversightrequirement.clickOnCancelOversightItem();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(updateQuestionLabel, oversightSelectLevel);
        });
    });

    describe("PBI-632 --> Manage Oversight Requirements: Delete an Oversight Requirement Item", function () {
        it("Verify that when click on cancelled on Delete Oversight Requirement modalm then close modal and do nothing", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            let oversightSelectLevel = AdminPanelData.selectLevel[0];
            let questionLabel = basepage.generateRandomText();
            let oversightSelectType = OversightRequirementData.oversightSelectType[2];
            oversightrequirement.addOversightRequirementItems(oversightSelectLevel, questionLabel, oversightSelectType);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.clickOnEditDeleteOversightRequirementButton(questionLabel, oversightSelectLevel, AdminPanelData.oversightActions[1]);
            oversightrequirement.verfiyDeleteOversightItemModal(questionLabel);
            oversightrequirement.clickOnCancelDeleteOversightItem();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(questionLabel, oversightSelectLevel);
        });

        it("Verify delete when NO task is associated with the Oversight Requirement Item", function () {
            userrolespage.clickOnOversightRequirementsTab();
            oversightrequirement.clickOnAddOversightRequirementButton();
            let oversightSelectLevel = AdminPanelData.selectLevel[0];
            let questionLabel = basepage.generateRandomText();
            let oversightSelectType = OversightRequirementData.oversightSelectType[2];
            oversightrequirement.addOversightRequirementItems(oversightSelectLevel, questionLabel, oversightSelectType);
            oversightrequirement.clickOnSubmitOversightItem();
            oversightrequirement.clickOnEditDeleteOversightRequirementButton(questionLabel, oversightSelectLevel, AdminPanelData.oversightActions[1]);
            oversightrequirement.verfiyDeleteOversightItemModal(questionLabel);
            oversightrequirement.clickOnConfirmDeleteOversightItem();
            oversightrequirement.verifyAddedCustoumItemOnAdminPanelOversightTab(questionLabel, oversightSelectLevel);
        });
    });
});