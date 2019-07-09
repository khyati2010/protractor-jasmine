import { VendorDashboardOR } from "./../../com.venminder.page_object/dashboard/VendorDashboardOR";
import { Click } from "./../../com.venminder.utilities/Click";
import { TextBox } from "./../../com.venminder.utilities/TextBox";
import { browser, protractor } from "protractor";
import { BasePage } from "../shared/BasePage";
import { ScrollPage } from "../../com.venminder.utilities/ScrollPage";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { ProductProfileOR } from "../../com.venminder.page_object/dashboard/ProductProfileOR";
import { ProductProfileData } from '../../com.venminder.testdata/TestData';

const until = protractor.ExpectedConditions;

export class ProductProfilePage extends BasePage {
  textbox = new TextBox();
  click = new Click();
  select = new SelectDropDown();
  scrollpage = new ScrollPage();

  openProductProfile() {
    VendorDashboardOR.btnSearch.click();
    browser.wait(
      until.elementToBeClickable(ProductProfileOR.tabProductProfile),
      50000,
      "Product Profile tab is displayed in vendor menu bar "
    );
    ProductProfileOR.tabProductProfile.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.click.buttonClick(ProductProfileOR.tabProductProfile);
    browser.wait(
      until.visibilityOf(ProductProfileOR.lblProductInfo),
      50000,
      "Product Profile tab is loaded completely"
    );
  }

  clickOnEditProductInformationIcon() {
    browser.wait(
      until.elementToBeClickable(ProductProfileOR.edtProductProfile),
      50000,
      "Product Profile edit tab is displayed in vendor menu bar "
    );
    ProductProfileOR.edtProductProfile.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.click.buttonClick(ProductProfileOR.edtProductProfile);
  }

  enterProductName() {
    browser.wait(
      until.visibilityOf(ProductProfileOR.inputProductName),
      50000,
      "Product Profile name label is displayed"
    );
    ProductProfileOR.inputProductName.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.textbox.setTextValue(
      ProductProfileOR.inputProductName,
      "ProductName_" + this.generateRandomText()
    );
  }

  enterProductType() {
    browser.wait(
      until.visibilityOf(ProductProfileOR.inputProductType),
      50000,
      "Product Profile type label is displayed"
    );
    ProductProfileOR.inputProductType.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.textbox.setTextValue(
      ProductProfileOR.inputProductType,
      "ProductType_" + this.generateRandomText()
    );
  }
  selectStatusAsActive() {
    this.select.selectElementByText(
      ProductProfileOR.selectStatus,
      ProductProfileData.status_active
    );
  }

  selectStatusAsInactive() {
    this.select.selectElementByText(
      ProductProfileOR.selectStatus,
      ProductProfileData.status_inactive
    );
  }

  enterDescription() {
    browser.wait(
      until.visibilityOf(ProductProfileOR.inputDescription),
      50000,
      "Product Profile type label is displayed"
    );
    ProductProfileOR.inputDescription.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.textbox.setTextValue(
      ProductProfileOR.inputDescription,
      "Description_" + this.generateRandomText()
    );
  }

  selectProductManager() {
    this.select.selectElementByIndex(
      ProductProfileOR.selectProductManager,
      ProductProfileData.status_index
    );
  }

  selectCollaborators() {
    this.select.selectElementByIndex(
      ProductProfileOR.selectCollaborators,
      ProductProfileData.status_index
    );
  }

  selectCategory() {
    this.select.selectElementByIndex(
      ProductProfileOR.selectCategory,
      ProductProfileData.status_index
    );
  }

  radioBtnNpiAccess() {
    //TODO: need a new utility
    this.click.buttonClick(ProductProfileOR.radioBtnNpiAccessYes);
  }

  radioBtnProductOutsourced() {
    this.click.buttonClick(ProductProfileOR.radioBtnProductOutsourcedYes);
  }

  radioBtnProductProcessed() {
    this.click.buttonClick(ProductProfileOR.radioBtnProductProcessedInHouseYes);
  }

