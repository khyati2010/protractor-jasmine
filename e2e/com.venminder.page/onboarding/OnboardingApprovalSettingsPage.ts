import { browser, protractor } from "protractor";
import { OnboardingApprovalSettings } from "../../com.venminder.page_object/onboarding/OnboardingApprovalSettingsOR";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class ApprovalSettings extends OnboardingApprovalSettings {
  approverSettingsContent() {
    browser.wait(
      until.visibilityOf(this.newVendorApprovalSettingsTitle),
      10000,
      "Approval settings content displayed"
    );
    this.exemptCategoriesDropdown,
      this.approverDropdownTitle,
      this.applySettingCancelBtn,
      this.approverApplySettingsBtn,
      this.approversDropdown.isDisplayed().then(function(Displayed) {
        expect(Displayed).to.equal(true);
      });
  }

  clickApprovalSettingsCanclBtn() {
    this.applySettingCancelBtn.click();
  }

  clickApproversDropdownBtn() {
    this.approversDropdown.click();
  }

  selectMinApproverValidation() {
    this.approverListContainer.getText().then(text => {
      let usersNames = text[0].split("\n");
      let usersCount = usersNames.length;
      if (usersCount >= 2) {
        this.approverListItem(0)
          .click()
          .then(() => {
            this.approverApplySettingsBtn.isEnabled().then(enabled => {
              expect(enabled).to.equal(false);
            });
          });
      }
      this.vendorOnboardingToggle.getAttribute("class").then(text => {
        var className = text.toString();
        if (className.indexOf("active") != -1) {
          this.vendorOnboardingToggle.click().then(() => {
            this.activateOnboardingConfirmChcBox.click();
            this.activateOnboardingSubmitBtn.click();
            browser.wait(
              until.invisibilityOf(this.loaderOnAction),
              4000,
              "laoder is displayed so element is not clickables"
            );
            this.vendorOnboardingToggle.click().then(() => {
              this.minimumUserErrorMsg.isDisplayed().then(displayed => {
                expect(displayed).to.equal(true);
              });
            });
          });
        } else {
          this.vendorOnboardingToggle.click().then(() => {
            browser.sleep(1000);
            this.minimumUserErrorMsg.isDisplayed().then(displayed => {
              browser.sleep(1000);
              expect(displayed).to.equal(true);
            });
          });
        }
      });
    });
  }

  vendorOnboardingtoggleOnOffClick() {
    browser.wait(
      until.invisibilityOf(this.loaderOnAction),
      4000,
      "laoder is displayed so element is not clickables"
    );
    this.vendorOnboardingToggle.click().then(() => {
      this.activateOnboardingDialogModal.isDisplayed().then(() => {
        this.activateOnboardingConfirmChcBox.click();
        this.activateOnboardingSubmitBtn.click();
      });
    });
  }

  onboardingONValidation() {
    this.selectedApproversUncheck();
    this.approverListItem(0).click();
    this.approverListItem(1)
      .click()
      .then(() => {
        this.approverApplySettingsBtn.isEnabled().then(enabled => {
          expect(enabled).to.equal(true);
        });
      });
    this.vendorOnboardingtoggleOnOffClick();
  }

  selectedApproversUncheck() {
    this.checkedApprover.count().then(size => {
      this.checkedApprover.getText().then(text => {
        for (var i = 0; i < size; i++) {
          this.uncheckApprovers(text[i]).click();
        }
      });
    });
  }
}
