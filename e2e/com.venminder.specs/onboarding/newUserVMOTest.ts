import { NewRoleVMO } from "../../com.venminder.page/onboarding/NewUserVMOPage";
import { siteUrls, userData } from "../../com.venminder.testdata/TestData";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";

describe("validating the functionality for add new role with VMO", function () {
  let addNewUserVMO = new NewRoleVMO();
  let siteUrl = new siteUrls();
  let credential = new userData();
  let login = new LoginPage();

  it("login with admin user", function () {
    login.commonLogin(
      siteUrl.sand_dev_1_url,
      credential.admin_username,
      credential.password
    );
  });

  it("user navigate to admin panel", function () {
    addNewUserVMO.clickLoginUser();
    addNewUserVMO.clickAdminPanel();
  });

  it("user validate VMO is being displayed in role description for add new user", function () {
    addNewUserVMO.clickAddUser();
    addNewUserVMO.VMORoleDisplayed();
    addNewUserVMO.closeNewUserForm();
  });

  it("user validate VMO option for the existing user", function () {
    addNewUserVMO.clickUserActionBtn();
    addNewUserVMO.clickEditBtn();
  });

  it("user click on administrator checkbox", function () {
    addNewUserVMO.checkAdminCheckBox();
  });

  it("user validate all roles checkbox is being selected", function () {
    addNewUserVMO.userRolesCheckBoxSelected();
  });
});
