import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";
import { browser, protractor } from "protractor";
import { vendorRequestData } from "../../com.venminder.testdata/TestData";
import { OnboardingVendorRequestViewTileOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestViewTileOR";
import { LoginPage } from "../shared/LoginPage";

import { Wait } from "../../com.venminder.utilities/Wait"
const wait = new Wait();
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const dataVendorRequest = new vendorRequestData;

let exemptList;

export class vendorRequest extends LoginPage {

    public getExemptList(): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            OnboardingVendorRequestOR.exemptList.getText().then((ExemptList) => {
                const getExemptSize = ExemptList[0].split(":");
                for (let i = 0; i < getExemptSize.length; i++) {
                    exemptList = getExemptSize[i].toString();
                }
                resolve(exemptList);
            });
        });
        return promise;
    };

    clickNewRequestTile() {
        OnboardingVendorRequestOR.newRequestTile.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.bannerTitle), 10000, 'banner title is not displayed');
            expect(OnboardingVendorRequestOR.bannerTitle.isDisplayed()).to.eventually.equal(true);
        });
        wait.waitCondition(5000)
    }

    clickProductCategoryExempt(ProductName: String) {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.dropdownProductCategory), 10000, 'product category is not clickable')
        OnboardingVendorRequestOR.dropdownProductCategory.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.dropdownProductCategoryValueExempt(ProductName)), 9000, 'DropDown opens');
            expect(OnboardingVendorRequestOR.dropdownProductCategoryValueExempt(ProductName).isDisplayed()).to.eventually.equal(true);
            OnboardingVendorRequestOR.dropdownProductCategoryValueExempt(ProductName).click();
        });
    }

    clickReasonForRequest() {
        browser.sleep(500)
        OnboardingVendorRequestOR.reasonForRequest.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.requestBidNewProduct), 2000, 'DropDown values');
            expect(OnboardingVendorRequestOR.requestBidNewProduct.isDisplayed()).to.eventually.equal(true);
            OnboardingVendorRequestOR.requestBidNewProduct.click();
        });
    }

    clickReasonForRequestExistingProduct() {
        browser.wait(until.invisibilityOf(OnboardingVendorRequestOR.loader), 10000, 'reason for request is not clickable')
        OnboardingVendorRequestOR.reasonForRequest.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.requestBidExistingProduct), 2000, 'Drop Down values');
            OnboardingVendorRequestOR.requestBidExistingProduct.isDisplayed().then(() => {
                OnboardingVendorRequestOR.requestBidExistingProduct.click()
            });
        });
    }

    enterProductTypeValue(value: string) {
        OnboardingVendorRequestOR.enterProductType.sendKeys(value).then(() => {
            expect(OnboardingVendorRequestOR.productTypeSelectedValue(value).isDisplayed()).to.eventually.equal(true);
        });
    }

    clickNextButtonExistingProduct() {
        OnboardingVendorRequestOR.nextBtn.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.textRequestVendorPage), 10000, 'Verify Text for Incumbent Vendor');
            expect(OnboardingVendorRequestOR.textRequestVendorPage.isDisplayed()).to.eventually.equal(true);
        });
    }

    getCriticalQuestionsList(item: any) {
        expect(OnboardingVendorRequestOR.criticalQuestions.isPresent()).to.eventually.equal(true);
        OnboardingVendorRequestOR.criticalQuestions.getText().then((text) => {
            let questionCount = text[0].split("\n");
            for (var i = 0; i < questionCount.length; i++) {
                expect(questionCount[i].trim()).to.equal(item[i]);
            }
        });
    }

    clickCancelBtnVendorRequest() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.cancelBtnVendorRequest), 50000, 'Cancel Btn Vendor Request');
        OnboardingVendorRequestOR.cancelBtnVendorRequest.click();
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewTileOR.clickViewTile), 10000, 'View Tile');
    }

    createVendorRequestForNewProduct(productType: string, currentVendorName: string, vendorName: string, productTypeValue: string, productCategory: string, successMessage: any) {
        this.clickReasonForRequest();
        this.clickProductCategoryExempt(dataVendorRequest.vendorRequest[2]);
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.radioBtnYes), 3000, 'Select Yes bidding process');
        OnboardingVendorRequestOR.radioBtnYes.click().then(() => {
            expect(OnboardingVendorRequestOR.currentVendorNameDropdown.isDisplayed()).to.eventually.equal(true);
        });
        OnboardingVendorRequestOR.enterProductType.sendKeys(productType).then(() => {
            expect(OnboardingVendorRequestOR.productTypeSelectedValue(productType).isDisplayed()).to.eventually.equal(true);
        });
        OnboardingVendorRequestOR.currentVendorNameDropdown.click().then(() => {
            OnboardingVendorRequestOR.currentVendorName(currentVendorName).click().then(() => {
                expect(OnboardingVendorRequestOR.currentVendorName(currentVendorName).isDisplayed()).to.eventually.equal(true);
            });
        });
        OnboardingVendorRequestOR.nextBtn.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.textRequestVendorPage), 4000, 'Verify Text Is the current vendor included');
            OnboardingVendorRequestOR.textRequestVendorPage.isDisplayed().then(() => {
                expect(OnboardingVendorRequestOR.textRequestVendorPageWithYesValueSelected.isDisplayed()).to.eventually.equal(true);
            });
        });
        expect(OnboardingVendorRequestOR.productType.getAttribute('value')).to.eventually.equal(productTypeValue);
        expect(OnboardingVendorRequestOR.productCategory.getAttribute('value')).to.eventually.equal(productCategory);
        OnboardingVendorRequestOR.productNameField(0).sendKeys(this.generateRandomText());
        this.fillFormFields(0);
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.submitVendorRequest), 8000, 'submit is clickable');
        OnboardingVendorRequestOR.submitVendorRequest.isEnabled().then(() => {
            OnboardingVendorRequestOR.submitVendorRequest.click();
        });
        OnboardingVendorRequestOR.successDialogBox.isDisplayed().then(() => {
            expect(OnboardingVendorRequestOR.successDialogBox.getText()).to.eventually.equal(successMessage);
        });
        OnboardingVendorRequestOR.greatBtn.isDisplayed().then(() => {
            OnboardingVendorRequestOR.greatBtn.click().then(() => {
                browser.wait(until.visibilityOf(OnboardingVendorRequestOR.bannerTitle), 9000, 'Vendor-Onboarding Banner');
                expect(OnboardingVendorRequestOR.bannerTitle.isDisplayed()).to.eventually.equal(true);
            });
        });
    }

    fillFormFields(vendorTab) {
        OnboardingVendorRequestOR.firstNameField(vendorTab).sendKeys(this.generateRandomText());
        OnboardingVendorRequestOR.lastNameField(vendorTab).sendKeys(this.generateRandomText());
        OnboardingVendorRequestOR.emailFieldName(vendorTab).sendKeys(this.generateRandomText() + "@test.com")
        OnboardingVendorRequestOR.areaCode(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.prefixCode(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.suffixCode(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.extField(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.type(vendorTab).click();
        OnboardingVendorRequestOR.descriptionField(vendorTab).sendKeys(this.generateRandomText());
        OnboardingVendorRequestOR.annualCostField(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.annualVariableCostField(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.annualFixedCostField(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.totalSpendField(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.oneTimeCostField(vendorTab).sendKeys(this.getRandomInteger());
        OnboardingVendorRequestOR.termField(vendorTab).sendKeys(this.generateRandomText());

        OnboardingVendorRequestOR.allQuestions(vendorTab).count().then((count) => {
            OnboardingVendorRequestOR.allQuestions(vendorTab).isEnabled().then(() => {
                for (var question = 0; question < count; question++) {
                    OnboardingVendorRequestOR.allQuestions(vendorTab).get(question).click();
                };
            });
        });
    }

    createIncumbntVendorRequest(product: string, vendorName) {
        this.clickReasonForRequestExistingProduct();
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.radioBtnYes), 3000, 'Select Yes Bidding Process');
        OnboardingVendorRequestOR.radioBtnYes.click().then(() => {
            expect(OnboardingVendorRequestOR.currentVendorNameDropdown.isDisplayed()).to.eventually.equal(true);
        });
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.incumbentVendorName), 10000, 'Incumbent Product Name dropdown');
        OnboardingVendorRequestOR.incumbentVendorName.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.incumbentVendorNameDropDown), 1000, 'Incumbent Vendor Name dropdown');
            expect(OnboardingVendorRequestOR.incumbentVendorNameDropDown.isDisplayed()).to.eventually.equal(true);
            OnboardingVendorRequestOR.incumbentVendorNameDropDown.click();
        });
        browser.sleep(100)
        browser.wait(until.invisibilityOf(OnboardingVendorRequestOR.loader), 5000, 'Loader is still visible');
        OnboardingVendorRequestOR.incumbentProductName.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.incumbentProductNameDropdown), 1000, 'dropdown for incumbent is displayed');
            expect(OnboardingVendorRequestOR.incumbentProductNameDropdown.isDisplayed()).to.eventually.equal(true);
            OnboardingVendorRequestOR.incumbentProductNameDropdown.click().then(() => {
                browser.wait(until.visibilityOf(OnboardingVendorRequestOR.incumbentText), 10000, 'incumbent name is displayed');
                expect(OnboardingVendorRequestOR.incumbentText.isDisplayed()).to.eventually.equal(true);
            });
        });
        this.enterProductTypeValue(product);
        this.clickProductCategoryExempt(dataVendorRequest.vendorRequest[2]);
        OnboardingVendorRequestOR.nextBtn.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.firstNameField(0)), 10000, 'Fields are not displayed')
            expect(OnboardingVendorRequestOR.firstNameField(0).isDisplayed()).to.eventually.equal(true);
        });
        OnboardingVendorRequestOR.vendorSectionInput.count().then((count1) => {
            for (var i = 1; i < count1; i++) {
                OnboardingVendorRequestOR.vendorSectionInput.get(i).sendKeys(this.generateRandomText())
            }
        })
        browser.sleep(300)
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.inlineWarningMsg), 10000, 'Inline warning is displayed');
        OnboardingVendorRequestOR.inlineWarningMsg.isDisplayed().then(() => {
            OnboardingVendorRequestOR.inlineWarningMsg.getText().then((text) => {
                if (text == dataVendorRequest.vendorRequestWarnings[0]) {
                    OnboardingVendorRequestOR.inlineWarningMsg.click().then(() => {
                        OnboardingVendorRequestOR.duplicateRequestModal.isDisplayed().then(() => {
                            OnboardingVendorRequestOR.duplicateRequestModalCloseBtn.click();
                        })
                    });
                } else {
                    if (text = dataVendorRequest.vendorRequestWarnings[1]) {
                        OnboardingVendorRequestOR.inlineWarningMsg.click();
                        OnboardingVendorRequestOR.duplicateVendorProductModal.isDisplayed().then(() => {
                            OnboardingVendorRequestOR.duplicateVendorProductCloseBtn.click();
                            this.fillFormFields(0);
                        });
                    }
                }
            });
        });
        this.AddNewVendorInRequestTab(vendorName, 1);
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.submitVendorRequest), 5000, 'Submit button is clickable')
        OnboardingVendorRequestOR.submitVendorRequest.isEnabled().then(() => {
            OnboardingVendorRequestOR.submitVendorRequest.click();
        });
        OnboardingVendorRequestOR.greatBtn.isDisplayed().then(() => {
            OnboardingVendorRequestOR.greatBtn.click().then(() => {
                browser.wait(until.visibilityOf(OnboardingVendorRequestOR.bannerTitle), 9000, 'Vendor-Onboarding Banner');
                expect(OnboardingVendorRequestOR.bannerTitle.isDisplayed()).to.eventually.equal(true);
            });
        });
    }

    AddNewVendorInRequestTab(vendorName: string, newVendorTab) {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.verifyAddVendorBtn), 4000, 'Verify Add Vendor Button is clickable');
        OnboardingVendorRequestOR.verifyAddVendorBtn.click().then(() => {
            OnboardingVendorRequestOR.VendorNameInput(1).sendKeys(vendorName);
            OnboardingVendorRequestOR.VendorNameInput(1).sendKeys(protractor.Key.TAB);
            OnboardingVendorRequestOR.productNameField(1).sendKeys(this.generateRandomText());
            this.fillFormFields(newVendorTab);
        });
    }

}