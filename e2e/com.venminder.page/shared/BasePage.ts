import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { userData, VendorProfileData, AdminPanelData } from '../../com.venminder.testdata/TestData';
import { browser, protractor, ElementFinder, ElementArrayFinder } from "protractor";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { VendorDashboardOR } from "../../com.venminder.page_object/dashboard/VendorDashboardOR";
import { HomePageOR } from "../../com.venminder.page_object/shared/HomePageOR";
import { AddVendorOR } from '../../com.venminder.page_object/dashboard/AddVendorOR';
import { ScrollPage } from '../../com.venminder.utilities/ScrollPage';
import { UserRolesOR } from '../../com.venminder.page_object/AdminPanel/UserRolesOR';
const until = protractor.ExpectedConditions;
let vendorname: string = null;

export class BasePage {
  textbox = new TextBox();
  click = new Click();
  scrollpage = new ScrollPage();

  
  public clickOnHamburgerMenu() {
    try {
      if (!HomePageOR.venminderLogo.isDisplayed()) {
        browser.wait(until.visibilityOf(BasePageOR.menuIcon), 30000);
        BasePageOR.menuIcon.isDisplayed().then(isDisplayed => {
          if (isDisplayed)
            this.click.buttonClick(BasePageOR.menuIcon);
          browser.sleep(1000);
        });
      }
    } catch (errror) {
      console.log("User is on Venminder Home Page, Hamburger Menu is not present on Home page");
    }
  }

  public clickOnHomeLink() {
    try {
      this.clickOnHamburgerMenu();
      if (BasePageOR.homeLink.isDisplayed()) {
        this.click.buttonClick(BasePageOR.homeLink);
        browser.wait(until.visibilityOf(HomePageOR.venminderLogo), 30000, "Venminder Logo is not Present")
      }
    } catch (errror) {
      console.log("Seems homePage could not be opened by clicking on Venminder logo. Navigating to Application URL.");
      browser.get(userData.URL_HOME_PAGE);
    }
  }

  public clickOnAddVendorLink() {
    try {
      this.clickOnHamburgerMenu();
      if (BasePageOR.addVendorLink.isDisplayed()) {
        this.click.buttonClick(BasePageOR.addVendorLink);
        browser.wait(until.visibilityOf(AddVendorOR.headerAddVendor), 30000, "Add a Vendor Label is not Present")
      }
    } catch (errror) {
      console.log("Seems Add A Vendor could not be opened by clicking on Add A Vendor Link");
    }
  }

  assertEquals(actualValue: any, expectedValue: any) {
    expect(actualValue).toEqual(expectedValue);
    console.log("Actual : " + actualValue + " --- Expected : " + expectedValue);
  }

  public getRandomInteger(min?: number, max?: number) {
    if (min && max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return Math.floor(Math.random() * (90000 - 10000 + 1)) + 90000;
    }
  }

  public generateRandomText(): string {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  searchVendorAndGoToDashboardPage(vendorSearchInput: ElementFinder, vendorNameSearchList: ElementArrayFinder) {
    this.scrollpage.scrollUp();
    this.textbox.setTextValue(vendorSearchInput, VendorProfileData.vendor_keyword);
    browser.sleep(2000);
    vendorNameSearchList.then(options => {
      let randomNumber = Math.floor(Math.random() * options.length);
      options[randomNumber].getText().then(text => {
        vendorname = text;
        console.log("Random Selected Vendor Name: " + vendorname);
        return vendorname;
      });
      options[randomNumber].click();
    });
    browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 30000, "Loading indicator is still showing");
    browser.sleep(5000);
    VendorDashboardOR.labelVendorName.getText().then(data => {
      this.assertEquals(data.toString().trim(), vendorname);
    });
  }


  goToAdminPanelPage(userProfileLink: ElementFinder, adminPanelLink: ElementFinder) {
    this.scrollpage.scrollUp();
    browser.wait(until.visibilityOf(userProfileLink), 30000, "User Profile Icon is not Present");
    userProfileLink.isDisplayed().then(isDisplayed => {
      if (isDisplayed) {
        this.click.buttonClick(userProfileLink);
      }
    });
    browser.wait(until.visibilityOf(adminPanelLink), 30000, "Admin Panel Link is not Present");
    adminPanelLink.isDisplayed().then(isDisplayed => {
      if (isDisplayed) {
        this.click.buttonClick(adminPanelLink);
      }
    });
    browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 30000, "Loading indicator is still showing");
    browser.wait(until.visibilityOf(UserRolesOR.headerAdminPanel), 30000, "Admin Panel Link is not Present");
    UserRolesOR.headerAdminPanel.getText().then(text => {
      this.assertEquals(text.toString().trim(), AdminPanelData.label_Admin_Panel)
    });
  }
}
