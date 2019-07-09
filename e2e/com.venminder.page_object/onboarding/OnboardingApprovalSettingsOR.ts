import { element, by } from "protractor";
import { LoginPageOR } from "../shared/LoginPageOR";

export class OnboardingApprovalSettings extends LoginPageOR {
  newVendorApprovalSettingsTitle = element(
    by.xpath("//*[contains(text(),'New Vendor Approval Settings')]")
  );
  approverDropdownTitle = element(
    by.xpath("//*[contains(text(),'Who can approve')]")
  );
  approversDropdown = element(by.id("dropdown-approver-dropdown__btn"));
  approversDropdownSearchInput = element(
    by.id("dropdown-approver-dropdown__search-input")
  );
  approverListContainer = element.all(
    by.id("approver-dropdown-list-container")
  );
  exemptCategoriesDropdown = element(
    by.id("dropdown-prod-category-dropdown__btn")
  );
  exemptCategoriesDropdownSearchInput = element(
    by.id("dropdown-prod-category-dropdown__search-input")
  );
  approverApplySettingsBtn = element(by.id("approver-setting__btn-apply"));
  applySettingCancelBtn = element(by.id("approver-setting__btn-cancel"));
  selectedApproverList = element(by.id("selected-approver-text"));
  exemptCategoriesList = element(by.id("exempted-categories-text"));
  vendorOnboardingToggle = element(by.id("vendor-onboarding__btn-on-off"));
  vendorOnboardingOff = element(
    by.className("btn btn-lg btn-toggle pull-right m-t-n-lg au-target")
  );
  vendorOnboardingOn = element(
    by.className("btn btn-lg btn-toggle pull-right m-t-n-lg au-target active")
  );
  activateOnboardingDialogModal = element(
    by.id("activate-vo-dialog__container")
  );
  activateOnboardingConfirmChcBox = element(
    by.className("checkbox checkbox-primary checkbox-inline")
  );
  activateOnboardingSubmitBtn = element(
    by.id("activate-vo-dialog__submit-btn")
  );
  minimumUserErrorMsg = element(by.id("vo-on-off__error-msg"));
  approversDropdownContainer = element.all(
    by.xpath("//ul[@id='approver-dropdown-list-container']/li/a")
  );
  approverListItem = function (index) {
    return element(by.id("approver-dropdown-list-item-" + index));
  };
  approverApplySettings = element(by.id("approver-setting__btn-apply"));
  timeStampOnApplySettings = element(by.id("apply-settings_saved-msg"));
  checkedApprover = element.all(
    by.xpath(
      "//*[@id='approver-dropdown-list-container']/li[@class='au-target selected']"
    )
  );
  uncheckApprovers = function (index) {
    return element(
      by.xpath("//*[@class='text au-target'][contains(text(),'" + index + "')]")
    );
  };
  loaderOnAction = element(by.xpath("//img[@ref='imgElem']"));
}
