import { element, by } from "protractor";

export class OversightRequirementsOR {
    static labelOversightRequirement = element(by.xpath("//h2[text()='Oversight Requirements']"));
    static labelVendorItems = element(by.xpath("//th[text()='Vendor Items']"));
    static labelProductItems = element(by.xpath("//th[contains(text(),'Product Items')]"));
    static labelVendorOversightItems = element.all(by.xpath("//table[thead/tr/th[text()='Vendor Items']]/tbody//td[1]"));
    static labelProductOversightItems = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Product Items')]]/tbody//td/span"));
    //Interrupt modal
    static header = element(by.xpath("//h2[contains(text(),'Welcome to Oversight Requirement management')]"));
    static btnGotIt = element(by.xpath("//button[@click.delegate='closeInterruptDialog()']"));
    static inputDontShow = element(by.css("input#checkboxL3"));
    static labelDontShow = element(by.css("input#checkboxL3+label"));
    static btnCancelIcon = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
    // Simplified landing modal
    static btnInformationalBox = element(by.xpath("//div[button[@click.delegate='addOversightRequirement()']]/span[1]//i"));
    static headerInformalBox = element(by.css("h2.modal-title"));
    static supportNumber = element(by.css("div.text-center>span"));
    static supportEmail = element(by.css("div.text-center>a"));
    static btnClose = element(by.xpath("//button[@click.delegate='controller.cancel()' and contains(text(),'Close')]"));
    //Add Oversight Requirement Item
    static btnAddOversightItem = element(by.xpath("//button[@click.delegate='addOversightRequirement()']"));
    static headerAddOversightItem = element(by.css("h3.modal-title"));
    static textVendorProduct = element.all(by.xpath("//label[input[@checked.bind='customOversightRequirement.isProduct']]"));
    static checkVendorProduct = element.all(by.xpath("//input[@checked.bind='customOversightRequirement.isProduct']"))
    static inputOversightLabel = element(by.xpath("//input[@value.bind='customOversightRequirement.name']"));
    static characterCount = element(by.xpath("//input[@value.bind='customOversightRequirement.name']/following-sibling::small"));
    static selectOversightType = element(by.xpath("//select[@value.bind='customOversightRequirement.oversightManagementCategoryID']"));
    static btnSubmitOversightItem = element(by.xpath("//button[@click.delegate='validateOversightRequirement()']"));
    static btnCancelOversightItem = element(by.xpath("//button[@click.delegate='validateOversightRequirement()']/following-sibling::button"));
    //Edit Oversight Requirement Item
    static btnVendorActions = element.all(by.xpath("//table[thead/tr/th[text()='Vendor Items']]/tbody//td[2]//button"));
    static btnProductActions = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Product Items')]]/tbody//td[2]//button"));
    static btnVendorEdit = element.all(by.xpath("//table[thead/tr/th[text()='Vendor Items']]/tbody//td[2]//ul/li[1]/a"));
    static btnProductEdit = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Product Items')]]/tbody//td[2]//ul/li[1]/a"));
    static vendorProductLevel = element(by.xpath("//label[contains(text(),'Level')]"));
    //Delete Oversight Requirement Item
    static headerDeleteOversightItem = element(by.css("h3.modal-title"));
    static btnVendorDelete = element.all(by.xpath("//table[thead/tr/th[text()='Vendor Items']]/tbody//td[2]//ul/li[2]/a"));
    static btnProductDelete = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Product Items')]]/tbody//td[2]//ul/li[2]/a"));
    static oversightName = element(by.css("div.ux-dialog-padding>div>span"));
    static btnConfirm = element(by.xpath("//button[@click.delegate='confirmDelete()']"));
    static btnCancel = element(by.xpath("//button[@click.delegate='confirmDelete()']/following-sibling::button"));
}