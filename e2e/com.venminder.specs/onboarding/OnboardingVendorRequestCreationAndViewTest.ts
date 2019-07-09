import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls, userData, vendorRequestData } from "../../com.venminder.testdata/TestData";
import { ApprovalSettings } from "../../com.venminder.page/onboarding/OnboardingApprovalSettingsPage";
import * as OnboardingVendorRequestViewTilePage from "../../com.venminder.page/onboarding/OnboardingVendorRequestViewTilePage";
import * as OnboardingVendorRequestPages from "../../com.venminder.page/onboarding/OnboardingVendorRequestPages";
import { OnboardingVendorRequestDetailsTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestDetailTabPages";
import { VendorOnboardingForm } from "../../com.venminder.page/onboarding/OnboardingFormsPage";
import { browser } from "protractor";

const OnboardingForm = new VendorOnboardingForm();
const vendorOnboardingMenu = new VendorOnboarding();
const siteUrl = new siteUrls();
const credential = new userData();
const login = new LoginPage();
const vendorRequest = new OnboardingVendorRequestPages.vendorRequest;
const vendorRequestFormDetails = new OnboardingVendorRequestViewTilePage.vendorRequestViewTile;
const onboardingApprovalSettings = new ApprovalSettings();
const dataVendorRequest = new vendorRequestData;
const vendorRequestDetailsTab = new OnboardingVendorRequestDetailsTabPage;

describe("validating create new Vendor Request and View the created request", () => {

    login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
    vendorOnboardingMenu.vendorOnboardingMenuBtn();

    describe("Validate categories exempt from approval ", () => {

        it(" Create Vendor request and assign the created vendor request to user and validate the approval process", () => {
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestFormDetails.assignUser();
            vendorRequestFormDetails.validateVMOManager();
            vendorRequestFormDetails.searchPendingVendorRequest();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
            vendorRequestDetailsTab.navigateToRequestView();

        });
    });

    describe("Create incumbent vendor request and verify the filter options", () => {

        it("Create incumbent vendor request ", () => {
            vendorRequest.clickNewRequestTile();
            vendorRequest.createIncumbntVendorRequest(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendors[1]);
        });

        it("validate filters displayed on vendor request list", () => {
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.filterContainerView();
            vendorRequestFormDetails.selectAssignmentInFilter();
            vendorRequestFormDetails.selectStatus();
            vendorRequestFormDetails.selectRequestDateRange();
            vendorRequestFormDetails.selectDeadlineDateRange();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
        });
    });

    describe("Validate the missing information Section when required fields are not filled ", () => {

        it("Verify the missing information section", () => {
            vendorRequest.clickNewRequestTile();
            vendorRequest.clickReasonForRequestExistingProduct();
            vendorRequest.enterProductTypeValue(dataVendorRequest.vendorRequest[0]);
            vendorRequest.clickProductCategoryExempt(dataVendorRequest.vendorRequest[4]);
            vendorRequest.clickNextButtonExistingProduct();
            vendorRequestFormDetails.enterSiteURL();
            vendorRequestFormDetails.enterAddress();
            vendorRequestFormDetails.enterAddress2();
            vendorRequestFormDetails.submitForm();
            vendorRequestFormDetails.validateMissingInformation();
        });
    });

});

beforeEach(() => {
    OnboardingForm.clickHeaderOnboardingNav();
});
