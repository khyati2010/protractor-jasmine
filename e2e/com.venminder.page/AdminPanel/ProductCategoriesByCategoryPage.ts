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

export class ProductCategoriesPage extends BasePage {
  textbox = new TextBox();
  click = new Click();
  select = new SelectDropDown();

  verifyProductCategoryScreen() {
    ProductCategoriesOR.lblProductCategoryOnScreen
      .isDisplayed()
      .then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });
    console.log("Product Category tab is visible");
    ProductCategoriesOR.lblByCategoryTab.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    console.log("By Category tab is visible");
    ProductCategoriesOR.lblByProductTab.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    console.log("By Product tab is visible");
  }

  verifyAddCustomItemModal() {
    browser.wait(until.visibilityOf(ProductCategoriesOR.lblAddCategory), 10000);
    console.log("Add custom modal is displayed.");
    ProductCategoriesOR.inputAddCategoryName.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    ProductCategoriesOR.characterCountText.getText().then(text => {
      this.assertEquals(
        text.toString().trim(),
        AdminPanelData.label_addCategoryCharCount
      );
    });
    ProductCategoriesOR.btnSubmitNewCategory.isEnabled().then(isEnabled => {
      this.assertEquals(isEnabled, true);
    });
    ProductCategoriesOR.btnCancelAddNewCategory
      .isDisplayed()
      .then(isDisplayed => {
        this.assertEquals(isDisplayed, true);
      });
  }

   enterNewCategory(addNewCategory: string) {
    this.textbox.setTextValue(
      ProductCategoriesOR.inputAddCategoryName, addNewCategory);
    console.log("Entered Custom new category : " + addNewCategory);
  }

  async clickOnAddNewCategory() {
    this.scrollpage.scrollToElement(ProductCategoriesOR.btnAddCategory);
  await  this.click.buttonClick(ProductCategoriesOR.btnAddCategory);
    console.log("Add new category button is clicked.");
  }

  checkExemptOption() {
    browser.wait(until.visibilityOf(ProductCategoriesOR.checkBoxExempt), 1000);
    ProductCategoriesOR.checkBoxExempt.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);{ 
        this.click.buttonClick(ProductCategoriesOR.checkBoxExempt);
      }
    console.log("Exempt from oversight requirements is clicked.");
    });
    browser.sleep(1000);
  }

  clickOnCancelAddNewCategory() {
    browser.wait(
      until.visibilityOf(ProductCategoriesOR.btnCancelAddNewCategory),
      1000
    );
    this.click.buttonClick(ProductCategoriesOR.btnCancelAddNewCategory);
    console.log("Cancel button is clicked.");
  }

   clickOnSubmitNewCategory() {
    browser.wait(
      until.visibilityOf(ProductCategoriesOR.btnSubmitNewCategory),
      2000);
    this.click.buttonClick(ProductCategoriesOR.btnSubmitNewCategory);
    console.log("Sumbmit button is clicked.");
    browser.sleep(1000);
  }

  verifyCategoryAddedInExemptList(categoryName: string) {
    let i = 0;
    ProductCategoriesOR.categoryList.each((element, i) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          this.assertEquals(data, categoryName);
          i++;
        }
      });
    });
    console.log("Category is added as an exempt from oversight requirements.");
  }

  verifyCategoryAddedInNonExemptList(categoryName: string) {
    let i = 0;
    ProductCategoriesOR.categoryList.each((element, i) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          this.assertEquals(data, categoryName);
          i++;
        }
      });
    });
    console.log("Category is added as a non exempt from oversight requirements.");
  }

 async  editExemptCategory(categoryName: string) {
    let i = 0;
    ProductCategoriesOR.categoryList.each((element, i) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          ProductCategoriesOR.btnActions.then(actionButton=>{
            this.click.buttonClick(actionButton[i]);
            browser.sleep(1000);
            console.log("Clicked on actions new category for : " + categoryName);
            ProductCategoriesOR.btnActionsEdit.then(edit=>{
              this.click.buttonClick(edit[i]);
              console.log("Clicked on edit new category for : " + categoryName);
            })
          });
          this.assertEquals(data, categoryName);
          i++;
        }
      });
    });
   await this.textbox.setTextValue(
      ProductCategoriesOR.inputAddCategoryName,
      categoryName+ this.generateRandomText());
    console.log("Renamed custom new category to: " + categoryName);
  }

  clickOnEditDeleteCategorytButton(categoryName: string, actions: string) {
    ProductCategoriesOR.categoryList.each((element, index) => {
      element.getText().then(text => {
        let data = text.toString().trim();
        if (data === categoryName) {
          ProductCategoriesOR.btnActions.then(action => {
            this.click.buttonClick(action[index]);
            console.log("Clicked on actions for : " + categoryName);
            browser.sleep(1000);
            if (actions === "Edit") {
              ProductCategoriesOR.btnActionsEdit.then(edit => {
                this.click.buttonClick(edit[index]);
                console.log("Clicked on edit category for : " + categoryName);
              });
            } else if (actions === "Delete") {
              ProductCategoriesOR.btnActionsDelete.then(deletes => {
                this.click.buttonClick(deletes[index]);
                console.log("Clicked on  delete category for : " + categoryName);
              });
            }
          });
        }
      });
    });
    browser.sleep(2000);
    if (actions === "Edit")
      browser.wait(until.visibilityOf(ProductCategoriesOR.headerEditCategory), 3000, "Edit Oversight Requirement modal is not displayed");
    else if (actions === "Delete")
      browser.wait(until.visibilityOf(ProductCategoriesOR.headerDeleteCategory), 3000, "Confirm Delete modal is not displayed");
  }


  enterValueInEditCategory(categoryName: string) {
  this.textbox.setTextValue(
      ProductCategoriesOR.inputAddCategoryName,
      categoryName+ this.generateRandomText());
    console.log("Renamed custom new category : " + categoryName);
  }

  verifyErrorMessage(){
    ProductCategoriesOR.errDuplicateCategory.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    console.log("Duplicate error message is displayed");
    ProductCategoriesOR.btnCancelAddNewCategory.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.btnCancelAddNewCategory);
    });
}

