import { browser, protractor } from "protractor";
import { NewUserVmoOR } from "../../com.venminder.page_object/onboarding/NewUserVmoOR";

let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
let until = protractor.ExpectedConditions;
let expect = chai.expect;

export class NewRoleVMO extends NewUserVmoOR {
  clickLoginUser() {
    browser.wait(
      until.elementToBeClickable(this.loggedIn_user_btn),
      50000,
      "user click on login button"
    );
    this.loggedIn_user_btn.click();
  }

  clickAdminPanel() {
    browser.wait(
      until.elementToBeClickable(this.adminPanelBtn),
      20000,
      "user click on admin panel"
    );
    this.adminPanelBtn.click();
  }

  clickAddUser() {
    browser.sleep(70000);
    browser.wait(
      until.elementToBeClickable(this.addUsertab),
      50000,
      "user click on add user"
    );
    this.addUsertab.click();
  }

  VMORoleDisplayed() {
    browser.wait(
      until.visibilityOf(this.roleListVMO),
      50000,
      "VMO role is displayed"
    );
    this.roleListVMO.isDisplayed().then(function(isDisplayed) {
      expect(isDisplayed).to.equal(true);
    });
  }

  selectVMOrole() {
    this.VMOCheckBox.click();
  }

  closeNewUserForm() {
    this.newUserFormCancelBtn.click();
  }

  clickUserActionBtn() {
    browser.wait(
      until.elementToBeClickable(this.userActionBtn),
      50000,
      "user click on action button"
    );
    this.userActionBtn.click();
  }

  clickEditBtn() {
    browser.wait(
      until.elementToBeClickable(this.userActionEditBtn),
      20000,
      "user click on edit button"
    );
    this.userActionEditBtn.click();
  }

  checkAdminCheckBox() {
    this.adminCheckbox.click();
  }

  userRolesCheckBoxSelected() {
    this.checkboxUserRoles.each(function(checkBox) {
      checkBox.isSelected().then(selected => {
        expect(selected).to.equal(true);
      });
    });
  }
}
