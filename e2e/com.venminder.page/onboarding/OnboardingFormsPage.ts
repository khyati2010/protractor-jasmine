import { browser, protractor, Browser, WebDriver } from "protractor";
import { masterFormSection } from "./../../com.venminder.testdata/TestData";
import { OnboardingFormsOR } from "../../com.venminder.page_object/onboarding/OnboardingFormsOR";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class VendorOnboardingForm extends OnboardingFormsOR {
  masterFormSection: masterFormSection = new masterFormSection();

  clickOnboardingFormsTab() {
    browser.wait(
      until.elementToBeClickable(this.onboardingFormsTab),
      50000,
      "onboarding form tab is clicked "
    );
    this.onboardingFormsTab.click();
  }

  onboardingFormsSectionContent() {
    browser.wait(
      until.visibilityOf(this.masterFormTable),
      30000,
      "forms table is displayed"
    );
    this.masterFormTable.isDisplayed(),
      this.customFormTable.isDisplayed().then(function(isDisplayed) {
        expect(isDisplayed).to.equal(true);
      });
  }

  clickMasterFormActionBtn() {
    this.masterFormActionBtn.click();
    this.masterFormActionViewBtn.isDisplayed(),
      this.masterFormActionCloneBtn.isDisplayed().then(function(isDisplayed) {
        expect(isDisplayed).to.equal(true);
      });
  }

  clickCustomFormActionBtn() {
    this.customFormActionBtn.click();
    this.customFormActionCloneBtn.isDisplayed(),
      this.customFormActionDeleteBtn.isDisplayed(),
      this.customFormActionEditBtn.isDisplayed(),
      this.customFormActionViewBtn.isDisplayed().then(function(isDisplayed) {
        expect(isDisplayed).to.equal(true);
      });
  }

  clickAddNewMasterFormBtn() {
    browser.wait(
      until.elementToBeClickable(this.addNewMasterFormBtn),
      10000,
      "click on add new master form"
    );
    this.addNewMasterFormBtn.click();
  }

  getvendorInformationSectionContent(item: any) {
    this.vendorInformationSection.getText().then(function(text) {
      let vendorInformationCount = text[0].split("\n");
      for (var i = 0; i < vendorInformationCount.length; i++) {
        expect(vendorInformationCount[i].trim()).to.equal(item[i]);
      }
    });
  }

  getProductInformationSectionContent(item: any) {
    this.productInformationSection.getText().then(function(text) {
      let productInformationCount = text[0].split("\n");
      for (var i = 0; i < productInformationCount.length; i++) {
        expect(productInformationCount[i].trim()).to.equal(item[i]);
      }
    });
  }

  getPricingInformationSectionContent(item: any) {
    this.pricingInformationSection.getText().then(function(text) {
      let pricingInformationCount = text[0].split("\n");
      for (var i = 0; i < pricingInformationCount.length; i++) {
        expect(pricingInformationCount[i].trim()).to.equal(item[i]);
      }
    });
  }

  getCriticalQuestionsList(item: any) {
    this.criticalQuestionSection.getText().then(function(text) {
      let questionCount = text[0].split("\n");
      for (var i = 0; i < questionCount.length; i++) {
        expect(questionCount[i].trim()).to.equal(item[i]);
      }
    });
  }

  clickSaveFormBtn(item: string) {
    browser.wait(
      until.elementToBeClickable(this.saveFormBtn),
      1000,
      "click on save master form"
    );
    this.saveFormBtn.click();
    browser.wait(
      until.visibilityOf(this.masterFormTable),
      30000,
      "forms table is displayed"
    );
    this.clientMasterForm.getText().then(text => {
      expect(text).to.equal(item);
    });
  }

  clickActionViewBtn() {
    browser.wait(
      until.visibilityOf(this.masterFormActionBtn),
      10000,
      "view option in displayed in action dropdown"
    );
    this.masterFormActionViewBtn.click();
  }

  viewMasterFormPopup() {
    browser.wait(
      until.visibilityOf(this.viewMasterForm),
      30000,
      "master form popup is displayed"
    );
    this.viewMasterForm.isDisplayed().then(function(displayed) {
      expect(displayed).to.equal(true);
    });
    this.closeViewMasterForm.click();
  }

  addFieldModal(item: string) {
    browser.wait(
      until.elementToBeClickable(this.pricingSectionAddFieldBtn),
      10000,
      "click on add field is displayed"
    );
    this.pricingSectionAddFieldBtn.click();
    browser.wait(
      until.visibilityOf(this.addFieldModalPopup),
      9000,
      "add field modal popup is displayed"
    );
    this.addFieldModalPopup.isDisplayed().then(displayed => {
      this.addFieldLblInput.sendKeys(item);
      this.addFieldSubmitBtn.click();
    });

    browser.wait(
      until.visibilityOf(this.masterFormTitle),
      10000,
      "master form is loaded"
    );
    var found = false;
    this.pricingInformationSection.getText().then(text => {
      let pricingInformationCount = text[0].split("\n");
      for (var i = 0; i < pricingInformationCount.length; i++) {
        if (pricingInformationCount[i] === item) {
          found = true;
          break;
        }
      }
      expect(found).to.equal(true);
    });
    this.customFieldcloseBtn.click();
  }

  cloneToCustomForm() {
    browser.wait(
      until.elementToBeClickable(this.masterFormActionBtn),
      3000,
      "master form action button is clickable"
    );
    this.masterFormActionBtn.click();
    this.masterFormActionCloneBtn.isDisplayed().then(() => {
      this.masterFormActionCloneBtn.click().then(() => {
        this.formNameInputBoxCloneToCustom.isDisplayed().then(displayed => {
          expect(displayed).to.equal(true);
        });
      });
    });
  }

  validateDisabledSaveFormBtn() {
    browser.wait(
      until.visibilityOf(this.saveFormBtn),
      1000,
      "save button is displayed"
    );
    this.saveFormBtn.isEnabled().then(function(enabled) {
      expect(enabled).to.equal(false);
    });
  }
  createCustomFormFieldValidation(item: string) {
    browser.wait(
      until.elementToBeClickable(this.formNameInputBoxCloneToCustom),
      10000,
      "input field is clickable"
    );
    this.formNameInputBoxCloneToCustom.sendKeys(item);
    this.categoryDropdown.click();
    this.selectCategoriesDropdown.getText().then(text => {
      let categoriesCount = text[0].split("\n");
      if (categoriesCount.length > 0) {
        this.firstCategoryDropdown.click();
      }
      this.saveFormBtn.isEnabled().then(enabled => {
        expect(enabled).to.equal(true);
      });
      this.saveFormBtn.click();
      browser.wait(
        until.visibilityOf(this.customFormTable),
        10000,
        "custom form table displayed"
      );
      expect(this.customFormTable.isDisplayed());
    });
  }

  customFormPostAddValidation(item: string) {
    var found = false;
    browser.wait(
      until.visibilityOf(this.customFormTable),
      30000,
      "custom form table is displayed"
    );
    browser.sleep(500);
    this.customFormsNamesInTable.count().then(size => {
      this.customFormsNamesInTable.getText().then(function(text) {
        for (var i = 0; i < size; i++) {
          if (text[i] === item) {
            found = true;
            break;
          }
        }
        expect(found).to.equal(true);
      });
    });
  }

  addNewCustomForm() {
    browser.wait(until.invisibilityOf(this.loader), 3000, "page loading");
    browser.sleep(1000);
    browser.wait(
      until.elementToBeClickable(this.addNewCustomFormBtn),
      3000,
      "add new custom form button is displayed"
    );
    this.addNewCustomFormBtn.click();
  }

  viewCustomForm() {
    browser.wait(
      until.elementToBeClickable(this.customFormActionViewBtn),
      10000,
      "click on view custom form"
    );
    this.customFormActionViewBtn.click();
    browser.wait(
      until.visibilityOf(this.viewMasterForm),
      20000,
      "custom form view modal is displayed"
    );
    this.viewMasterForm.isDisplayed().then(displayed => {
      expect(displayed).to.equal(true);
    });
    this.customFormViewCancelBtn.click();
  }

  editCustomForm(formName: string) {
    browser.wait(
      until.elementToBeClickable(this.customFormActionViewBtn),
      10000,
      "click on view custom form"
    );
    this.customFormActionEditBtn.click();
    this.viewMasterForm.isDisplayed().then(displayed => {
      expect(displayed).to.equal(true);
    });
    this.editFormNameInput.clear().then(() => {
      this.editFormNameInput.sendKeys(formName);
    });
    this.saveFormBtn.click();
  }

  duplicateFormNameValidation() {
    var found = false;
    browser.wait(
      until.visibilityOf(this.customFormTable),
      30000,
      "custom form table is displayed"
    );
    browser.sleep(500);
    this.customFormsNamesInTable.count().then(size => {
      this.customFormsNamesInTable.getText().then(function(text) {
        for (var i = 0; i < size; i++) {
          for (var j = i + 1; j < size; j++) {
            if (text[i] === text[j]) {
              found = true;
              break;
            }
          }
        }
        expect(found).to.equal(false);
      });
    });
  }

  deleteCustomForm() {
    var formDeleted = false;
    var deletedFormName;
    this.customFormsNamesInTable.count().then(size => {
      this.customFormsNamesInTable.getText().then(function(text) {
        deletedFormName = text[1];
      });

      this.customFormActionBtn.click();
      browser.wait(
        until.elementToBeClickable(this.customFormActionDeleteBtn),
        10000,
        "delete button is clickable"
      );
      this.customFormActionDeleteBtn.click();
      browser.wait(
        until.visibilityOf(this.deleteCustomFormodal),
        5000,
        "delete modal is not displayed"
      );
      this.deleteCustomFormodal.isDisplayed().then(() => {
        this.deleteFormAcknowldgChkbox.click();
        browser.wait(
          until.elementToBeClickable(this.deleteCustomFormModalBtn),
          1000,
          "delete button is not enabled"
        );
        this.deleteCustomFormModalBtn.click();
      });
      this.customFormsNamesInTable.count().then(size => {
        this.customFormsNamesInTable.getText().then(text => {
          for (var i = 0; i < size; i++) {
            for (var j = i + 1; j < size; j++) {
              if (text[i] === deletedFormName) {
                formDeleted = true;
                break;
              }
            }
          }
        });
      });
      expect(formDeleted).to.equal(false);
    });
  }

  makeMasterFormActive() {
    browser.wait(
      until.elementToBeClickable(this.disabledMasterFormActionBtn),
      3000,
      "click i=on action button for disabled form"
    );
    this.disabledMasterFormActionBtn.click();
    this.makeActiveActionBtn.isDisplayed().then(() => {
      this.makeActiveActionBtn.click();
      browser.wait(
        until.visibilityOf(this.makeActiveMasterFormModal),
        1000,
        "master form active modal not displayed"
      );
      this.makeActiveMasterFormModal.isDisplayed().then(() => {
        this.makeActiveMasterFormSubmitBtn.click();
      });
    });
  }
}
