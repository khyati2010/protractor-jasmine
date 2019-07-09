import { element, by } from "protractor";

export class OversightRequirementOR {
    static labelOversightRequirement = element(by.xpath("//th[text()='Oversight Requirements']"));
    static btnSubmitOversightTask = element(by.xpath("//button[@click.delegate='validateAndUpdateOversightRequirements()']"));
    //Add Custom oversight Item Modal
    static btnAddOversightItem = element(by.xpath("//span[@click.delegate='openAddOversightModal()']/span[1]"));
    static headerAddOversightItem = element(by.css("div.dialog-header-content>h3"));
    static inputOversightLabel = element(by.xpath("//input[@value.bind='oversightRequirment.question']"));
    static selectOversightType = element(by.xpath("//select[@value.bind='oversightRequirment.categoryID']"));
    static btnSubmitOversightItem = element(by.xpath("//button[@click.delegate='addOversightRequirement()']"));
    static btnCancelOversightItem = element(by.xpath("//button[@click.delegate='addOversightRequirement()']/following-sibling::button"));
}