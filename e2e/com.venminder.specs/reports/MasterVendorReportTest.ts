import { browser } from "protractor";
import { siteUrls } from "../../com.venminder.TestData/TestData";
import { MasterVendorReportPage } from "../../com.venminder.page/report/MasterVendorReportPage";
let reportsPage = new MasterVendorReportPage();
let siteUrl = new siteUrls();

describe("Master vendor Product ", function() {
	it("Verifying Master vendor Report", function() {
		reportsPage.navigateToReports();
		reportsPage.clickMasterVendorReport();
		reportsPage.selectOptions();
		reportsPage.verifyVendorFilter();
		reportsPage.verifyTitle();
	});
});
beforeEach(function() {
	browser.get(siteUrl.sand_dev_1_url);
});
