import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls, userData, vendorRequestData, contractsTab, dueDiligenceData } from "../../com.venminder.testdata/TestData";
import { vendorRequestViewTile } from "../../com.venminder.page/onboarding/OnboardingVendorRequestViewTilePage";
import { OnboardingVendorRequestStatusTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestStatusTabPage"
import * as OnboardingVendorRequestPages from "../../com.venminder.page/onboarding/OnboardingVendorRequestPages";
import { OnboardingVendorRequestDetailsTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestDetailTabPages";
import { OnboardingVendorRequestRelationshipsTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestRelationshipsTabPages";
import { OnboardingVendorRequestContractsTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestContractsTabPages";
import { OnboardingVendorRequestReferencesTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestReferencesTabPages";
import { OnboardingVendorRequestDocumentTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestDocumentsTabPages";
import { OnboardingVendorRequestDueDiligenceTabPages } from "../../com.venminder.page/onboarding/OnboardingVendorRequestDueDiligenceTabPages"

describe("Validation of Request View Page and functionalities", () => {
    const vendorRequest = new OnboardingVendorRequestPages.vendorRequest;
    const vendorOnboardingMenu = new VendorOnboarding();
    const siteUrl = new siteUrls();
    const credential = new userData();
    const login = new LoginPage();
    const vendorRequestFormDetails = new vendorRequestViewTile;
    const vendorRequestDetailsTab = new OnboardingVendorRequestDetailsTabPage;
    const dataVendorRequest = new vendorRequestData;
    const ContractsTab = new contractsTab;
    const dataDueDiligence = new dueDiligenceData;
    const vendorRequestStatusTab = new OnboardingVendorRequestStatusTabPage;
    const vendorRequestRelationshipTab = new OnboardingVendorRequestRelationshipsTabPage;
    const vendorRequestContractsTab = new OnboardingVendorRequestContractsTabPage;
    const vendorRequestReferenceTab = new OnboardingVendorRequestReferencesTabPage;
    const vendorRequestDocumentsTab = new OnboardingVendorRequestDocumentTabPage;
    const vendorRequestDueDiligenceTab = new OnboardingVendorRequestDueDiligenceTabPages;

    describe("Verify requester is not able to edit Vendor Request created by him", () => {

        it("login with requester user permission, create a new vendor request and validate edit functionality", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.VMO_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDetailsTab.clickDetailsTab();
            vendorRequestDetailsTab.verifyEditBtnDisabled();
            login.logoff();
        });
    });

    describe("Verify edit functionality for approved Vendor Request  ", () => {

        it("Navigate to view page and verify edit functionality", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickStatusSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDetailsTab.clickDetailsTab();
            vendorRequestDetailsTab.clickEditBtnFalse();
            login.logoff();
        });
    });

    describe("Verify creation of vendor request and vmo manager assignment after editing the request ", () => {

        it("login with requester user permission and create vendor request", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.VMO_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            login.logoff();
        });

        it("login with VMO user permission and verify the functionalities", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDetailsTab.clickDetailsTab();
            vendorRequestDetailsTab.clickEditBtn();
            vendorRequestDetailsTab.verifyButtonVisible();
            vendorRequestDetailsTab.clickCancelBtn();
            vendorRequestDetailsTab.clickEditBtn();
            vendorRequestDetailsTab.enterTextDescField(dataVendorRequest.message[0]);
            vendorRequestDetailsTab.clickAllVendorRequestsListAndNavToViewTilePage();
            vendorRequestDetailsTab.verifyVMOManager();
            login.logoff();
        });
    });

    describe("Verify tooltip showed for all pending vendor list ", () => {

        it("login with requester user and verify the tooltip is visible for all pending vendor list", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDetailsTab.clickDetailsTab();
            vendorRequestDetailsTab.verifyTooltipDisplayed();
            vendorRequestDetailsTab.vendorRequestsPageNavigation();
            login.logoff();
        });
    });

    describe("Validation of View Btn Functionality and verify the status tab as default ", () => {

        it("login with admin user and verify the view btn", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
            vendorRequestDetailsTab.navigateToRequestView();
            login.logoff();
        });
    });

    describe("validation for risk level indicator in view vendor request", () => {

        it("validation for risk level indicator displayed on detail tab of vendor request where risk assessment questions exist", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[4]);
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDetailsTab.clickDetailsTab();
            vendorRequestDetailsTab.riskLevelIndicatorDetailsTab();
        });

        it("validation for risk level indicator while editing the form where risk assessment questions exist", () => {
            vendorRequestDetailsTab.clickEditBtn();
            vendorRequestDetailsTab.riskLevelIndicatorDetailsTab();
            login.logoff();
        });

        it("validation for risk level indicator on details tab is not displayed when there is no risk assessment questions", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[5]);
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDetailsTab.clickDetailsTab();
            vendorRequestDetailsTab.noRiskAssessmentRiskLevelIndicator();
        });

        it("validation for risk level indicator on edit detail is not displayed when there is no risk assessment questions", () => {
            vendorRequestDetailsTab.clickEditBtn();
            vendorRequestDetailsTab.noRiskAssessmentRiskLevelIndicator();
            login.logoff();
        });
    });

    describe("validation for status tab sections in vendor request", () => {

        it("validation for vendor information in status tab of vendor request", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestStatusTab.vendorInformationSection();
        });

        it("validation for status tab section of vendor request", () => {
            vendorRequestStatusTab.vmoInformationSection();
            vendorRequestStatusTab.addNotesSection();
            vendorRequestStatusTab.requirementStatusSection();
            login.logoff();
        });

    });

    describe("Verify status section and VMO Assign's requester a section with edit ability ", () => {

        it("Create new vendor request and verify in view tile", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
        });

        it("Assign assignment name for contracts tab", () => {
            vendorRequestRelationshipTab.clickRelationshipsTab();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.clickEditLink();
            vendorRequestContractsTab.editModal();
            vendorRequestContractsTab.clickSaveBtn();
            vendorRequestContractsTab.verifyAssignmentName(ContractsTab.assignmentname[0]);
            login.logoff();
        });

        it("login with requester user permission and navigate to pending tile to verify contracts tabs", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.test13User, credential.password);
            vendorOnboardingMenu.clickAddAVendor();
            vendorRequest.clickCancelBtnVendorRequest();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.verifyAssignmentName(ContractsTab.assignmentname[0]);
            login.logoff();
        });
    });

    describe("Verify status section not required functionality in contracts tabs", () => {

        it("Login with admin users and check not required checkbox", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.notRequiredFunctionality(ContractsTab.contractsvalue[0], ContractsTab.contractsvalue[1]);
            login.logoff();
        });
    });

    describe("Verify status section Mark As Complete functionality in contracts tabs", () => {

        it("Login with admin users create new vendor request and mark contracts section as complete", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.markAsComplete();
            vendorRequestContractsTab.verifyAssignmentAndStatus()
            login.logoff();
        });
    });

    describe("Create incumbent vendor request and validate contracts tabs and reference tab functionality", () => {

        it("validation of uploading the contract document for incumbent vendor request", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createIncumbntVendorRequest(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendors[1]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.clickStatusTab();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.clickAddNewUpdate();
            vendorRequestContractsTab.uploadDocument('../../com.venminder.documents/contractsDocument.png');
        });

        it("Verify the reference tab and add new references ", () => {
            vendorRequestReferenceTab.clickReferencesTab();
            vendorRequestReferenceTab.clickAddReference();
            vendorRequestReferenceTab.enterCompanyNameAndEmailId();
            vendorRequestReferenceTab.attachBtn('../../com.venminder.documents/contractsDocument.png');
            vendorRequestReferenceTab.actionsBtn();
            vendorRequestReferenceTab.clickAddReference();
            vendorRequestReferenceTab.addCompanyNameAndPhoneNumber();
            login.logoff();
        });
    });

    describe("Validate contract details page opening in another browser window", () => {

        it("Navigate to Contracts Tab and validate view contracts page", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.clickStatusTab();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.verifyincumbentVendorContractName();
            vendorRequestContractsTab.getWindowHandlers(ContractsTab.viewcontracts[0]);
            login.logoff();
        });
    });

    describe("Validate Requester permission after being assigned to contracts section, verify the contracts documents added is visible and Reference tab doesn't has any reference added", () => {

        it("Login with admin users create new vendor request, validate contracts tab and upload document", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.getTextNoContracts(ContractsTab.viewcontracts[1]);
            vendorRequestContractsTab.clickAddNewUpdate();
            vendorRequestContractsTab.uploadDocument('../../com.venminder.documents/contractsDocument.png');
        });

        it("Assign assignment name for contracts tab", () => {
            vendorRequestContractsTab.clickEditLink();
            vendorRequestContractsTab.editModal();
            vendorRequestContractsTab.clickSaveBtn();
            vendorRequestContractsTab.verifyAssignmentName(ContractsTab.assignmentname[0]);
            login.logoff();
        });

        it("login with requester user permission and verify requester is assigned to contracts tab ", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.test13User, credential.password);
            vendorOnboardingMenu.clickAddAVendor();
            vendorRequest.clickCancelBtnVendorRequest();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.clickStatusTab();
            vendorRequestContractsTab.clickContractsTab();
            vendorRequestContractsTab.verifyAssignmentName(ContractsTab.assignmentname[0]);
        });

        it("Verify the contracts document name and view Btn functionality ", () => {
            vendorRequestContractsTab.validateContractsDocumentNameDisplayed();
            vendorRequestContractsTab.validateViewfunctionality(ContractsTab.authorname[0]);
        });

        it("Validate the referenece tab", () => {
            vendorRequestReferenceTab.clickReferencesTab();
            vendorRequestReferenceTab.noRefText();
            login.logoff();
        });
    });

    describe("Verify documents tab, upload, view and delete functionality ", () => {

        it("Login with admin users create new vendor request and validate documents section upload and view functionality", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDocumentsTab.clickDocumentsTab();
            vendorRequestDocumentsTab.uploadDocument('../../com.venminder.documents/contractsDocument.png');
            vendorRequestDocumentsTab.viewBtnFunctionality();
        });

        it("Verify document tags and delete functionality", () => {
            vendorRequestDocumentsTab.selectDocumentTags();
            vendorRequestDocumentsTab.uploadDocument('../../com.venminder.documents/contractsDocument.png');
            vendorRequestDocumentsTab.deleteFunctionality();
        })
    });

    describe("Create vendor Request with requester role and decline with VMO Users ", () => {

        it("login with requester user permission and create vendor request", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.test13User, credential.password);
            vendorOnboardingMenu.clickAddAVendor();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            login.logoff();
        })

        it("Login with VMO User and decline a vendor request verify the request status", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestStatusTab.clickDeclineVendorRequest(dataVendorRequest.note[0]);
            vendorRequestFormDetails.validateDeclinedStatus();
        });

        it("Reactivate the declined vendor request", () => {
            vendorRequestFormDetails.reActivateVendorRequest();
            vendorRequestFormDetails.validatePendingStatus();
            login.logoff();
        });
    });

    describe("Create vendor Request with admin role and Validate Due Diligiance functionality", () => {

        it("Add vendor level due diligence requirment and delete the created vendor level requirment", () => {
            login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestDueDiligenceTab.clickDueDiligenceTab();
            vendorRequestDueDiligenceTab.addVendorLevelDueDiligence(dataDueDiligence.labelvalue[0]);
            vendorRequestDueDiligenceTab.deleteCreatedVendorRequirments();
        });

        it("Convert due diligence requirment to task", () => {
            vendorRequestDueDiligenceTab.selectDateAndOwner();
            login.logoff();
        })
    });

    describe("validation for relationship section in vendor request", () => {

    })
});
