import { element, by } from "protractor";

export class LoginPageOR {
  static username = element(by.name("Username"));
  static password = element(by.name("Password"));
  static login_button = element(by.css("button[value='login']"));
  static error_message = element(by.css("div.validation-summary-errors>ul>li"));
  static loggedIn_user_btn = element(by.xpath("//*[@class='btn btn-primary btn-circle']"));
  static logoutBtn = element(by.xpath("//a[contains(@href,'https://sand-dev-2-rsd.venminder.com/Account/Logout')]"));
  static generalUserlogoutBtn = element(by.xpath("//a[contains(@href,'/Account/LogOff')]"));
}
