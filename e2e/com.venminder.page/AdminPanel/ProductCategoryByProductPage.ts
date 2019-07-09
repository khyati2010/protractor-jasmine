import { UserRolesPage } from "./UserRolesPage";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { AdminPanelData } from "../../com.venminder.testdata/TestData";
import { BasePage } from "../shared/BasePage";
import { protractor, browser } from "protractor";
import { ProductCategoriesOR } from "../../com.venminder.page_object/AdminPanel/ProductCategoriesOR";
import { OversightRequirementsOR } from "../../com.venminder.page_object/AdminPanel/OversightRequirementsOR";
OversightRequirementsOR
const until = protractor.ExpectedConditions;

export class ProductCategoryByProductPage extends BasePage {
    textbox = new TextBox();
    click = new Click();
    select = new SelectDropDown();

    clickOnByProductTab(){
        ProductCategoriesOR.lblProductCategoryOnScreen.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            this.click.buttonClick(ProductCategoriesOR.lblProductCategoryOnScreen);
        });
    }


    verifyCategoryFilter(category: string){
        ProductCategoriesOR.lblProductCategoryOnScreen.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
        });
        ProductCategoriesOR.dropDownfilter.isDisplayed().then(isDisplayed => {
          this.assertEquals(isDisplayed, true);
        this.click.buttonClick(ProductCategoriesOR.dropDownfilter);
        ProductCategoriesOR.txtSearchCategory.isDisplayed().then(isDisplayed =>{
            this.assertEquals(isDisplayed, true);
            this.textbox.setTextValue(ProductCategoriesOR.txtSearchCategory,category);
        });
        ProductCategoriesOR.btnSelectAll.isDisplayed().then(isDisplayed =>{
            this.assertEquals(isDisplayed, true);
        });
        ProductCategoriesOR.btnDeSelectAll.isDisplayed().then(isDisplayed =>{
            this.assertEquals(isDisplayed, true);
        });
        ProductCategoriesOR.listCategory.each((index) => {
                    ProductCategoriesOR.listCategory.count().then(check => {
                       if( check>0)  {
                           this.click.buttonClick( ProductCategoriesOR.listCategory[0]);
                           ProductCategoriesOR.btnCheck.isDisplayed().then(isDisplayed =>{
                            this.assertEquals(isDisplayed, true);
                        });
                        }
                    });
        });
        });
        this.click.buttonClick(ProductCategoriesOR.dropDownfilter);
    }

    verifyNoResultErrorMessage(){
        ProductCategoriesOR.errNoResult.isDisplayed().then(isDisplayed =>{
            this.assertEquals(isDisplayed, true);
        });
    }

    verifyCategorySort(){
        ProductCategoriesOR.lblProductName.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            this.click.buttonClick(ProductCategoriesOR.lblProductName);
        });
    }

    verifyProductNameSort(){
        ProductCategoriesOR.lblProductName.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            this.click.buttonClick(ProductCategoriesOR.lblProductName);
        });
    }

    verifyVendorNameSort(){
        ProductCategoriesOR.lblVendorName.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            this.click.buttonClick(ProductCategoriesOR.lblVendorName);
        });
    }

    verifyExemptSort(){
        ProductCategoriesOR.lblExempt.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
            this.click.buttonClick(ProductCategoriesOR.lblExempt);
        });
    }

    async verifyCategoryVendorProductSearch(name : string){
        ProductCategoriesOR.inputSearch.isDisplayed().then(isDisplayed => {
            this.assertEquals(isDisplayed, true);
        });
        await this.textbox.setTextValue(
            ProductCategoriesOR.inputAddCategoryName,
            name+ this.generateRandomText());
          console.log("Searched category name is : " + name);
    }


}