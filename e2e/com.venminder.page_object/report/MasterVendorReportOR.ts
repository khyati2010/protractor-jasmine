import { element, by, ElementFinder } from "protractor";

export class MasterVendorReportOR {

    static tabReports = element(by.xpath("//ul[@id='side-menu']//span[contains(text(),'Reports')]"));
    static taDdataReports = element(by.xpath("//ul[contains(@class,'reportTabs')]//li[1]/a"));
    static btnMasterVendorReport = element(by.xpath("//a[text()='Master Vendor Report']//parent::td//following-sibling::td[3]//div[text()='RUN REPORT']"));

    static radioBtnSelectVendors = element(by.xpath("//span[contains(text(),'Select Vendors')]"))
    static selectVendor(vendor): ElementFinder {
        return element(by.xpath("//span[contains(text(),'" + vendor + "')]"));
    }

    static radioBtnVendorProfile = element(by.xpath("//span[contains(text(),'Vendor Profile')]/preceding-sibling::img[2]"));

    static selectVendorProfile(vendorProfile): ElementFinder {
        return element(by.xpath("//span[contains(text(),'Vendor Profile')]/parent::div//parent::div/following-sibling::div[1]//div//span[text()='" + vendorProfile + "']"));
    }


    static radioBtnServiceElections = element(by.xpath("//span[contains(text(),'Service Elections')]/preceding-sibling::img[2]"));

    static selectServiceElections(serviceElections): ElementFinder {
        return element(by.xpath("//span[contains(text(),'Service Elections')]/parent::div//parent::div/following-sibling::div[1]//div//span[text()='" + serviceElections + "']"));
    }

    static radioBtnOversightManagement = element(by.xpath("//span[contains(text(),'Oversight Management')]/preceding-sibling::img[2]"));

    static selectOversightRequirements = element.all(by.xpath("//span[contains(text(),'Oversight Management')]/parent::div//parent::div/following-sibling::div[1]//div//span"))

    static vendorData = element(by.xpath("//table[@class='reportDataGrid']//tbody//tr//td[1]"));

    static profileTitle = element(by.xpath("//table[@class='reportDataGrid']//th[7]"))
    static profileData = element(by.xpath("//table[@class='reportDataGrid']//tbody//tr//td[7]"));

    static vendorElections = element(by.xpath("//table[@class='reportDataGrid']//tbody//tr//td[9]"));
    static oversightManagementTitle = element(by.xpath("//table[@class='reportDataGrid']//th[9]"))
    static oversightManagementData = element(by.xpath("//table[@class='reportDataGrid']//tbody//tr//td[10]"))

    static selectInherentRisk(risk): ElementFinder {
        return element(by.xpath("//span[text()='Inherent Risk Rating']/parent::div/following-sibling::div[1]//li//div//span[text()='" + risk + "']"));
    }

    static selectResidualRisk(rating): ElementFinder {
        return element(by.xpath(" //span[text()='Residual Risk Rating']/parent::div/following-sibling::div[1]//li//div//span[text()='" + rating + "']"));
    }


    static selectStatus = element(by.xpath("//span[contains(text(),'Improvement Needed')]"));
    static btnApplyFilters = element(by.xpath("//div[contains(text(),'Apply Filters')]"));
    static vendorName = element(by.xpath("//table[@class='reportDataGrid']//tbody/tr/td[1]"));
    static categoryName = element(by.xpath("//table[@class='reportDataGrid']//tbody/tr/td[4]"));
    static statusName = element(by.xpath("//table[@class='reportDataGrid']//tbody/tr/td[8]"));
    static listView = element(by.className("reportItem LVtoggle"));
    static inventoryReport = element(by.xpath("//a[text()='SLA Inventory']//parent::td//following-sibling::td[3]//div[text()='RUN REPORT']"));
}
