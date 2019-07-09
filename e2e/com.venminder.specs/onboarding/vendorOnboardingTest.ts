import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

describe("validating the functionality for vendor onboarding landing page", function() {
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

  it("validate tile view is being displayed", function() {
    vendorOnboardingMenu.onboardingSettingTileTab();
    vendorOnboardingMenu.onboardingNewRequestTab();
    vendorOnboardingMenu.onboardingPendingRequestTab();
    login.logoff();
  });

  it("login with VMO role user", function() {
    login.commonLogin(
      siteUrl.sand_dev_2_url,
      credential.VMO_username,
      credential.password
    );
  });

  it("validate vendor onboarding is displayed for admin user", function() {
    vendorOnboardingMenu.vendorOnboardingMenuBtn();
  });

  it("validate tile view is being displayed", function() {
    vendorOnboardingMenu.onboardingSettingTileTab();
    vendorOnboardingMenu.onboardingNewRequestTab();
    vendorOnboardingMenu.onboardingPendingRequestTab();
    login.logoff();
  });

  describe("validating functionality for disable onbaording menu", function() {
    it("login with a user without onboarding software", function() {
      login.commonLogin(
        siteUrl.sand_dev_2_url,
        credential.username_onboarding,
        credential.password
      );
    });

    it("validate onboarding is in disabled state", function() {
      vendorOnboardingMenu.vendorOnbaordingDisabledMenuBtn();
    });

    it("validate software request popup for disabled onbaording service on click", function() {
      vendorOnboardingMenu.onboardingSoftwareRequestPopup();
    });

    it("submit request for software", function() {
      vendorOnboardingMenu.requestCheckboxClick();
      vendorOnboardingMenu.submitRequestBtn();
      vendorOnboardingMenu.requestSentPopupConfirmation();
      vendorOnboardingMenu.closePopupClick();
      login.generalUserLogoff();
    });
  });

  describe("validation for no displaying Vendor Onboarding for general users", function() {
    it("login with general user", function() {
      login.commonLogin(
        siteUrl.sand_dev_2_url,
        credential.general_username,
        credential.general_user_pswd
      );
    });

    it("validate vendor onboarding will not be displayed for general user", function() {
      expect(
        vendorOnboardingMenu.vendorOnboardingSidebar.isPresent()
      ).to.become(false);
      login.generalUserLogoff();
    });
  });
});
