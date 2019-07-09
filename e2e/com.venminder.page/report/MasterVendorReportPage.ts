import { Click } from "../../com.venminder.utilities/Click";
import { Wait } from "../../com.venminder.utilities/Wait";
import { SlaData } from "../../com.venminder.TestData/TestData";
import { log4jsConfig } from "../../com.venminder.utilities/log4jsconfig";
import { WSASYSCALLFAILURE } from "constants";
import { MasterVendorReportOR } from "../../com.venminder.page_object/report/MasterVendorReportOR";


export class MasterVendorReportPage {

    click = new Click();
    navigateToReports() {
        Wait.waitForElement(MasterVendorReportOR.tabReports, "tab reports", 15000);
        this.click.buttonClick(MasterVendorReportOR.tabReports, "reports tab");
        Wait.waitForLoader(6000);
        this.click.buttonClick(MasterVendorReportOR.taDdataReports, "data Reports");
        this.click.buttonClick(MasterVendorReportOR.listView, "data Reports");
    }

    clickMasterVendorReport() {
        Wait.waitForLoader(3000);
        this.click.buttonClick(MasterVendorReportOR.btnMasterVendorReport, "sla reports");
        Wait.waitForLoader(8000);
    }


    selectOptions() {
        Wait.waitForLoader(8000);
        this.click.buttonClick(MasterVendorReportOR.radioBtnSelectVendors, "select vendor");
        Wait.waitForLoader(3000);
        this.click.buttonClick(MasterVendorReportOR.selectVendor(SlaData.masterVendorProductReport.vendorSearch), "select vendor ");

        this.click.buttonClick(MasterVendorReportOR.radioBtnVendorProfile, "select vendor Profile");
        Wait.waitForLoader(3000);
        this.click.buttonClick(MasterVendorReportOR.selectVendorProfile(SlaData.masterVendorProductReport.vendorProfile), "select vendor Profile");

        this.click.buttonClick(MasterVendorReportOR.radioBtnServiceElections, "select service Elections");
        Wait.waitForLoader(3000);
        this.click.buttonClick(MasterVendorReportOR.selectServiceElections(SlaData.masterVendorProductReport.serviceElections), "selectservice Elections");

        Wait.waitForLoader(3000);
        this.click.buttonClick(MasterVendorReportOR.radioBtnOversightManagement, "radio btn Oversight Requirements");
        Wait.waitForLoader(3000);
    }


    verifyVendorFilter() {

        MasterVendorReportOR.selectOversightRequirements.count().then((count) => {
            log4jsConfig.Log().debug("count is" + count)
            if (count < 1) {
                log4jsConfig.Log().debug("No Oversight Management");
            }
            else {
                this.click.buttonClick(MasterVendorReportOR.selectOversightRequirements.get(2), "Oversight Requirements");
            }
            this.click.buttonClick(MasterVendorReportOR.btnApplyFilters, "Apply Filter");
            Wait.waitForLoader(12000);
            if (count > 1) {
                MasterVendorReportOR.oversightManagementTitle.getText().then((oversightTitle) => {
                    MasterVendorReportOR.selectOversightRequirements.get(2).getText().then((selectedOversight) => {
                        expect(oversightTitle).toContain(selectedOversight);
                    });
                });
            }
        });
    }


    verifyTitle() {
        MasterVendorReportOR.profileTitle.getText().then((profileTitle) => {
            expect(profileTitle).toContain(SlaData.masterVendorProductReport.vendorProfile)
        });
        MasterVendorReportOR.vendorData.getText().then((vendor) => {
            MasterVendorReportOR.profileData.getText().then((profile) => {
                MasterVendorReportOR.vendorElections.getText().then((election) => {
                    expect(vendor).toContain(SlaData.masterVendorProductReport.vendorSearch);
                });
            });
        });
    }
}