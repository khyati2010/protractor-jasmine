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
import { DateHandler } from "../../com.venminder.utilities/DateHandler";

export class SlaMonitorPage {
	siteUrls: siteUrls = new siteUrls();
	userData: userData = new userData();
	slaData: SlaData = new SlaData();
	db = new Database();
	textbox = new TextBox();
	click = new Click();

	slaMonitor() {
		Wait.waitForLoader(7000);
		this.click.buttonClick(SlaDetailsOR.closePopup);
		Wait.waitForLoader(7000);
		this.click.buttonClick(SlaDetailsOR.slaCreateContinue.get(1));
		this.click.buttonClick(SlaMonitorOR.monitorYesButton);
		this.click.buttonClick(SlaMonitorOR.selectManager);
		this.click.buttonClick(SlaMonitorOR.managerSelected.get(0));
		this.click.buttonClick(SlaMonitorOR.selectMonitor);
		this.click.buttonClick(SlaMonitorOR.monitorSla.get(1));
		this.click.buttonClick(SlaMonitorOR.selectEsclation);
		this.click.buttonClick(SlaMonitorOR.manageEsclation);
		this.click.buttonClick(SlaMonitorOR.dailyButton);
		SlaMonitorOR.datePicker.sendKeys(DateHandler.dateHandler());
		this.click.buttonClick(SlaMonitorOR.deliverableReviewedNo);
		SlaMonitorOR.successfulPerformanceRange.sendKeys(
			this.slaData.successfullPerformanceRange
		);
		SlaMonitorOR.txtASuccessfulPerformancePenalty.sendKeys(
			this.slaData.successfullPerformancePenalty
		);
		this.click.buttonClick(SlaMonitorOR.selSuccessfulPerformanceCurePeriod);
		this.click.buttonClick(SlaMonitorOR.days.get(0));
		SlaMonitorOR.improvementNeededRange.sendKeys(
			this.slaData.improvementNeededRange
		);
		SlaMonitorOR.txtAImprovementNeededPenalty.sendKeys(
			this.slaData.improvementNeededPenalty
		);
		this.click.buttonClick(SlaMonitorOR.selImprovementNeededCurePeriod);
		this.click.buttonClick(SlaMonitorOR.days.get(1));
		SlaMonitorOR.inputRangeUnacceptablePerformance.sendKeys(
			this.slaData.unAcceptablePerformanceRange
		);
		SlaMonitorOR.inputRangeCT1.sendKeys(
			this.slaData.unAcceptablePerformancePenalty
		);
		this.click.buttonClick(SlaMonitorOR.selUnacceptablePerformanceCurePeriod);
		this.click.buttonClick(SlaMonitorOR.days.get(2));
		this.click.buttonClick(SlaMonitorOR.saveSlaButton);
		Wait.waitForLoader(7000);
		this.click.buttonClick(SlaMonitorOR.slaHome);
		var expectedTiltle = browser.getCurrentUrl();
		var actualTitle = this.slaData.slaHomeTitle;
		expect(expectedTiltle).toBe(actualTitle);
	}

	saveSlaValidation() {
		Wait.waitForLoader(7000);
		this.click.buttonClick(SlaDetailsOR.closePopup);
		Wait.waitForLoader(7000);
		this.click.buttonClick(SlaDetailsOR.slaCreateContinue.get(1));
		this.click.buttonClick(SlaMonitorOR.monitorYesButton);
		this.click.buttonClick(SlaMonitorOR.saveSlaButton);
		expect(SlaMonitorOR.validationError.getText()).toEqual(
			this.slaData.validationText
		);
	}
}
