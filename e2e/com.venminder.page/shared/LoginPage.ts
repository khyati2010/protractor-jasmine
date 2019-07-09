import { browser, ExpectedConditions, protractor } from "protractor";
import { LoginPageOR } from "../../com.venminder.page_object/shared/LoginPageOR";
import { userData, siteUrls } from "../../com.venminder.testdata/TestData";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { BasePage } from "./BasePage";
const until = protractor.ExpectedConditions;

export class LoginPage extends BasePage {
  siteUrls: siteUrls = new siteUrls();
  userData: userData = new userData();
  textbox = new TextBox();
  click = new Click();

  openUrl(url: string) {
    browser.get(url);
  }

  signIn(userName: string, password: string) {
    this.textbox.setTextValue(LoginPageOR.username, userName);
    console.log("Enter Email Id :- " + userName);
    this.textbox.setTextValue(LoginPageOR.password, password);
    console.log("Enter Password :- " + password);
    this.click.buttonClick(LoginPageOR.login_button);
    console.log("Click on Login button");
    browser.sleep(5000);
  }

  login() {
    this.signIn(this.userData.admin_username, this.userData.password);
    console.log("logging In.....");
  }

  signOut() {
    LoginPageOR.loggedIn_user_btn.click();
    browser.wait(
      ExpectedConditions.elementToBeClickable(LoginPageOR.logoutBtn),
      50000,
      "logout button is not clickable"
    );
    LoginPageOR.logoutBtn.click();
  }

  commonLogin(url, username, password) {
    browser.get(url);
    LoginPageOR.username.sendKeys(username);
    LoginPageOR.password.sendKeys(password);
    LoginPageOR.login_button.click();
  }

  logoff() {
    LoginPageOR.loggedIn_user_btn.click();
    browser.wait(
      until.elementToBeClickable(LoginPageOR.logoutBtn),
      50000,
      "logout button is not clickable"
    );
    LoginPageOR.logoutBtn.click();
  }

  generalUserLogoff() {
    browser.wait(
      until.elementToBeClickable(LoginPageOR.loggedIn_user_btn),
      100000,
      "user circle is not clickable"
    );
    LoginPageOR.loggedIn_user_btn.click();
    browser.wait(
      until.elementToBeClickable(LoginPageOR.generalUserlogoutBtn),
      50000,
      "logout button is not clickable"
    );
    LoginPageOR.generalUserlogoutBtn.click();
  }
}
