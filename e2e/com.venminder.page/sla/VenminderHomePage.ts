import { browser, element, by, WebElement, protractor, By } from "protractor";
import { LoginPageOR } from "../../com.venminder.page_object/shared/LoginPageOR";
import {
	userData,
	siteUrls,
	SlaData
} from "../../com.venminder.utilities/TestData";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { LoginPage } from "../shared/LoginPage";
import { Condition, Browser } from "selenium-webdriver";
import { Database } from "../../com.venminder.utilities/Database";
import { FileDetector } from "selenium-webdriver/remote";
import { VenminderHomeOR } from "../../com.venminder.page_object/sla/VenminderHomeOR";
import { SlaHomeOR } from "../../com.venminder.page_object/sla/SlaHomeOR";
import { AddVendorOR } from "../../com.venminder.page_object/sla/AddVendorOR";
import { SlaDetailsOR } from "../../com.venminder.page_object/sla/SlaDetailsOR";
import { SlaMonitorOR } from "../../com.venminder.page_object/sla/SlaMonitorOR";
import { Wait } from "../../com.venminder.utilities/Wait";

export class VenminderHomePage {
	siteUrls: siteUrls = new siteUrls();
	userData: userData = new userData();
	slaData: SlaData = new SlaData();
	db = new Database();
	textbox = new TextBox();
	click = new Click();

	slaSetupIpad() {
		Wait.waitForElement(VenminderHomeOR.hamburgerMenu);
		this.click.buttonClick(VenminderHomeOR.hamburgerMenu);
		browser.executeScript("window.scrollTo(0,700)");
		browser.driver
			.manage()
			.window()
			.maximize();
		this.click.buttonClick(VenminderHomeOR.slaManagementIpad);
	}

	slaSetupIpadViaAsessment() {
		Wait.waitForElement(VenminderHomeOR.hamburgerMenu);
		this.click.buttonClick(VenminderHomeOR.hamburgerMenu);
		browser.executeScript("window.scrollTo(0,700)");
		browser.driver
			.manage()
			.window()
			.maximize();
		Wait.waitForElement(VenminderHomeOR.assesment);
		this.click.buttonClick(VenminderHomeOR.assesment);
		Wait.waitForElement(VenminderHomeOR.hamburgerMenu2);
		this.click.buttonClick(VenminderHomeOR.hamburgerMenu2);
		Wait.waitForElement(VenminderHomeOR.slaManagementIpad2);
		this.click.buttonClick(VenminderHomeOR.slaManagementIpad2);
	}

	slaCreateClick() {
		Wait.waitForElement(VenminderHomeOR.slaManagementDesktop);
		this.click.buttonClick(VenminderHomeOR.slaManagementDesktop);
		browser.sleep(9000);
		this.click.buttonClick(SlaHomeOR.slaCreate);
	}
}
