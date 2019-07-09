import { element, by, ElementFinder } from "protractor";

export class SystemSettingsOR {
 
static lblAdminPanel = element(by.xpath("//h1[text()='Admin Panel']"));
static lblSettings = element(by.xpath("//h2[text()='System Settings']"));

//Risk Approval Settings
static lblRiskApprovalSettings = element(by.xpath("//h4[text()='Risk Approval Settings']"));
    static msgRiskOff = element(by.xpath("//div[@id='AT_RiskApproval']/div/div[3]/div[contains(text(),'OFF')]"));
static btnRiskApprovalSettingsON = element(by.id("risk1"));
static btnRiskApprovalSettingsOFF = element(by.id("risk2"));
static radioBtn1RiskApproval = element(by.xpath("//label[@for='radio1RA']"));
static radioBtn2RiskApproval = element(by.xpath("//label[@for='radio2RA']"));
static btnRiskSaveSettings = element(by.xpath("//button[@id='AT_SaveButton' and @class='btn btn-primary btn-sm au-target']"));
static btnRiskCancelSettings = element(by.xpath("//button[@id='AT_CancelButton' and @class='btn btn-default btn-sm au-target']"));
static lblNumberOfRiskApprovers = element(by.xpath("//span[@mouseover.delegate='showPopup()']"));
static riskApproverList = element.all(by.xpath("//div[@id='popover']//span"));
static msgSavedText = element(by.xpath("//span[@class='small italic']"));

//Document Storage Permissions
static lblDocumentStorage = element(by.xpath("//h4[text()='Document Storage Permissions']"));
static dropDownDownload = element(by.xpath("//select[@value.bind='documentStoragePermissions.CanDownload']"));
static dropDownDownloadOptionsList = element.all(by.xpath("//select[@value.bind='documentStoragePermissions.CanDownload']/option"));
static btnDocumentSaveSettings = element(by.id("AT_SaveButton"));
static btnDocumentCancelSettings = element(by.id("AT_CancelButton"));
static dropDownEdit = element(by.xpath("//select[@value.bind='documentStoragePermissions.CanEdit']"));
static dropDownTags = element(by.xpath("//select[@value.bind='documentStoragePermissions.CanManageTags']"));
static dropDownEditOptionsList = element.all(by.xpath("//select[@value.bind='documentStoragePermissions.CanEdit']/option"));
static dropDownTagsOptionsList = element.all(by.xpath("//select[@value.bind='documentStoragePermissions.CanManageTags']/option"));
static msgDocSaveText = element(by.xpath("//span[@class='small italic m-r-md au-target']"));
//static otherOption = element(by.xpath("//option[contains(text(),'Admins only') and @au-target-id = '269']"));
//static dropDown = element(by.xpath("//select[@class='form-control au-target' and @au-target-id = '268']"));

//Service Permissions
static lblServicePermissions = element(by.xpath("//h4[text()='Service Permissions']"));
static dropDownManageOrders = element(by.xpath("//select[@value.bind='servicePermissions.CanManageServiceOrders']"));
static dropDownManageOrdersList = element.all(by.xpath("//select[@value.bind='servicePermissions.CanManageServiceOrders']/option"));
static btnServiceSaveSettings = element(by.xpath("//div[@class='text-right']/button[@click.delegate='saveSettings()']"));
static btnServiceCancelSettings = element(by.xpath("//div[@class='text-right']/button[@click.delegate='resetSettings()']"));
static msgServiceSaveText = element(by.xpath("//span[@class='small italic au-target']"));

//Oversight Requirement
static oversightInfoIcon = element(by.xpath("//h4[@class='strong pull-left' and contains(text(),'Oversight')]/child::i"));
static btnOversightON = element(by.id("item1"));
static btnOversightOFF = element(by.id("item2"));
static lblOnText = element(by.xpath("//div[contains(text(),'oversight requirement')]"));
static btnSaveChanges = element(by.xpath("//span[contains(text(),'oversight requirement') and @class='m-r-md']/following-sibling::div/child::button[@class='btn btn-primary btn-sm au-target']"));
static msgOversightSavdTxt = element(by.xpath("//h4[contains(text(),'Oversight')]/following-sibling::div/div/div"));
static btnCancel = element(by.xpath("//span[contains(text(),'oversight')]/following-sibling::div/child::button[contains(text(),'Cancel')]"));
static btnInfoClose = element(by.xpath("//button[text()='Close']"));
static lblOversightReq = element(by.xpath("//h4[contains(text(),'Oversight Requirement')]"));
static lblCategory = element(by.xpath("//h4[contains(text(),'Category')]"));

//Category Management
static categoryInfoIcon = element(by.xpath("//h4[@class='strong pull-left' and contains(text(),'Category')]/child::i"));
static btnCategoryMangmnt = element(by.xpath("//label[@for='switch03']"));
static btnCategorySaveChanges = element(by.xpath("//span[contains(text(),'category management')]/following-sibling::div/child::button[@class='btn btn-primary btn-sm au-target']"));
static msgCategorySavdTxt = element(by.xpath("//span[contains(text(),'Category')]//following-sibling::div"));
static btnCancelCategory = element(by.xpath("//span[contains(text(),'category')]/following-sibling::div/child::button[contains(text(),'Cancel')]"));
static colorGreenCategory = element(by.xpath("//label[@for='switch03' and 'color: rgb(125,195,25)']"));
static txtVendorName = element(by.xpath("//div[@class='input-group input-group-md m-r-sm']/vm-autocomplete/div/input"));
static btnUserIcon = element(by.xpath("//i[@class='glyphicon glyphicon-user']"));
static btnAdminPanel = element(by.xpath("//a[contains(text(),'Admin')]"));
static lblSystemSetting = element(by.xpath("//span[contains(text(),'System Settings')]"));
static btnHomeLink = element(by.xpath("//a[text()='Home']"));
static btnEditProduct = element(by.xpath("//i[@click.delegate='editProductInfo()']"));
static lblCategoryValue = element(by.xpath("//select[@id='categorySelect']"));
static btnSubmitEdit = element(by.xpath("//button[text()='Save']"));
static lblVendorName = element.all(by.xpath("//h1[@class='text-primary vendor-name']/span"));
static vendorSearchListHome = element.all(by.xpath("//div[@class='fixedht_400 overflow']/table/tbody/tr/td/a/span"));

static vendorSearchHome(index1): ElementFinder {
    return element(by.xpath("//div[@class='fixedht_400 overflow']/table/tbody/tr/td/a/span[contains(text(),'" + index1 + "')]"));
}
}