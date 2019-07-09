import { element, by, ElementFinder, ElementArrayFinder } from "protractor";

export class RiskAssessmentOR {

  static btnContinueAssessment = element(by.xpath("//span[text()='Continue']"));
  static btnLoadTemplate = element(by.xpath("//span[text()='Load this template']"));
  
    static modalRisk = element(by.id("modalDialog"));
    static btnCloseModal = element(by.id("modalDialog_CloseButton"));
    static btnModifyRiskTemplate = element(by.xpath("//span[text()='modify']"));
    static btnContinueRiskLevel = element(by.xpath("//input[@value='Continue']"));
    static lblmodalDialogContent = element(by.id("noSlotsAvailable"));
    static btnContactSales = element(by.css("input.orangeButton"));
    
    static lblRiskLevelSettings = element(by.xpath("//h2[text()='Risk Level Settings']"));
    static listRiskLevel = element.all(by.xpath("//tbody/tr/td/div/div/input[@value.bind='riskLevel.description & validate']"));
    static btnAddRiskLevel = element(by.xpath("//button[@click.trigger='addRiskLevel()']"));
    static btnResetRiskLevel = element(by.xpath("//button[@click.trigger='resetRiskLevels()']"));
    static btnRemoveRiskLevel = element(by.xpath("//i[@click.delegate='removeRiskLevel(riskLevel)']"));
    static btnApplyChanges = element(by.xpath("//button[text()='Apply']"));
    static btnCancelRiskLevel = element(by.xpath("//button[text()='Cancel']"));
    static modalApplyChanges   = element(by.xpath("//button[@click.delegate='controller.ok()']"));
    static tableVendorLinked = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
    static msgRiskOverOA = element(by.xpath("//table/thead//th[contains(text(),'Vendor')]/ancestor::table/ancestor::div[1]/ancestor::div[1]/p"));
  static listRiskLevelMapping = element.all(by.xpath("//form/div/div/select[@change.delegate='newRiskLevelScoreSelected()']"))
  static listRiskLabel = element.all(by.xpath("//form/div/label"));
   static selectRiskLevel = element(by.xpath("//select[@value.bind='oldRiskLevel.newRiskLevelScore']"));
  static selectRiskLevelMapping = element(by.xpath("//select[@value.bind='oldRiskLevel.newRiskLevelScore']/option[contains(text(),'Select new')]]"));
  // static selectRiskLevelMapping = function (index): any {
  //   return element.all(by.xpath("//select[@value.bind='oldRiskLevel.newRiskLevelScore']'" + index + "')]"));
  // }
  static lblHeaderVendor = element(by.xpath("//table/thead//th[contains(text(),'Vendor')]"));
  static lblHeaderProduct = element(by.xpath("//table/thead//th[contains(text(),'Product')]"));
  static listVendor = element.all(by.xpath("//div/div/table[1]/tbody[1]/tr/td[1]"));
  static listProduct = element.all(by.xpath("//div/div/table[1]/tbody[1]/tr/td[2]"));
  static lblHeaderRiskLevel = element(by.xpath("//h3[text()='Risk Level Mapping']"));
  static btnModalApply = element(by.xpath("//button[@click.delegate='controller.ok()']"));
  static btnModalCancel = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
  
  
}