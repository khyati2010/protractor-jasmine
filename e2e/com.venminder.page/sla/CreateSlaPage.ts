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

export class CreateSlaPage {
	siteUrls: siteUrls = new siteUrls();
	userData: userData = new userData();
	slaData: SlaData = new SlaData();
	db = new Database();
	textbox = new TextBox();
	click = new Click();

	slaProductSelection() {
		Wait.waitForElement(VenminderHomeOR.slaManagementDesktop);
		this.click.buttonClick(VenminderHomeOR.slaManagementDesktop);
		Wait.waitForLoader(8000);
		this.click.buttonClick(SlaHomeOR.slaCreate);
		var autocomplete = AddVendorOR.vendorAutocompelete;
		autocomplete.get(1).clear();
		autocomplete.get(1).sendKeys(this.slaData.autoCompelete);
		this.click.buttonClick(AddVendorOR.vendorList);
		Wait.waitForLoader(8000);
		this.click.buttonClick(AddVendorOR.selectProductContinue);
		Wait.waitForElement(SlaDetailsOR.inputTitle);
		SlaDetailsOR.inputTitle.sendKeys(this.slaData.notes);
		SlaDetailsOR.inputNotes.sendKeys(this.slaData.title);
		this.click.buttonClick(SlaDetailsOR.dropDownSlaCategory);
		this.click.buttonClick(SlaDetailsOR.dropDownSelectProduct);
		SlaDetailsOR.addNewCategory.sendKeys(this.slaData.categoryDetails);
	}

	slaContractUpload(filePath) {
		this.db.dbUpdate();
		this.slaProductSelection();
		this.click.buttonClick(SlaDetailsOR.uploadContractButton);
		Wait.waitForLoader(6000);
		this.click.buttonClick(AddVendorOR.productCheckbox.get(0));
		Wait.waitForElement(SlaDetailsOR.browseButton);
		SlaDetailsOR.browseButton.sendKeys(filePath);
		this.click.buttonClick(SlaDetailsOR.submitButton);
	}
}
