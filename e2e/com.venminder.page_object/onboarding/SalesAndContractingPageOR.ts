import { by, element } from "protractor";

export class SalesAndContractingOR {
  static salesAndContractingTab = element(by.xpath("//*[contains(text(),'Sales and Contracting')]"));
  static newClientSaleTab = element(by.xpath("//*[contains(text(),'New Client Sale')]"));
  static clientSearchTxtBox = element(by.id("FI_Search"));
  static clientSearchSubmitBtn = element(by.id("searchBtn"));
  static clientsTable = element(by.id("FISearch_AddFIDetails"));
}