  enterAddressDetails() {
    this.textbox.setTextValue(
      ProductProfileOR.inputAddress,
      "Address1" + this.generateRandomText()
    );
    this.textbox.setTextValue(
      ProductProfileOR.inputAddress2,
      "Address2" + this.generateRandomText()
    );
    this.textbox.setTextValue(
      ProductProfileOR.inputCity,
      "City" + this.generateRandomText()
    );
    this.textbox.setTextValue(
      ProductProfileOR.inputState,
      "State" + this.generateRandomText()
    );
    this.textbox.setTextValue(
      ProductProfileOR.inputZip,
      this.getRandomInteger().toString()
    );
  }

  selectContacts() {
    this.select.selectElementByIndex(
      ProductProfileOR.selectContacts,
      ProductProfileData.status_index
    );
  }

  btnAddNewContacts() { }

  clickOnAddProfileItemButton() {
    this.scrollpage.scrollDown();
    this.click.buttonClick(ProductProfileOR.btnAddProfileItem);
    browser.wait(
      until.visibilityOf(ProductProfileOR.headerAddCustomItem),
      30000,
      "Add Custom Field modal is not displayed"
    );
    browser.wait(
      until.elementToBeClickable(ProductProfileOR.btnAddProfileItem),
      50000,
      "Product Profile add new profile item is displayed"
    );
  }

  async verifyAddCustomItemModal() {
    browser.wait(
      until.visibilityOf(ProductProfileOR.headerAddCustomItem),
      30000
    );
    ProductProfileOR.headerAddCustomItem.getText().then(text => {
      this.assertEquals(text, ProductProfileData.lblAddCustomItem);
    });

    ProductProfileOR.inputQuestionLabel.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    ProductProfileOR.selectAnswerFormat.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    this.select
      .getAllOptions(ProductProfileOR.selectAnswerFormat)
      .then(options => {
        for (let i = 0; i < options.length; i++) {
          options[i].getText().then(text => {
            this.assertEquals(text, ProductProfileData.answerFormatOptions[i]);
          });
        }
      });
    ProductProfileOR.characterCountText.getText().then(text => {
      this.assertEquals(text, ProductProfileData.characterCount);
    });
    ProductProfileOR.labelApplyToAllVendor.getText().then(text => {
      this.assertEquals(text, ProductProfileData.textApplyForAllVendor);
    });
    ProductProfileOR.textYesNo.then(options => {
      for (let i = 0; i < options.length; i++) {
        options[i].getText().then(text => {
          this.assertEquals(text, ProductProfileData.checkBoxYesNo[i]);
        });
        ProductProfileOR.checkboxYesNo.isSelected().then(isSelected => {
          this.assertEquals(isSelected[i], false);
        });
      }
    });
    ProductProfileOR.btnSubmitCustomItem.isEnabled().then(isEnabled => {
      this.assertEquals(isEnabled, false);
    });
    ProductProfileOR.btnCancelCustomItem.isEnabled().then(isEnabled => {
      this.assertEquals(isEnabled, true);
    });
  }

  btnDeleteProfileItem() {
    browser.wait(
      until.elementToBeClickable(ProductProfileOR.btnUndoCustomItem[1]),
      50000,
      "Product Profile tab is displayed in vendor menu bar"
    );
    ProductProfileOR.btnUndoCustomItem.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.click.buttonClick(ProductProfileOR.btnUndoCustomItem[1]);
  }

  lblDeleteErrorMessage() {
    browser.wait(
      until.visibilityOf(ProductProfileOR.errorRemoveFromVendor[1]),
      50000,
      "Product Profile error message is displayed"
    );
    ProductProfileOR.errorRemoveFromVendor
      .isDisplayed()
      .then(function (displayed) {
        expect(displayed).toEqual(true);
      });
  }

  clickSaveButton() {
    browser.wait(
      until.elementToBeClickable(ProductProfileOR.btnSave),
      50000,
      "Product Profile tab is displayed in vendor menu bar"
    );
    ProductProfileOR.btnSave.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.click.buttonClick(ProductProfileOR.btnSave);
  }

  clickCancelButton() {
    browser.wait(
      until.elementToBeClickable(ProductProfileOR.btnCancel),
      50000,
      "Product Profile tab is displayed in vendor menu bar"
    );
    ProductProfileOR.btnCancel.isDisplayed().then(function (displayed) {
      expect(displayed).toEqual(true);
    });
    this.click.buttonClick(ProductProfileOR.btnCancel);
  }
}