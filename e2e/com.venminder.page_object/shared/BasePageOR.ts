import { element, by } from "protractor";

export class BasePageOR {
  static loadingWaitIndicator = element(by.css("label.strong"));
  static loadingCircleIndicator = element(by.css("img[ref='imgElem']"));
  // Profile Menu items
  static profileIcon_new = element(by.xpath("//button[@class='btn btn-primary btn-circle']"));
  static profileIcon_old = element(by.xpath("//img[@class='header-icon pointer']"));
  static adminPanelLink_new = element(by.xpath("//a[contains(text(),'Admin Panel')]"));
  static adminPanelLink_old = element(by.xpath("li[onclick*='admin-panel']"));
  static manageAccountLink = element(
    by.xpath("//a[contains(@href,'/AccountProfile')]")
  );
  static logoutLink = element(
    by.xpath("//a[contains(@href,'Account/LogOff')]")
  );
  static venminderLogo = element(by.xpath("//img[@class='headerLogo']"));
  // Hamburger Menu Items
  static menuIcon = element(
    by.xpath("//div[@class='secondary_header']/button")
  );
  static homeLink = element(by.xpath("//span[contains(text(),'Home')]"));
  static addVendorLink = element(
    by.xpath("//span[contains(text(),'Add a Vendor')]")
  );
  static assessmentsLink = element(
    by.xpath("//span[contains(text(),'Assessments')]")
  );
  static documentStorageLink = element(
    by.xpath("//span[contains(text(),'Document Storage')]")
  );
  static examPrepLink = element(
    by.xpath("//span[contains(text(),'Exam Prep')]")
  );
  static executiveDashboardLink = element(
    by.xpath("//span[contains(text(),'Executive Dashboard')]")
  );
  static oversightManagementLink = element(
    by.xpath("//span[contains(text(),'Oversight Management')]")
  );
  static productReviewsLink = element(
    by.xpath("//span[contains(text(),'Product Reviews')]")
  );
  static reportsLink = element(by.xpath("//span[contains(text(),'Reports')]"));
  static uploadContractLink = element(
    by.xpath("//span[contains(text(),'Upload a Contract')]")
  );
  static vendorDashboardLink = element(
    by.xpath("//span[contains(text(),'Vendor Dashboard')]")
  );
  static vendorQuestionnairesLink = element(
    by.xpath("//span[contains(text(),'Vendor Questionnaires')]")
  );
  static venminderServiceLink = element(
    by.xpath("//span[contains(text(),'Venminder Service')]")
  );
  static placeAnOrderLink = element(
    by.xpath("//a[contains(text(),'Place an Order')]")
  );
  static orderHistoryLink = element(
    by.xpath("//a[contains(text(),'Order History')]")
  );
  // Vemdor Search Inpot Box
  static inputVendorSearch_new = element(by.xpath("//div[@class='form-inline']//input"));
  static inputVendorSearch_old = element(by.xpath("//form[@id='vendorProductSearchHeader']//input"));
  static vendorNameSearchList_new = element.all(by.xpath("//div[@class='list-group']//div[@class='strong noWrap']"));
  static vendorNameSearchList_old = element.all(by.xpath("//li[@class='ui-menu-item']//span[1]"));
  static vendorProductNameSearchList_new = element.all(by.xpath("//div[@class='list-group']//div[@class='noWrap']"));
  static vendorProductNameSearchList_old = element.all(by.xpath("//li[@class='ui-menu-item']//span[2]"));
}
