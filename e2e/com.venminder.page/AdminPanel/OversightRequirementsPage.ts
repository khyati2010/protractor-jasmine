import { Click } from '../../com.venminder.utilities/Click';
import { AdminPanelData, OversightRequirementData } from '../../com.venminder.testdata/TestData';
import { BasePage } from '../shared/BasePage';
import { protractor, browser } from 'protractor';
import { OversightRequirementsOR } from '../../com.venminder.page_object/AdminPanel/OversightRequirementsOR';
import { SelectDropDown } from '../../com.venminder.utilities/SelectDropDown';

const until = protractor.ExpectedConditions;

export class OversightRequirementsPage extends BasePage {
    click = new Click();
    select = new SelectDropDown();

    verfiyVendorItemsCoulmn() {
        let i = 0;
        OversightRequirementsOR.labelVendorItems.getText().then(text => {
            this.assertEquals(text.toString().trim(), "Vendor Items");
        });
        OversightRequirementsOR.labelVendorOversightItems.each((element) => {
            element.getText().then(text => {
                let data = text.toString().trim();
                if (data === AdminPanelData.vendor_oversight_requirement[i]) {
                    this.assertEquals(data, AdminPanelData.vendor_oversight_requirement[i]);
                    i++;
                }
            });
        });
    }

    verfiyProductItemsCoulmn() {
        let i = 0;
        OversightRequirementsOR.labelProductItems.getText().then(text => {
            this.assertEquals(text.toString().trim(), "Product Items");
        });
        OversightRequirementsOR.labelProductOversightItems.each((element) => {
            element.getText().then(text => {
                let data = text.toString().trim();
                if (data === AdminPanelData.product_oversight_requirement[i]) {
                    this.assertEquals(data, AdminPanelData.product_oversight_requirement[i]);
                    i++;
                }
            });
        });
    }

    clickOnAddOversightRequirementButton() {
        this.scrollpage.scrollToElement(OversightRequirementsOR.btnAddOversightItem);
        this.click.buttonClick(OversightRequirementsOR.btnAddOversightItem);
        browser.sleep(2000);
        browser.wait(until.visibilityOf(OversightRequirementsOR.headerAddOversightItem), 30000, "Add Oversight Requirement modal is not displayed");
    }

    clickOnInformationalBoxButton() {
        this.scrollpage.scrollToElement(OversightRequirementsOR.btnInformationalBox);
        this.click.buttonClick(OversightRequirementsOR.btnInformationalBox);
        browser.sleep(2000);
        browser.wait(until.visibilityOf(OversightRequirementsOR.headerInformalBox), 30000, "Welcome to Oversight Requirement management modal is not displayed");
    }

    verifyOversightSelectTypeDropDownOptions() {
        this.select.getAllOptions(OversightRequirementsOR.selectOversightType).each((options, index) => {
            options.getText().then(text => {
                if (text.toString().trim() != "Select Type") {
                    this.assertEquals(text.toString().trim(), OversightRequirementData.oversightSelectType[index - 1]);
                }
            });
        });
    }

