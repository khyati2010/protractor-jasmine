import { ApprovalSettings } from "../../com.venminder.page/onboarding/OnboardingApprovalSettingsPage";
import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
describe("validating the functionality for vendor onbaording approval settings tab functionality", function() {
  let onboardingApprovalSettings = new ApprovalSettings();
  let vendorOnboardingMenu = new VendorOnboarding();
  let siteUrl = new siteUrls();
  let credential = new userData();
  let login = new LoginPage();

  it("login with admin user", function() {
    login.commonLogin(
      siteUrl.sand_dev_2_url,
      credential.admin_username,
      credential.password
    );
  });

  it("validate vendor onboarding is displayed for admin user", function() {
    vendorOnboardingMenu.vendorOnboardingMenuBtn();
  });

  it("user is navigated to onboarding setting tab", function() {
    vendorOnboardingMenu.onboardingSettingTileTab();
    vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
  });

  it("validate approval settings tab content", function() {
    onboardingApprovalSettings.approverSettingsContent();
  });

  it("user click on cancel button on approval settings page which navigate back to onboarding landing page", function() {
    onboardingApprovalSettings.clickApprovalSettingsCanclBtn();
    vendorOnboardingMenu.onboardingSettingTileTab();
  });

  describe("validation for approvers dropdown", function() {
    it("user click on approvers dropdwon", function() {
      vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
      onboardingApprovalSettings.clickApproversDropdownBtn();
    });
  });

  describe("validation for vendor onboarding ON/OFF", function() {
    it("user validate inline message for minimum user requirement when user are less than two", function() {
      onboardingApprovalSettings.selectedApproversUncheck();
      onboardingApprovalSettings.selectMinApproverValidation();
    });

    it("user validate vendor onboarding ON modal", function() {
      onboardingApprovalSettings.clickApproversDropdownBtn();
      onboardingApprovalSettings.onboardingONValidation();
    });

    it("user validate vendor onboarding OFF modal", function() {
      onboardingApprovalSettings.vendorOnboardingtoggleOnOffClick();
    });
  });
});
