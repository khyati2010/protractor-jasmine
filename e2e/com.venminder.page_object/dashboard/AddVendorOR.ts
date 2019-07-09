import { element, by } from "protractor";

export class AddVendorOR {
  static headerAddVendor = element(by.css("div.banner-title.white.p-sm"));
  static inputVendorName = element(by.xpath("//div[div[select[@id='criticality']]]/preceding-sibling::div//input[@ref='inputElem']"));
  static selectCriticality = element(by.id("criticality"));
  static selectThirdFourthParty = element(by.xpath("//select[@value.bind='selectedThirdOrFourthVendorType']"));
  static inputProductName = element(by.xpath("//input[@value.bind='inputproductName']"));
  static inputProductType = element(by.xpath("//div[input[@value.bind='inputproductName']]/following-sibling::div//input[@ref='inputElem']"));
  static productTypeSearchList = element.all(by.xpath("//div[@class='list-group']/a/span"));
  static selectCategory = element(by.xpath("//select[@value.bind='selectedCategory']"));
  static selectProductManager = element(by.xpath("//select[@value.bind='selectedManager']"));
  static buttonSubmit = element(by.xpath("//button[@click.trigger='addVendor()']"));
  static buttonCancel = element(by.xpath("//a[text()='Cancel']"));
  static loadingWaitIndicator = element(by.css("label.strong"));
  static buttonGoToVendorDashboard = element(by.xpath("//a[@click.delegate='gotoVendorDashBoard()']"));
  static addAnotherVendorProduct = element(by.xpath("//a[@click.delegate='addAnotherVendor()']"));
}
