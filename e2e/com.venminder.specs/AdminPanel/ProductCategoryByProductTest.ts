
import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { BasePage } from "../../com.venminder.page/shared/BasePage";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { ProductCategoryByProductPage } from '../../com.venminder.page/AdminPanel/ProductCategoryByProductPage';

describe("ORBCR - Functional Testing of Admin Panel Product Categories Tab", () => {
  let userrolespage = new UserRolesPage();
  let basepage = new BasePage();
  let productCategoryByProductPage = new ProductCategoryByProductPage();
  basepage.goToAdminPanelPage(BasePageOR.profileIcon_new, BasePageOR.adminPanelLink_new);
  userrolespage.clickOnProductCategoriesTab();

 describe("PBI-9882 --> Admin Panel - Manage Categories: By Product - filter nnd search Category", () => {
    it("Admin Panel - By product filter by category", () => {
      productCategoryByProductPage.clickOnByCategoryProductTab();
      productCategoryByProductPage.verifyCategoryFilter(AdminPanelData.potentialMatchData);
      let searchCategory = basepage.generateRandomText();
      productCategoryByProductPage.verifyCategoryFilter(searchCategory);
      productCategoryByProductPage.verifyCategoryFilter(" ");
    });
  
    it("Admin Panel - By product -search by vendor name ", () => {
      productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.searchVendor);
    });
  
    it("Admin Panel - By product -search by product name and potential match data", () => {
      productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.searchProduct);
      productCategoryByProductPage.verifyCategoryVendorProductSearch(AdminPanelData.potentialMatchData);
      productCategoryByProductPage.verifyCategoryVendorProductSearch(" ");
    });
   
     it("Admin Panel - Pagination Scenarios", () => {
				productCategoryByProductPage.verifyPaginationCount25();
				productCategoryByProductPage.verifyPaginationCount50();
				productCategoryByProductPage.verifyPaginationCount100();
				productCategoryByProductPage.verifyPaginationCount200();
			});
  });
  
   it("Admin Panel - Assign/Reassign current category", () => {
			productCategoryByProductPage.verifyAssignCategory();
			productCategoryByProductPage.verifyCancelAssignCategory();
			productCategoryByProductPage.verifyReassignCategory();
			productCategoryByProductPage.verifyCancelReassignCategory();
		});
    
});