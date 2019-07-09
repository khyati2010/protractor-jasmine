import { element, by } from "protractor";

export class ProductCategoriesOR {
  static lblProductCategories = element(by.xpath("//h2[text()='Product Categories']"));

  static lblAdminPanel = element(by.xpath("//h1[text()='Admin Panel']"));
  static btnInfo = element( by.xpath("//i[@click.delegate='showSimplifiedLandingModal()]") );
  static lblProductCategoryOnScreen = element(by.xpath("//h2[text()='Product Categories']") );

  static lblByCategoryTab = element(by.xpath("//li[@role='presentation'][1]"));
  static lblByProductTab = element(by.xpath("//li[@role='presentation'][2]"));
  static btnAddCategory = element(by.xpath("//button[@click.delegate='addProductCategory()']"));

  static lblNonExemptCategories = element(by.xpath("//th[text()='Non-Exempt Categories ']"));
  static lblExemptCategories = element(by.xpath("//h2[text()='Exempt Categories ']"));
  static lblInfoToolTipNonExempt = element(by.xpath("//th[text()='Non-Exempt Categories ']/span[1]"));
  static lblSortNonExempt = element(by.xpath("//th[text()='Non-Exempt Categories ']/span[2]"));
  static btnSimplifiedModal = element(by.xpath("//div[@id='products']//i[@click.delegate='showSimplifiedLandingModal()']")); 

 static btnCloseSimplifiedModal = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
  static lblInfoToolTipExempt = element(by.xpath("//th[text()='Exempt Categories ']/span[1]"));
  static lblSortExempt = element(by.xpath("//th[text()='Exempt Categories ']/span[2]"));
  static categoryList = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Exempt Categories')]]/tbody//td[1]"))
  static btnActions = element.all(by.xpath("//table[thead/tr/th[contains(text(),'Exempt Categories')]]/tbody//td[2]//button"));
 
  static btnActionsEdit = element.all(by.xpath("//li[@click.delegate='editProductCategory(category)']"));
  static headerEditCategory = element(by.css("h3.modal-title"));
  static btnActionsDelete = element.all(by.xpath("//li[@click.delegate='deleteProductCategory(category)']"));
  static headerDeleteCategory = element(by.css("h3.modal-title"));
 
  //Add Category modal
  static lblAddCategory = element(by.xpath("//h3[contains(text(),'Add Category')]"));
  static inputAddCategoryName = element(by.id("inputCategoryName"));
  static characterCountText = element(by.xpath("//input[@id='inputCategoryName']/following-sibling::div"));
  static checkBoxExempt = element(by.xpath("//label[@for='checkboxCategory']"));
  static lblExemptOversight = element(by.xpath("//input[@id='checkboxCategory']/following-sibling::label"));
  static btnSubmitNewCategory = element(by.xpath("//button[@click.delegate='addCategory()']"));
  static btnCancelAddNewCategory = element(by.xpath("//button[@click.delegate='addCategory()']/following-sibling::button"));
  static errDuplicateCategory = element(by.xpath("//span[@class='text-danger']"));
  static lblPotentialMatchMessage = element(by.xpath("//div[@class='ux-dialog-padding']/div/span"));
  static potentialMatchList = element(by.xpath("//div[@class='ux-dialog-padding']/div/ul/li"));

 //By product
 static selectCategories = element(by.xpath("//select[@title='Select category']"));
 static inputSearch = element(by.id("search"));
 static checkSelectAll = element(by.id("checkboxP1Thead"));
 static btnReassign = element(by.xpath("//div[@id='productTab']/span/button"));
 static lblShow = element(by.xpath("//div[@id='productTab']/label[@for='inputContact']"));
 static lblVendorName = element(by.xpath("//div[@id='productTab']/table/thead/tr/th[contains(text(),'Vendor name')]"));
 static lblProductName = element(by.xpath("//div[@id='productTab']/table/thead/tr/th[contains(text(),'Product name ')]"));
 static lblCurrentCategory = element(by.xpath("//div[@id='productTab']/table/thead/tr/th[contains(text(),'Current category ')]"));
 static lblExempt = element(by.xpath("//div[@id='productTab']/table/thead/tr/th[contains(text(),'Exempt ')]"));
 static btnAssign = element(by.xpath("//div[@id='productTab']/table/tbody//td//span"));

static dropDownfilter = element(by.xpath("//button[@click.trigger='onDropDownClick()']"));
static categoryListbyProduct = element.all(by.xpath("//div[@id='productTab']/table/tbody/tr[1]"));
static txtSearchCategory = element(by.xpath("//input[@value.bind='searchText']"));
static btnSelectAll = element(by.id("category-dropdown__select-all-btn"));
static btnDeSelectAll = element(by.id("category-dropdown__deselect-all-btn"));
static listCategory = element.all(by.xpath("//ul[@id='category-dropdown-list-container']/li/a"));
static btnCheck = element(by.xpath("//span[@id='category-dropdown-list-item-0--check-mark']"));
static errNoResult = element(by.xpath("//li[@id='category-dropdown-no-list-item']"));

}
