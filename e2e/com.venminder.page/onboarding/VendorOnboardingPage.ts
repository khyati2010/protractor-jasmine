import { browser, protractor, Browser } from "protractor";
import { OnboardingHomePageOR } from "../../com.venminder.page_object/onboarding/OnboardingHomePageOR";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class VendorOnboarding extends OnboardingHomePageOR {
  vendorOnboardingMenuBtn() {
    browser.wait(
      until.elementToBeClickable(this.vendorOnboardingSidebar),
      50000,
      "vendor onboarding is displayed in side menu bar "
    );
    this.vendorOnboardingSidebar.click();
  }

  onboardingSettingTileTab() {
    browser.wait(
      until.visibilityOf(this.settingTile),
      90000,
      "setting tile is displayed on vendor onboarding landing page"
    );
    this.settingTile.isDisplayed();
  }

  onboaringSettingTileEditBtnClick() {
    this.settingTileEditBtn.click();
  }

  onboardingNewRequestTab() {
    this.newRequestTile.isDisplayed();
  }

  onboardingPendingRequestTab() {
    this.pendingRequestTile.isDisplayed();
  }

  vendorOnbaordingDisabledMenuBtn() {
    this.vendorOnbaordingDisabledSidebar
      .isDisplayed()
      .then(function(displayed) {
        expect(displayed).toEqual(true);
      });
    this.vendorOnbaordingDisabledSidebar.click();
  }

  onboardingSoftwareRequestPopup() {
    this.softwareRequestPopup.isDisplayed().then(function(displayed) {
      expect(displayed).toEqual(true);
    });
  }

  requestCheckboxClick() {
    browser.wait(
      until.elementToBeClickable(this.requestCheckBox),
      10000,
      "checkbox is not selected"
    );
    this.requestCheckBox.click();
  }

  submitRequestBtn() {
    browser.wait(
      until.elementToBeClickable(this.softwareSendRequestBtn),
      10000,
      "checkbox is not selected"
    );
    this.softwareSendRequestBtn.click();
  }

  requestSentPopupConfirmation() {
    browser.wait(
      until.visibilityOf(this.requestSentPopup),
      50000,
      "checkbox is not selected"
    );
    this.requestSentPopup.isDisplayed().then(function(displayed) {
      expect(displayed).toEqual(true);
    });
  }

  closePopupClick() {
    this.requestClosePopup.click();
    browser.wait(
      until.invisibilityOf(this.requestSentPopup),
      10000,
      "popup is closed"
    );
  }
}
