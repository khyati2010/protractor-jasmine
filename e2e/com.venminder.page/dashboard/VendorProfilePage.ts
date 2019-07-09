import { VendorProfileOR } from "./../../com.venminder.page_object/dashboard/VendorProfileOR";
import { TextBox } from "./../../com.venminder.utilities/TextBox";
import { browser, protractor, by } from 'protractor';
import { BasePage } from "../shared/BasePage";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { ScrollPage } from "../../com.venminder.utilities/ScrollPage";
import { VendorProfileData } from "../../com.venminder.testdata/TestData";
import { Click } from '../../com.venminder.utilities/Click';
import { BasePageOR } from '../../com.venminder.page_object/shared/BasePageOR';
const until = protractor.ExpectedConditions;

export class VendorProfilePage extends BasePage {
  responseDataArray: Array<string> = [];
  customQuestionLabel: string = null;
  updatedCustomQuestionLabel: string = null;
  answeFormateValue = null;
  yesNoValue = null;
  size = null;

  textbox = new TextBox();
  click = new Click();
  select = new SelectDropDown();
  scrollpage = new ScrollPage();

  clickOnEditVendorInformationIcon() {
    this.click.buttonClick(VendorProfileOR.editVendorInformationIcon);
    browser.wait(until.invisibilityOf(VendorProfileOR.editVendorInformationIcon), 30000, "Edit Vendor Information icon is not displayed");
  }

  clickOnAddProfileItemButton() {
    this.scrollpage.scrollToElement(VendorProfileOR.btnAddProfileItem);
    this.click.buttonClick(VendorProfileOR.btnAddProfileItem);
    browser.sleep(2000);
    browser.wait(until.visibilityOf(VendorProfileOR.headerAddCustomItem), 30000, "Add Custom Field modal is not displayed");
  }

  enterCustomQuestionLabel(questionLabel: string) {
    this.textbox.setTextValue(VendorProfileOR.inputQuestionLabel, questionLabel);
    browser.sleep(1500);
    console.log("Entered Custom Question Label : " + questionLabel);
  }

  selectAnswerFormat(answerFormat: string | number) {
    if (typeof answerFormat === "string")
      this.select.selectElementByText(VendorProfileOR.selectAnswerFormat, answerFormat);
    if (typeof answerFormat === "number")
      this.select.selectElementByIndex(VendorProfileOR.selectAnswerFormat, answerFormat);
    browser.wait(until.visibilityOf(VendorProfileOR.btnAddAnOption), 20000, "Add An Option button is not Visible");
    browser.wait(until.visibilityOf(VendorProfileOR.btnSaveResponse), 20000, "Save Response button is not Visible");
    browser.sleep(1000);
  }

  clickOnButtonOptionCount() {
    this.click.buttonClick(VendorProfileOR.btnOptionCount);
    browser.sleep(1500);
    browser.wait(until.visibilityOf(VendorProfileOR.btnAddAnOption), 20000);
    VendorProfileOR.btnAddAnOption.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
  }

  clickOnSaveResponse() {
    this.scrollpage.scrollToElement(VendorProfileOR.btnSaveResponse);
    this.click.buttonClick(VendorProfileOR.btnSaveResponse);
    browser.sleep(1000);
    browser.wait(until.visibilityOf(VendorProfileOR.btnOptionCount), 20000);
    VendorProfileOR.btnOptionCount.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
  }

  addSaveMultipleResponse(numberOfResponse: number) {
    if (numberOfResponse > 2) {
      for (let i = 0; i < numberOfResponse - 2; i++) {
        this.scrollpage.scrollToElement(VendorProfileOR.btnAddAnOption);
        this.click.buttonClick(VendorProfileOR.btnAddAnOption);
        browser.sleep(1000);
      }
    }
    VendorProfileOR.inputResponse.count().then(items => {
      this.size = items;
      this.responseDataArray = new Array(this.size);
      VendorProfileOR.inputResponse.each((element, index) => {
        element.isEnabled().then(isEnabled => {
          if (isEnabled) {
            let responseText = this.generateRandomText();
            this.textbox.setTextValue(element, responseText);
            this.responseDataArray.push(responseText);
            console.log("Adding Response Text : " + responseText);
          }
          if (!isEnabled) {
            element.getAttribute("value").then(attributeValue => {
              let responsetexts = attributeValue.toString().trim();
              this.responseDataArray.push(responsetexts);
              console.log("Getting Response Text : " + responsetexts);
            });
          }
        });
      });
    });
    this.clickOnSaveResponse();
    VendorProfileOR.btnOptionCount.getText().then(text => {
      let count = parseInt(text.toString().trim());
      this.assertEquals(count, this.size);
    });

    for (let i = 0; i < this.responseDataArray.length; i++) {
      console.log("Stored Aaary Text : " + this.responseDataArray[i]);
    }
  }

