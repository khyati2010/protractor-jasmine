import { UserRolesPage } from "./../../com.venminder.page/AdminPanel/UserRolesPage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { ProductCategoriesPage } from "../../com.venminder.page/AdminPanel/ProductCategoriesByCategoryPage";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { browser } from "protractor";
import {ProductCategoryByProductPage} from "../../com.venminder.page/AdminPanel/ProductCategoryByProductPage";

describe("ORBCR - Functional Testing of Admin Panel Product Categories Tab", () => {
  let productCategoriesPage = new ProductCategoriesPage();
  let userrolespage = new UserRolesPage();
  let basepage = new BasePage();
let productCategoryByProductPage = new ProductCategoryByProductPage();

  basepage.goToAdminPanelPage(
    BasePageOR.profileIcon_new,
    BasePageOR.adminPanelLink_new
  );
  userrolespage.clickOnProductCategoriesTab();

  // it("Admin Panel - Add, Edit  and deleted new category with exempt oversight requirement", () => {
  //   productCategoriesPage.verifyProductCategoryScreen();
  //   productCategoriesPage.verifyExemptCategoryTooltip();
  //   productCategoriesPage.clickOnAddNewCategory();
  //   productCategoriesPage.verifyAddCustomItemModal();
  //   let categoryName =
  //     AdminPanelData.categoryName + basepage.generateRandomText();
  //   productCategoriesPage.enterNewCategory(categoryName);
  //   productCategoriesPage.checkExemptOption();
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.verifyCategoryAddedInExemptList(categoryName);
  //   productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName,"Edit");
  //   productCategoriesPage.enterValueInEditCategory(categoryName);
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.verifyCategoryAddedInNonExemptList(categoryName);
  //   productCategoriesPage.verifySimplifiedModal();
  // });

  // it("Admin Panel - Add, edit category without exempt oversight requirement", () => {
  //   productCategoriesPage.verifyProductCategoryScreen();
  //   productCategoriesPage.verifyNonExemptCategoryTooltip();
  //   productCategoriesPage.clickOnAddNewCategory();
  //   productCategoriesPage.verifyAddCustomItemModal();
  //   let categoryName =
  //     AdminPanelData.categoryName + basepage.generateRandomText();
  //   productCategoriesPage.enterNewCategory(categoryName);
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.verifyCategoryAddedInNonExemptList(categoryName);
  //   productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName,"Edit");
  //   productCategoriesPage.enterValueInEditCategory(categoryName);
  //   productCategoriesPage.clickOnSubmitNewCategory();
  // });

  // it("Admin Panel - -Add, Edit, delete and sort category with max char allowed i.e. 150", () => {
  //   productCategoriesPage.verifyProductCategoryScreen();
  //   productCategoriesPage.clickOnAddNewCategory();
  //   productCategoriesPage.verifyExemptCategorySort();
  //   productCategoriesPage.verifyAddCustomItemModal();
  //   let categoryName =
  //     basepage.generateRandomText() + AdminPanelData.categoryNameMaxChar;
  //   productCategoriesPage.enterNewCategory(categoryName);
  //   productCategoriesPage.checkExemptOption();
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.verifyCategoryAddedInExemptList(categoryName);
  //   productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName,"Edit");
  //   productCategoriesPage.enterValueInEditCategory(categoryName);
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.verifyCategoryAddedInNonExemptList(categoryName);
  // });


  // it("Admin Panel - Add new category with potential matches found", () => {
  //   productCategoriesPage.clickOnAddNewCategory();
  //   productCategoriesPage.verifyAddCustomItemModal();
  //   productCategoriesPage.enterNewCategory(AdminPanelData.potentialMatchData);
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.verifyPotentialMatchModal();
  // });

  // it("Admin Panel - -Add, Edit  and delete new category with already existing category", () => {
  //   productCategoriesPage.clickOnAddNewCategory();
  //   productCategoriesPage.verifyAddCustomItemModal();
  //   let categoryName =
  //     basepage.generateRandomText() + AdminPanelData.categoryNameMaxChar;
  //   productCategoriesPage.enterNewCategory(categoryName);
  //   productCategoriesPage.checkExemptOption();
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.clickOnAddNewCategory();
  //   productCategoriesPage.enterNewCategory(categoryName);
  //   productCategoriesPage.clickOnSubmitNewCategory();
  //   productCategoriesPage.verifyErrorMessage();
  // });

  it("Admin Panel - By product filter by category", () => {
    productCategoryByProductPage.clickOnByProductTab();
    productCategoryByProductPage.verifyCategoryFilter(AdminPanelData.potentialMatchData);
    productCategoryByProductPage.verifyCategoryFilter(basepage.generateRandomText());
    productCategoryByProductPage.verifyNoResultErrorMessage();
  });

  // it("Admin Panel - By product - sort by product name", () => {
  //   productCategoryByProductPage.clickOnByProductTab();
  //   productCategoryByProductPage.verifyProductNameSort();
  // });

  // it("Admin Panel - By product -sort by category name", () => {
  //   productCategoryByProductPage.clickOnByProductTab();
  //   productCategoryByProductPage.verifyVendorNameSort();
  // });


  // it("Admin Panel - By product -sort by exempt category ", () => {
  //   productCategoryByProductPage.clickOnByProductTab();
  //   productCategoryByProductPage.verifyExemptSort();
  // });

  // it("Admin Panel - By product -sort by vendor name ", () => {
  //   productCategoryByProductPage.clickOnByProductTab();
  //   productCategoryByProductPage.verifyVendorNameSort();
  // });

  // it("Admin Panel - By product -search by vendor name ", () => {
  //   productCategoryByProductPage.clickOnByProductTab();
  //   productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.searchVendor);
  // });

  // it("Admin Panel - By product -search by category name ", () => {
  //   productCategoryByProductPage.clickOnByProductTab();
  //   productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.potentialMatchData);
  // });


  // it("Admin Panel - By product -search by product name ", () => {
  //   productCategoryByProductPage.clickOnByProductTab();
  //   productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.searchProduct);
  // });

});
