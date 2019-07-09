import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls, userData, vendorRequestData } from "../../com.venminder.testdata/TestData";
import * as OnboardingVendorRequestViewTilePage from "../../com.venminder.page/onboarding/OnboardingVendorRequestViewTilePage";
import * as OnboardingVendorRequestPages from "../../com.venminder.page/onboarding/OnboardingVendorRequestPages";
import { OnboardingVendorRequestDetailsTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestDetailTabPages";
import { OnboardingVendorRequestStatusTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestStatusTabPage";

const vendorOnboardingMenu = new VendorOnboarding();
const siteUrl = new siteUrls();
const credential = new userData();
const login = new LoginPage();
const vendorRequest = new OnboardingVendorRequestPages.vendorRequest;
const vendorRequestFormDetails = new OnboardingVendorRequestViewTilePage.vendorRequestViewTile;
const dataVendorRequest = new vendorRequestData;
const vendorRequestDetailsTab = new OnboardingVendorRequestDetailsTabPage;
const vendorRequestStatusTab = new OnboardingVendorRequestStatusTabPage;


describe("Validation for approving vendor requests ", () => {
    login.commonLogin(siteUrl.sand_dev_2_url, credential.admin_username, credential.password);
    vendorOnboardingMenu.vendorOnboardingMenuBtn();

    describe("validation for approving a vendor request", () => {

        it("validation for approving a request for current vendor and new product", () => {
            vendorRequest.clickNewRequestTile();
            vendorRequest.createVendorRequestForNewProduct(dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[1], dataVendorRequest.vendorRequest[1],
                dataVendorRequest.vendorRequest[0], dataVendorRequest.vendorRequest[2], dataVendorRequest.message[0]);
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
            vendorRequestFormDetails.getGridValues(dataVendorRequest.vendorRequest[1]);
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestFormDetails.assignUser();
            login.logoff();
            login.commonLogin(siteUrl.sand_dev_2_url, credential.VMO_username, credential.password);
            vendorOnboardingMenu.vendorOnboardingMenuBtn();
            vendorRequestFormDetails.clickViewTile();
            vendorRequestFormDetails.enterSearchRequestAsperVendorSelected(dataVendorRequest.vendorRequest[1]);
            vendorRequestDetailsTab.clickDateSortBtn();
            vendorRequestDetailsTab.navigateToRequestView();
            vendorRequestStatusTab.validateApproveVendorBtn();
        });
    });
});
