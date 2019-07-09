import { element, by } from "protractor";

export class VendorDashboardOR {
  static headerVendorDashboard = element(by.css("div.banner-title.white.p-sm"));
  static labelVendorName = element(by.css("div.vendor-name>h1"));
  static btnSearch = element(by.id("vendorProductSearchHeaderBox"));
  static menuTab = element.all(by.css("ul#myTab>li>a"));
  static dashboardTab = element(by.css("li#vendorDashboard>a"));
  static vendorProfileTab = element(by.css("li#vendorProfile>a"));
  static productProfileTab = element(by.css("li#productProfile>a"));
  static oversightRequirementTab = element(by.css("li#oversightRequirements>a"));
  //Delete Vendor
  static buttonDeleteVendor = element(by.css("div.vendor-name>h1>i"));
  static labelDeleteVendor = element(by.css("h3.modal-title"));
  static inputVendorName = element(by.xpath("//div[@class='ux-dialog-padding']//span/input"));
  static btnDeleteVendorSubmit = element(by.xpath("//button[@click.trigger='deleteVendor()']"));
  static btnDeleteVendorCancel = element(by.xpath("//button[@click.delegate='controller.cancel()' and text()='Cancel'] "));
}
