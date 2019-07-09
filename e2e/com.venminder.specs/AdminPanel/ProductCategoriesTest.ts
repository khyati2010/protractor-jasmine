import { UserRolesPage } from "../../com.venminder.page/adminPanel/UserRolesPage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { ProductCategoriesByCategoryPage } from "../../com.venminder.page/adminPanel/ProductCategoriesByCategoryPage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";
import { ProductProfilePage } from "../../com.venminder.page/dashboard/ProductProfilePage";

describe("ORBCR - Functional Testing of Admin Panel Product Categories Tab", () => {
  let productCategoriesPage = new ProductCategoriesByCategoryPage();
  let userrolespage = new UserRolesPage();
  let basepage = new BasePage();
	let vendordashboard = new VendorDashboardPage();
	let productprofile = new ProductProfilePage();
  basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
  userrolespage.clickOnProductCategoriesTab();

  describe("PBI-9882 --> Admin Panel - Manage Categories: add/delete Category and potential matches", () => {
    it("Admin Panel - Add new category with potential matches found", () => {
      productCategoriesPage.clickOnAddNewCategory();
      productCategoriesPage.verifyAddCustomItemModal();
      let potentialName = AdminPanelData.potentialMatchData +basepage.generateRandomText() ;
      productCategoriesPage.enterNewCategory(potentialName);
      productCategoriesPage.clickOnSubmitNewCategory();
      productCategoriesPage.clickOnAddNewCategory();
      productCategoriesPage.enterNewCategory(AdminPanelData.potentialMatchData);
      productCategoriesPage.clickOnSubmitNewCategory();
      productCategoriesPage.verifyPotentialMatchModal();
      productCategoriesPage.clickOnCancelAddNewCategory();
     });

    it("Admin Panel - -Add and edit new category with already existing category", () => {
      productCategoriesPage.clickOnAddNewCategory();
      productCategoriesPage.verifyAddCustomItemModal();
      let categoryName = basepage.generateRandomText() + AdminPanelData.categoryNameMaxChar;
      productCategoriesPage.enterNewCategory(categoryName);
      productCategoriesPage.checkExemptOption();
      productCategoriesPage.clickOnSubmitNewCategory();
      productCategoriesPage.clickOnAddNewCategory();
      productCategoriesPage.enterNewCategory(categoryName);
      productCategoriesPage.clickOnSubmitNewCategory();
      productCategoriesPage.verifyErrorMessage();
    });
  });
  
  describe("PBI-596 --> Admin Panel - Manage Categories: Delete Category", () => {
    it("Verify the Deleting category, If category is not associated with non active products", () => {
      productCategoriesPage.clickOnAddNewCategory();
      let categoryName = AdminPanelData.categoryName + basepage.generateRandomText();
      productCategoriesPage.addNewCategory(categoryName, "EXEMPT");
      productCategoriesPage.clickOnSubmitNewCategory();
      productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName, "DELETE");
      productCategoriesPage.clickOnConfirmDeleteCategory(false);
      productCategoriesPage.verifyAddedDeletedItemOnAdminPanelCategoryTab(categoryName, "DELETE");
    });


    it("Verify the Deleting category, If category is associated from Product Profile tab", () => {
      basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_new, BasePageOR.vendorNameSearchList_new);
      vendordashboard.clickOnProductProfileTab();
      productprofile.clickOnEditProductInformationIcon();
      productprofile.selectProductManager(1);
      let categoryName = AdminPanelData.categoryName + basepage.generateRandomText();
      productCategoriesPage.addNewCategory(categoryName, "NON-EXEMPT");
      basepage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);
      userrolespage.clickOnProductCategoriesTab();
      productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName, "DELETE");
      productCategoriesPage.clickOnConfirmDeleteCategory(false);
      productCategoriesPage.verifyAddedDeletedItemOnAdminPanelCategoryTab(categoryName, "DELETE");
    });
  });

});