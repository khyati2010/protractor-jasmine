import { element, by } from 'protractor';

export class OnboardingVendorRequestOR {

  static approvalList = element(by.id("selected-approver-text"));
  static exemptList = element.all(by.id("exempted-categories-text"));
  static newRequestTile = element(by.id("vo-request_create-btn"));
  static bannerTitle = element(by.xpath("//*[text()='Vendor Request']"));
  static dropdownProductCategory = element(by.xpath("//*[@title='Select Category']"));
  static getDropdownValues = element.all(by.xpath("//ul[@role='listbox']"));
  static dropdownProductCategoryValueExempt = (product) => { return element(by.xpath("//span[text()='" + product + "']")) };
  static dropdownProductCategoryValueNonExempt = element(by.xpath("//span[text()='Accessories']"));
  static reasonForRequest = element(by.id("reasonRequestSelector"));
  static requestBidNewProduct = element(by.id("request-info-reason_0"));
  static requestBidExistingProduct = element(by.id("request-info-reason_1"));
  static textBiddingProcess = element(by.xpath("//div[@class='m-t-md newproductservice scenario']/label"));
  static radioBtnYes = element(by.xpath("//request-information//form/div[4]/div/div/div[1]"));
  static currentVendorNameHeader = element(by.xpath("//label[text()='Current Vendor Name']"));
  static currentVendorNameDropdown = element(by.xpath("//span[text()='Vendor Name']"));
  static enterProductType = element(by.xpath("//*[@id='product_type']/div/input"));
  static productTypeSelectedValue = (value) => { return element(by.xpath("//*[@id='product_type']/div/div/div/a/span[text()='" + value + "']")) };
  static currentVendorName = (value) => { return element(by.xpath("//span[text()='" + value + "']")) };
  static nextBtn = element(by.xpath("//button[@type='submit']"));
  static textRequestVendorPage = element(by.xpath("//div/p[text()='Is the current vendor included?']"));
  static incumbentTextDisplayed = element(by.xpath("//div/p[text()='Is the incumbent vendor included?']"));
  static textRequestVendorPageWithYesValueSelected = element(by.xpath("//div/p[text()='Yes']"));
  static categoryTextDisplayed = element(by.xpath("//*[@class='strong' and text() ='Category']"));
  static categoryTypeDisplayed = element(by.xpath("//*[text() ='Accessories']"));
  static categoryTypeDisplayedExempt = element(by.xpath("//*[text() ='Accounting']"));
  static sectionTitleDisplayed = element(by.xpath("//*[text() ='Requesting bids for new product/service']"));
  static VendorNameInput = (tab) => { return element(by.xpath(".//*[@id='vendor-tab" + tab + "']//*[@id='vo-vendor-info-section']/div[1]/div/div[1]//input")); }
  static productType = element(by.id("inputProductType"));
  static productCategory = element(by.id("inputProductcategory"));
  static verifyAddVendorBtn = element(by.xpath("//*[text() =' Add Vendor']"));
  static submitVendorRequest = element(by.id("submitRequest"));
  static productNameField = (tab) => { return element(by.xpath(".//*[@id='vendor-tab" + tab + "']//*[@id='inputProductName']//input")) };
  static firstNameField = (tab) => { return element(by.xpath(".//*[@id='vendor-tab" + tab + "']//*[@id='inputFirstName']")); }
  static lastNameField = (tab) => { return element(by.xpath(".//*[@id='vendor-tab" + tab + "']//*[@id='inputLastName']")) };
  static emailFieldName = (tab) => { return element(by.xpath("//*[@id='vendor-tab" + tab + "']//*[@id='vo-product-email']")) };
  static phoneNumberFieldName = element(by.xpath("//*[@type='tel' and @value.bind='standardQuestionAnswer.AreaCode & validateOnChange']"));
  static annualCostField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@value.bind='standardQuestionAnswer.AnnualCost & validateOnChange']")) };
  static annualVariableCostField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@value.bind='standardQuestionAnswer.AnnualvariableCost & validateOnChange']")) };
  static annualFixedCostField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@value.bind='standardQuestionAnswer.AnnualFixedCost & validateOnChange']")) };
  static totalSpendField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@value.bind='standardQuestionAnswer.TotalSpend & validateOnChange']")) };
  static oneTimeCostField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@value.bind='standardQuestionAnswer.OnetimeCost & validateOnChange']")) };
  static termField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@value.bind='standardQuestionAnswer.Term & validateOnChange']")) };
  static criticalQuestions = element.all(by.id("vo-critical-info-section"));
  static riskAssessment = element.all(by.id("vo-risk-info-section"));
  static cancelBtn = element.all(by.id("cancelRequest"));
  static siteURL = element(by.id("siteURL"));
  static address = element(by.id("inputAddress"));
  static address2 = element(by.id("inputAddress2"));
  static type = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[text() ='Work']")) };
  static descriptionField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@id='vo-product-desc']")) };
  static checkQuestions = element.all(by.xpath("//*[@value.bind='question.answer']"));
  static allQuestions = (tab) => { return element.all(by.xpath("//*[@id='vendor-tab" + tab + "']//*[text()='Yes']")) };
  static extField = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@value.bind='standardQuestionAnswer.Ext & validateOnChange']")) };
  static zipCode2 = element(by.xpath("//*[@value.bind='standardQuestionAnswer.ZipCode2 & validate']"));
  static areaCode = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@id='areaCodeinput" + tabs + "']")) };
  static prefixCode = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@id='PrefixInput" + tabs + "']")) };
  static suffixCode = (tabs) => { return element(by.xpath("//*[@id='vendor-tab" + tabs + "']//*[@id='suffixInput" + tabs + "']")) };
  static successDialogBox = element(by.id("request-submit-success-dialog__label"));
  static greatBtn = element(by.id("request-submit-success-dialog__great-link"));
  static assignManager = element(by.xpath("//*[@id='assign-prod-mgr__dropdown-item-5' and text()='Testy  Tester']"));
  static requestRecievedAssignManagerSubmitBtn = element(by.id("assign-prod-mgr-dialog__submit-btn"));
  static missingInformation = element(by.xpath("//div[text() = 'Missing Information']"));
  static actionBtn = element(by.xpath("//div/button[contains(text(),'Actions')]"));
  static assignBtn = element(by.xpath("//*[@id='assignID' and contains(text(),'Assign')]"));
  static viewBtn = element(by.xpath("//*[@click.trigger='viewRequest()']/a"));
  static selectDropDown = element(by.xpath("//*[@value.bind='updatedVMOInfo']"))
  static selectUser = element(by.xpath("//*[@model.bind='manager' and contains(text(),'Non Admin')]"));
  static selectUserDropDown = element(by.xpath("//select[@value.bind='VMOId']"));
  static submitBtn = element(by.id("vmo-selection__submit-btn"));
  static paginationView = element(by.xpath("//span[@click.delegate='changePageSize(size)' and contains(text(),'200')]"));
  static pendingVendorRequest = element(by.xpath("//*[@class='au-target' and contains(text(),'Pending')]"));
  static setMaximumPagination = (value) => { return element(by.xpath("//span[@click.delegate='changePageSize(size)' and contains(text(),'" + value + "')]")) };
  static closeBtn = element(by.xpath("//*[@id='dialog__cancel-btn']"));
  static vendorName = element(by.xpath("//li[ contains(text(),'ABLSoft Inc')]"));
  static assignedVMOManager = element(by.xpath("//*[ @class= 'au-target' and contains(text(),'VMOUser vmo')]"));
  static cancelBtnVendorRequest = element(by.id("request_cancel_button"));
  static incumbentVendorNameDropDown = element(by.xpath("//span[text() = 'Colorado Department of Revenue']"));
  static incumbentProductNameDropdown = element(by.xpath("//span[text() = 'Fees or Taxes']"));
  static incumbentVendorName = element(by.xpath("//*[@class='filter-option pull-left' and contains(text(),'Vendor Name')]"));
  static incumbentProductName = element(by.xpath("//*[@class='filter-option pull-left' and contains(text(),'Product Name')]"));
  static incumbentText = element(by.xpath("//*[@class='filter-option pull-left']"));
  static loader = element(by.xpath("//img[@ref='imgElem']"));
  static inlineWarningMsg = element(by.xpath('.//*[@id="vo-vendor-info-section"]/div[1]/div/div[1]/small'));
  static institutionInlineWarningMsg = element(by.id('duplicateActiveError'))
  static duplicateRequestModal = element(by.id('duplicate-request-dialog'));
  static duplicateRequestModalCloseBtn = element(by.id('close-duplicate-request'));
  static duplicateVendorProductModal = element(by.id('vendor-product-duplicate-relation-dialog__container'));
  static duplicateVendorProductCloseBtn = element(by.id('duplicate-relation-dialog__close-btn'));
  static predctive = element(by.xpath(".//*[@id='vendor-tab1']//*[@id='vendor_name']/div/div/div/a/span"))
  static vendorSectionInput = element.all(by.xpath("//*[@id='vendor_01']/div[1]/div[2]//./input"));
  static vendorSectionLabel = element.all(by.xpath("//*[@id='vendor_01']/div[1]/div[2]//./label"));
  static reActivateBtn = element(by.xpath("//a[@id='assignID' and contains(text(),'Reactivate')]"));
  static reActivateSubmitBtn = element(by.id("reactivate-vendor-request-submit"));

} 