  checkYesNoOption(yesNoOptions: string) {
    VendorProfileOR.textYesNo.then(options => {
      for (let i = 0; i < options.length; i++) {
        options[i].getText().then(text => {
          if (text.toString().trim() === yesNoOptions) {
            VendorProfileOR.checkboxYesNo.then(check => {
              this.click.buttonClick(check[i]);
              console.log("Checked Apply To All Options : " + text);
            });
          }
        });
      }
    });
  }

  clickOnSubmitCustomItem() {
    VendorProfileOR.btnSubmitCustomItem.isEnabled().then(isEnabled => {
      if (isEnabled)
        this.click.buttonClick(VendorProfileOR.btnSubmitCustomItem);
    });
    browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 20000);
    browser.wait(until.visibilityOf(VendorProfileOR.btnSaveVendorProfile), 20000);
  }

  clickOnCancelCustomItem() {
    VendorProfileOR.btnCancelCustomItem.isEnabled().then(isEnabled => {
      if (isEnabled)
        this.click.buttonClick(VendorProfileOR.btnCancelCustomItem);
    });
    browser.wait(until.visibilityOf(VendorProfileOR.btnSaveVendorProfile), 30000);
  }

  verifyAddCustomItemModal() {
    browser.wait(until.visibilityOf(VendorProfileOR.headerAddCustomItem), 30000);
    VendorProfileOR.headerAddCustomItem.getText().then(text => {
      this.assertEquals(text.toString().trim(), VendorProfileData.labelAddCustomItem);
    });

    VendorProfileOR.inputQuestionLabel.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    VendorProfileOR.selectAnswerFormat.isDisplayed().then(isDisplayed => {
      this.assertEquals(isDisplayed, true);
    });
    this.select.getAllOptions(VendorProfileOR.selectAnswerFormat).then(options => {
      for (let i = 0; i < options.length; i++) {
        options[i].getText().then(text => {
          this.assertEquals(text.toString().trim(), VendorProfileData.answerFormatOptions[i]);
        });
      }
    });
    VendorProfileOR.characterCountText.getText().then(text => {
      this.assertEquals(text.toString().trim(), VendorProfileData.characterCount);
    });
    VendorProfileOR.labelApplyToAllVendor.getText().then(text => {
      this.assertEquals(text.toString().trim(), VendorProfileData.textApplyForAllVendor);
    });
    VendorProfileOR.textYesNo.then(options => {
      for (let i = 0; i < options.length; i++) {
        options[i].getText().then(text => {
          this.assertEquals(text.toString().trim(), VendorProfileData.checkBoxYesNo[i]);
        });
        VendorProfileOR.checkboxYesNo.isSelected().then(isSelected => {
          this.assertEquals(isSelected[i], false);
        });
      }
    });
    VendorProfileOR.btnSubmitCustomItem.isEnabled().then(isEnabled => {
      this.assertEquals(isEnabled, false);
    });
    VendorProfileOR.btnCancelCustomItem.isEnabled().then(isEnabled => {
      this.assertEquals(isEnabled, true);
    });
  }

  verifySingleMultiDropDownOptionsBehaviour(answerFormat) {
    this.selectAnswerFormat(answerFormat);
    VendorProfileOR.inputResponse.then(items => {
      let size = items.length;
      this.assertEquals(size, 2);
      if (size === 2) {
        VendorProfileOR.btnSaveResponse.isEnabled().then(isEnabled => {
          this.assertEquals(isEnabled, false);
          VendorProfileOR.btnSubmitCustomItem.isEnabled().then(isEnabled => {
            this.assertEquals(isEnabled, false);
          });
        });
        for (let i = 0; i < size; i++) {
          this.textbox.setTextValue(items[i], VendorProfileData.moreThan30characters);
        }
        for (let i = 0; i < size; i++) {
          items[i].getAttribute("value").then(text => {
            console.log("Input Response " + (i + 1) + " Data : " + text);
            this.assertEquals(text.length, 30);
          });
        }
        this.click.buttonClickByKey(VendorProfileOR.btnSaveResponse);
        browser.wait(until.visibilityOf(VendorProfileOR.errorDuplicateResponse), 20000, "Duplicate Response error message is not displayed");
        VendorProfileOR.errorDuplicateResponse.getText().then(text => {
          this.assertEquals(text.toString().trim(), VendorProfileData.duplicateResponseMessage);
        });

        for (let i = 0; i < size; i++) {
          VendorProfileOR.inputResponse.then(items => {
            this.textbox.setTextValue(items[i], this.generateRandomText());
          });
        }
      }
    });

    let randomNum = this.getRandomInteger(1, 4);
    console.log("Generated Random Number is : " + randomNum);
    for (let i = 0; i < randomNum; i++) {
      this.scrollpage.scrollToElement(VendorProfileOR.btnAddAnOption);
      this.click.buttonClick(VendorProfileOR.btnAddAnOption);
      browser.sleep(1000);
    }
    VendorProfileOR.inputResponse.then(items => {
      VendorProfileOR.deleteResponse.then(deleteItems => {
        let responseCount = items.length;
        let deleteIcon = deleteItems.length;
        console.log("Total Response Added :" + responseCount);
        console.log("Total Delete Icon for Response Field :" + deleteIcon);
        this.assertEquals(responseCount, randomNum + 2);
        for (let i = 0; i < responseCount; i++) {
          if (responseCount > 2) {
            this.click.buttonClick(deleteItems[i]);
            responseCount--;
            console.log("Response Count is : " + responseCount);
          }
        }
      });
    });
  }

  clickOnEditCustomItem(inputQuestionLabel: string) {
    VendorProfileOR.questionLableInEditMode.each((element, index) => {
      element.getText().then(text => {
        if (text.toString().trim() === inputQuestionLabel) {
          VendorProfileOR.btnEditCustomItem.then(editIcon => {
            this.click.buttonClick(editIcon[index]);
            browser.sleep(2000);
          });
        }
      });
    });
    browser.wait(until.visibilityOf(VendorProfileOR.headerAddCustomItem), 30000, "Edit Custom Field modal is not displayed");
    VendorProfileOR.headerAddCustomItem.getText().then(text => {
      this.assertEquals(text.toString().trim(), VendorProfileData.labelEditCustomItem);
    });
    VendorProfileOR.inputQuestionLabel.getAttribute("value").then(placeholder => {
      this.assertEquals(placeholder.toString().trim(), inputQuestionLabel);
    });
  }

  addNewCustomProfileItem(questionLabel, answerFormatOption, applyToAllOption) {
    this.customQuestionLabel = questionLabel;
    this.answeFormateValue = answerFormatOption;
    this.yesNoValue = applyToAllOption;
    this.enterCustomQuestionLabel(this.customQuestionLabel);
    this.selectAnswerFormat(this.answeFormateValue);
    this.addSaveMultipleResponse(this.getRandomInteger(1, 5));
    this.checkYesNoOption(this.yesNoValue);
    this.clickOnSubmitCustomItem();

  }

  verifyAnswerFormatResponseValue(questionLabel, answeFormat) {
    let arr = this.responseDataArray.sort();
    console.log("Returned sorted string is : " + arr);
    if (answeFormat === "Dropdown Select") {
      VendorProfileOR.questionLableInEditMode.each((elements, index) => {
        console.log(elements + " : " + index);
        elements.getText().then(text => {
          if (text.toString().trim() === questionLabel) {
            var ele = browser.element(by.xpath("//tbody[@reorderable-after-reordering='QuestionsReOrdered'][" + (index + 1) + "]//td[3]//select[@value.bind='profileItem.answer']"));
            this.click.buttonClick(ele);
            browser.sleep(1000);
            this.select.getAllOptions(ele).each((options, indexOption) => {
              options.getText().then(text => {
                console.log("Text From Question Value dropdown: " + text);
                if (text !== "Select response") {
                  this.assertEquals(text.toString().trim(), arr[indexOption - 1]);
                }
              });
            });
          }
        });
      });
    }
    else if (answeFormat === "Multi-dropdown Select") {
      VendorProfileOR.questionLableInEditMode.each((element, index) => {
        element.getText().then(text => {
          if (text.toString().trim() === questionLabel) {
            browser.element(by.xpath("//tbody[@reorderable-after-reordering='QuestionsReOrdered'][" + (index + 1) + "]//td[3]//button")).click();
            browser.wait(until.visibilityOf(browser.element(by.xpath("//tbody[@reorderable-after-reordering='QuestionsReOrdered'][" + (index + 1) + "]//td[3]//button/following-sibling::div[@class='dropdown-menu open multipleSlection']"))), 20000);
            browser.element.all(by.xpath("//tbody[@reorderable-after-reordering='QuestionsReOrdered'][" + (index + 1) + "]//td[3]//button/following-sibling::div[@class='dropdown-menu open multipleSlection']//a/span[1]"))
              .each((textCount, indexNum) => {
                textCount.getText().then(text => {
                  this.assertEquals(text.toString().trim(), arr[indexNum]);
                });
              });
          }
        });
      });
    }
    arr = null;
  }

  verifyEditCustomItemModal() {
    this.clickOnEditCustomItem(this.customQuestionLabel);
    VendorProfileOR.selectAnswerFormat.isEnabled().then(isEnabled => {
      this.assertEquals(isEnabled, false);
    });
    VendorProfileOR.selectAnswerFormat.getAttribute("value").then(text => {
      this.assertEquals(text.toString().trim(), this.answeFormateValue);
    });
    this.clickOnButtonOptionCount();
    VendorProfileOR.inputResponse.each((element, index) => {
      element.getAttribute("value").then(placeholder => {
        this.assertEquals(placeholder.toString().trim(), this.responseDataArray[index]);
      });
    });
    this.responseDataArray = null;
    VendorProfileOR.inputResponse.each((element, index) => {
      element.isEnabled().then(isEnabled => {
        this.assertEquals(isEnabled, false);
        console.log("Response " + index + " Fields is not editable on Edit Custom Modal");
      });
    });
    //Update Label abd Response
    this.clickOnSaveResponse();
    this.updatedCustomQuestionLabel = this.customQuestionLabel + this.generateRandomText();
    this.enterCustomQuestionLabel(this.updatedCustomQuestionLabel);
    VendorProfileOR.inputQuestionLabel.sendKeys(protractor.Key.TAB);
    browser.sleep(2000);
    this.clickOnButtonOptionCount();
    this.addSaveMultipleResponse(this.getRandomInteger(1, 4));
    this.clickOnSubmitCustomItem();
    this.clickOnEditCustomItem(this.updatedCustomQuestionLabel);
    this.clickOnButtonOptionCount();
    VendorProfileOR.inputResponse.each((element, index) => {
      element.getAttribute("value").then(text => {
        this.assertEquals(text.toString().trim(), this.responseDataArray[index]);
      });
    });
    //Delete Response
    VendorProfileOR.inputResponse.then(items => {
      VendorProfileOR.deleteResponse.then(deleteItems => {
        let responseCount = items.length;
        let deleteIcon = deleteItems.length;
        this.assertEquals(responseCount, deleteIcon);
        for (let i = 0; i < responseCount; i++) {
          if (responseCount > 2) {
            this.click.buttonClick(deleteItems[i]);
            browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 20000);
            browser.sleep(1500);
            responseCount--;
            console.log("Response Count is : " + responseCount);
          }
          else if (responseCount === 2) {
            this.responseDataArray = null;
            items[i].getAttribute("value").then(text => {
              this.responseDataArray.push(text);
            });
          }
        }
      });
    });
    this.clickOnSaveResponse();
    this.clickOnSubmitCustomItem();
    this.responseDataArray = null;
  }
}