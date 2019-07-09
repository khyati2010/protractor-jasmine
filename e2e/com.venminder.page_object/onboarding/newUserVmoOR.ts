import { element, by } from "protractor";
import { LoginPageOR } from "../shared/LoginPageOR";

export class NewUserVmoOR extends LoginPageOR {
  loggedIn_user_btn = element(
    by.xpath("//*[@class='btn btn-primary btn-circle']")
  );
  adminPanelBtn = element(
    by.xpath(
      "//a[contains(@href,'https://sand-dev-2-rsd.venminder.com/clients/admin-panel')]"
    )
  );
  addUsertab = element(by.xpath("//button[contains(. ,'Add User')]"));
  roleListVMO = element(by.xpath("//*[contains(text(),'VMO')]"));
  VMOCheckBox = element(
    by.xpath("//ux-dialog-body/div/div[2]/table/tbody/tr[9]/td[1]/ul/li")
  );
  newUserFormCancelBtn = element(
    by.xpath(
      "//*[@class='btn btn-default au-target' and contains(text(),'Cancel')]"
    )
  );
  userActionBtn = element(
    by.xpath("//*[@id='roles']//table/tbody/tr[1]/td[6]/div/button")
  );
  userActionEditBtn = element(
    by.xpath(
      "//*[@id='roles']//table/tbody/tr[1]/td[6]/div/ul/li/a[contains(text(),'Edit')]"
    )
  );
  checkboxUserRoles = element.all(
    by.xpath(
      "//div[@show.bind='(isActive || isCurrentUserInactive) && !isResponsibiltyTab ']//input[@checked.bind='selectedRoles']"
    )
  );
  adminCheckbox = element(
    by.xpath(
      "//div[@show.bind='(isActive || isCurrentUserInactive) && !isResponsibiltyTab ']//div[@class='checkbox checkbox-primary']/label[@for='Admin']"
    )
  );
}