    verifyInformationalBoxModal() {
        OversightRequirementsOR.headerInformalBox.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.headerInformalBoxModal);
        });
        OversightRequirementsOR.supportNumber.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.venminderSupportNumber);
        });
        OversightRequirementsOR.supportEmail.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.venminderSupportEmail);
        });
        OversightRequirementsOR.btnGotIt.isPresent().then(isDisplay => {
            this.assertEquals(isDisplay, false);
        });
        OversightRequirementsOR.inputDontShow.isPresent().then(isDisplay => {
            this.assertEquals(isDisplay, false);
        });
        OversightRequirementsOR.labelDontShow.isPresent().then(isDisplay => {
            this.assertEquals(isDisplay, false);
        });
        this.click.buttonClick(OversightRequirementsOR.btnClose);
        browser.wait(until.visibilityOf(OversightRequirementsOR.labelOversightRequirement), 20000);
    }

    verifyAddOversightRequirementModal() {
        OversightRequirementsOR.headerAddOversightItem.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.headerAddOversightModal);
        });
        OversightRequirementsOR.textVendorProduct.each((element, index) => {
            element.getText().then(text => {
                this.assertEquals(text.toString().trim(), AdminPanelData.selectLevel[index]);
            });
        });
        OversightRequirementsOR.checkVendorProduct.each((element, index) => {
            element.isSelected().then(isSelected => {
                this.assertEquals(isSelected, false);
            });
        });
        OversightRequirementsOR.inputOversightLabel.getAttribute("placeholder").then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.placeholderValue);
        });
        OversightRequirementsOR.characterCount.getText().then(text => {
            let data = text.toString().trim().split(":");
            this.assertEquals(data[1].toString().trim(), "50");
        });
        this.verifyOversightSelectTypeDropDownOptions();
        OversightRequirementsOR.btnSubmitOversightItem.isEnabled().then(isEnable => {
            this.assertEquals(isEnable, false);
        });
        OversightRequirementsOR.btnCancelOversightItem.isEnabled().then(isEnable => {
            this.assertEquals(isEnable, true);
        });
    }

    addOversightRequirementItems(vendorProductOptions: string, questionLabel: string, selectOversightType: string | number) {
        OversightRequirementsOR.textVendorProduct.each((element, index) => {
            element.getText().then(text => {
                if (text.toString().trim() === vendorProductOptions) {
                    OversightRequirementsOR.checkVendorProduct.then(check => {
                        this.click.buttonClick(check[index]);
                        console.log("Checked Select Level Option as : " + text);
                    });
                }
            });
        });
        this.textbox.setTextValue(OversightRequirementsOR.inputOversightLabel, questionLabel);
        console.log("Entered Custom Oversight Question Label : " + questionLabel);
        if (typeof selectOversightType === "string")
            this.select.selectElementByText(OversightRequirementsOR.selectOversightType, selectOversightType);
        if (typeof selectOversightType === "number")
            this.select.selectElementByIndex(OversightRequirementsOR.selectOversightType, selectOversightType);
        console.log("Select Oversight Requirement Type : " + selectOversightType);
        browser.sleep(1000);
    }

    clickOnSubmitOversightItem() {
        OversightRequirementsOR.btnSubmitOversightItem.isEnabled().then(isEnabled => {
            if (isEnabled) {
                this.assertEquals(isEnabled, true);
                this.click.buttonClick(OversightRequirementsOR.btnSubmitOversightItem);
                browser.wait(until.visibilityOf(OversightRequirementsOR.labelOversightRequirement), 20000);
            }
            else {
                this.assertEquals(isEnabled, false);
                console.log("Submit button is disabled, Please provide Select Level, Question Label & Select Type fields")
            }
        });
    }

    clickOnCancelOversightItem() {
        OversightRequirementsOR.btnCancelOversightItem.isEnabled().then(isEnabled => {
            if (isEnabled)
                this.click.buttonClick(OversightRequirementsOR.btnCancelOversightItem);
        });
        browser.wait(until.visibilityOf(OversightRequirementsOR.labelOversightRequirement), 20000);
    }

    verifyAddedCustoumItemOnAdminPanelOversightTab(questionLabel: string, selectLevel: string) {
        if (selectLevel === "Vendor") {
            OversightRequirementsOR.labelVendorOversightItems.each((element) => {
                element.getText().then(text => {
                    let data = text.toString().trim();
                    if (data === questionLabel) {
                        this.assertEquals(data, questionLabel);
                    }
                });
            });
        }
        if (selectLevel === "Product") {
            OversightRequirementsOR.labelProductOversightItems.each((element) => {
                element.getText().then(text => {
                    let data = text.toString().trim();
                    if (data === questionLabel) {
                        this.assertEquals(data, questionLabel);
                    }
                });
            });
        }
    }

    clickOnEditDeleteOversightRequirementButton(questionLabel: string, selectLevel: string, actions: string) {
        if (selectLevel === "Vendor") {
            OversightRequirementsOR.labelVendorOversightItems.each((element, index) => {
                element.getText().then(text => {
                    let data = text.toString().trim();
                    if (data === questionLabel) {
                        OversightRequirementsOR.btnVendorActions.then(action => {
                            this.click.buttonClick(action[index]);
                            browser.sleep(1000);
                            if (actions === "Edit") {
                                OversightRequirementsOR.btnVendorEdit.then(edit => {
                                    this.click.buttonClick(edit[index]);
                                });
                            } else if (actions === "Delete") {
                                OversightRequirementsOR.btnVendorDelete.then(deletes => {
                                    this.click.buttonClick(deletes[index]);
                                });
                            }
                        });
                    }
                });
            });
        }
        if (selectLevel === "Product") {
            OversightRequirementsOR.labelProductOversightItems.each((element, index) => {
                element.getText().then(text => {
                    let data = text.toString().trim();
                    if (data === questionLabel) {
                        OversightRequirementsOR.btnProductActions.then(action => {
                            this.click.buttonClick(action[index]);
                            browser.sleep(1000);
                            if (actions === "Edit") {
                                OversightRequirementsOR.btnProductEdit.then(edit => {
                                    this.click.buttonClick(edit[index]);
                                });
                            } else if (actions === "Delete") {
                                OversightRequirementsOR.btnProductDelete.then(deletes => {
                                    this.click.buttonClick(deletes[index]);
                                });
                            }
                        });
                    }
                });
            });
        }
        browser.sleep(2000);
        if (actions === "Edit")
            browser.wait(until.visibilityOf(OversightRequirementsOR.headerAddOversightItem), 30000, "Edit Oversight Requirement modal is not displayed");
        else if (actions === "Delete")
            browser.wait(until.visibilityOf(OversightRequirementsOR.headerDeleteOversightItem), 30000, "Confirm Delete modal is not displayed");
    }

    verifyEditOversightRequirementModal(selectLevel: string, questionLabel: string, selectOversightType: string) {
        OversightRequirementsOR.vendorProductLevel.getText().then(text => {
            if (selectLevel === "Vendor") {
                this.assertEquals(text.toString().trim(), AdminPanelData.oversightLevel[0]);
            }
            if (selectLevel === "Product") {
                this.assertEquals(text.toString().trim(), AdminPanelData.oversightLevel[1]);
            }
        });
        OversightRequirementsOR.headerAddOversightItem.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.headerEditOversightModal);
        });
        OversightRequirementsOR.inputOversightLabel.getAttribute("value").then(attribute => {
            this.assertEquals(attribute.toString().trim(), questionLabel);
        });
        // OversightRequirementsOR.selectOversightType.getAttribute("value").then(selectType => {
        //     this.assertEquals(selectType.toString().trim(), selectOversightType);
        // });
        OversightRequirementsOR.btnSubmitOversightItem.isDisplayed().then(isDisplay => {
            if (isDisplay) {
                this.assertEquals(isDisplay, true);
                OversightRequirementsOR.btnSubmitOversightItem.getText().then(text => {
                    this.assertEquals(text.toString().trim(), AdminPanelData.btnSubmit);
                });
            }
        });
        OversightRequirementsOR.btnCancelOversightItem.isDisplayed().then(isDisplay => {
            if (isDisplay) {
                this.assertEquals(isDisplay, true);
                OversightRequirementsOR.btnCancelOversightItem.getText().then(text => {
                    this.assertEquals(text.toString().trim(), AdminPanelData.btnCancel);
                });
            }
        });
    }

    updateOversightRequirementItems(updateQuestionLabel: string, updateSelectOversightType: string | number) {
        this.textbox.setTextValue(OversightRequirementsOR.inputOversightLabel, updateQuestionLabel);
        console.log("Entered Update Custom Oversight Question Label : " + updateQuestionLabel);
        if (typeof updateSelectOversightType === "string")
            this.select.selectElementByText(OversightRequirementsOR.selectOversightType, updateSelectOversightType);
        if (typeof updateSelectOversightType === "number")
            this.select.selectElementByIndex(OversightRequirementsOR.selectOversightType, updateSelectOversightType);
        console.log("Select Update Oversight Requirement Type : " + updateSelectOversightType);
        browser.sleep(1000);
    }

    verifyOversightQuestionLabelInputMaxLenght() {
        this.textbox.setTextValue(OversightRequirementsOR.inputOversightLabel, AdminPanelData.moreThan50Characters);
        this.click.buttonClick(OversightRequirementsOR.selectOversightType);
        OversightRequirementsOR.inputOversightLabel.getAttribute("value").then(attribute => {
            this.assertEquals(attribute.toString().trim().length, 50);
        });
    }

    clickOnConfirmDeleteOversightItem() {
        OversightRequirementsOR.btnConfirm.isEnabled().then(isEnabled => {
            if (isEnabled) {
                this.click.buttonClick(OversightRequirementsOR.btnConfirm);
                OversightRequirementsOR.headerDeleteOversightItem.isPresent().then(isPresent => {
                    this.assertEquals(isPresent, false);
                });
                browser.wait(until.visibilityOf(OversightRequirementsOR.labelOversightRequirement), 20000);
            }
        });
    }

    clickOnCancelDeleteOversightItem() {
        OversightRequirementsOR.btnCancel.isEnabled().then(isEnabled => {
            if (isEnabled) {
                this.click.buttonClick(OversightRequirementsOR.btnCancel);
                OversightRequirementsOR.headerDeleteOversightItem.isPresent().then(isPresent => {
                    this.assertEquals(isPresent, false);
                });
                browser.wait(until.visibilityOf(OversightRequirementsOR.labelOversightRequirement), 20000);
            }
        });
    }

    verfiyDeleteOversightItemModal(questionLabel: string) {
        browser.wait(until.visibilityOf(OversightRequirementsOR.headerDeleteOversightItem), 30000, "Confirm Delete modal is not displayed");
        OversightRequirementsOR.headerDeleteOversightItem.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.headerDeleteOversightModal);
        });
        OversightRequirementsOR.oversightName.getText().then(text => {
            this.assertEquals(text.toString().trim(), questionLabel);
        });
        OversightRequirementsOR.btnConfirm.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.btnConfirm);
        });
        OversightRequirementsOR.btnCancel.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.btnCancel);
        });
    }
}