verifyExemptCategoryTooltip(){
  ProductCategoriesOR.lblInfoToolTipExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblInfoToolTipExempt);
      ProductCategoriesOR.lblInfoToolTipExempt.getText().then(text => {
          let data = text.toString().trim();
          if (data === AdminPanelData.exemptCategoryToolip) {
            this.assertEquals(data, AdminPanelData.exemptCategoryToolip);
          }
        });
      }
    });
}

verifyNonExemptCategoryTooltip(){
  ProductCategoriesOR.lblInfoToolTipNonExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblInfoToolTipNonExempt);
      ProductCategoriesOR.lblInfoToolTipNonExempt.getText().then(text => {
          let data = text.toString().trim();
          if (data === AdminPanelData.nonExemptCategoryToolip) {
            this.assertEquals(data, AdminPanelData.nonExemptCategoryToolip);
          }
        });
      }
    });
}

verifyExemptCategorySort(){
  ProductCategoriesOR.lblSortExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblSortExempt);
      }
    });
}

verifyNonExemptCategorySort(){
  ProductCategoriesOR.lblSortNonExempt.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.lblSortNonExempt);
      }
    });
    this.click.buttonClick(ProductCategoriesOR.lblSortNonExempt);
}

verifySimplifiedModal(){
  ProductCategoriesOR.btnSimplifiedModal.isDisplayed().then(isDisplayed => {
    this.assertEquals(isDisplayed, true);{ 
      this.click.buttonClick(ProductCategoriesOR.btnSimplifiedModal);
      }
    });
    ProductCategoriesOR.btnCloseSimplifiedModal.isPresent().then(isPresent => {
      if (isPresent) {
          this.click.buttonClick( ProductCategoriesOR.btnCloseSimplifiedModal);
      }
  });
}

verifyPotentialMatchModal(){
  ProductCategoriesOR.lblPotentialMatchMessage.isDisplayed().then(isDisplayed =>{
    this.assertEquals(isDisplayed, true);
    ProductCategoriesOR.lblPotentialMatchMessage.getText().then(text => {
      let data = text.toString().trim();
      if (data === AdminPanelData.potentialMatchMessage) {
        this.assertEquals(data, AdminPanelData.potentialMatchMessage);
      }
    });
    ProductCategoriesOR.btnCancelAddNewCategory.isDisplayed().then(isDisplayed =>{
      this.assertEquals(isDisplayed, true);
      this.click.buttonClick(ProductCategoriesOR.btnCancelAddNewCategory);
    });
  });


}


}
