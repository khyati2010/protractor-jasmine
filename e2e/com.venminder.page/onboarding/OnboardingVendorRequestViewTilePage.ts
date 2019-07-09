import { OnboardingVendorRequestViewTileOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestViewTileOR";
import { browser, protractor } from "protractor";
import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";
import { LoginPage } from "../shared/LoginPage";
import { OnboardingVendorRequestViewDetailsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestDetailTabOR";
import { Wait } from "../../com.venminder.utilities/Wait"
const wait = new Wait();
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
export class vendorRequestViewTile extends LoginPage {

    enterSiteURL() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.siteURL), 2000, 'Enter Site URL field');
        OnboardingVendorRequestOR.siteURL.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.siteURL.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAddress() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.address), 2000, 'Enter Address field');
        OnboardingVendorRequestOR.address.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.address.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterAddress2() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.address2), 2000, 'Enter Address2 field');
        OnboardingVendorRequestOR.address2.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestOR.address2.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterZipCode2() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.zipCode2), 2000, 'Enter ZipCode2 field');
        OnboardingVendorRequestOR.zipCode2.sendKeys(this.getRandomInteger()).then(() => {
            OnboardingVendorRequestOR.zipCode2.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    enterProductName() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.productNameField(0)), 2000, 'Enter Product Name');
        OnboardingVendorRequestOR.productNameField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.productNameField(0).sendKeys(this.generateRandomText())
        })
    }

    enterFirstName() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.firstNameField(0)), 2000, 'Enter First Name');
        OnboardingVendorRequestOR.firstNameField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.firstNameField(0).sendKeys(this.generateRandomText());
        })
    }

    enterLastName() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.lastNameField(0)), 2000, 'Enter Last Name');
        OnboardingVendorRequestOR.lastNameField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.lastNameField(0).sendKeys(this.generateRandomText());
        })
    }

    enterEmailAddress() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.emailFieldName(0)), 2000, 'Enter Email Address');
        OnboardingVendorRequestOR.emailFieldName(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.emailFieldName(0).sendKeys(this.generateRandomText() + "@test.com")
        })
    }

    enterAreaCode() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.areaCode(0)), 2000, 'Enter Area Code');
        OnboardingVendorRequestOR.areaCode(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.areaCode(0).sendKeys(this.getRandomInteger());
        })
    }

    enterPrefixCode() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.prefixCode(0)), 2000, 'Enter Prefix Code');
        OnboardingVendorRequestOR.prefixCode(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.prefixCode(0).sendKeys(this.getRandomInteger());
        })
    }

    enterSuffixCode() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.suffixCode(0)), 2000, 'Enter Suffix Code');
        OnboardingVendorRequestOR.suffixCode(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.suffixCode(0).sendKeys(this.getRandomInteger());
        })
    }

    enterExtField() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.extField(0)), 2000, 'Enter EXT field Value');
        OnboardingVendorRequestOR.extField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.extField(0).sendKeys(this.getRandomInteger());
        })
    }

    selectType() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.type(0)), 2000, 'Select Type');
        OnboardingVendorRequestOR.type(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.type(0).click();
        })
    }

    enterDescription() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.descriptionField(0)), 2000, 'Enter Description');
        OnboardingVendorRequestOR.descriptionField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.descriptionField(0).sendKeys(this.generateRandomText());
        })
    }

    enterAnnualCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.annualCostField(0)), 2000, 'Enter Annual Cost');
        OnboardingVendorRequestOR.annualCostField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.annualCostField(0).sendKeys(this.getRandomInteger());
        })
    }

    enterAnnualVariableCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.annualVariableCostField(0)), 2000, 'Enter Annual Variable Cost');
        OnboardingVendorRequestOR.annualVariableCostField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.annualVariableCostField(0).sendKeys(this.getRandomInteger());
        })
    }

    enterAnnualFixedCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.annualFixedCostField(0)), 2000, 'Enter Annual Fixed  Cost');
        OnboardingVendorRequestOR.annualFixedCostField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.annualFixedCostField(0).sendKeys(this.getRandomInteger());
        })
    }

    enterTotalSpend() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.totalSpendField(0)), 2000, 'Enter Total Spend');
        OnboardingVendorRequestOR.totalSpendField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.totalSpendField(0).sendKeys(this.getRandomInteger());
        })
    }

    enterOneTimeCost() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.oneTimeCostField(0)), 2000, 'Enter One Time Cost');
        OnboardingVendorRequestOR.oneTimeCostField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.oneTimeCostField(0).sendKeys(this.getRandomInteger());
        })
    }

    enterTerm() {
        OnboardingVendorRequestOR.termField(0).isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestOR.termField(0).sendKeys(this.generateRandomText());
        })
    }

    allQuestions() {
        OnboardingVendorRequestOR.allQuestions(0).count().then((count) => {
            OnboardingVendorRequestOR.allQuestions(0).isEnabled().then(() => {
                for (var i = 0; i < count; i++) {
                    OnboardingVendorRequestOR.allQuestions(0).get(i).click();
                }
                wait.waitCondition(3000);
            })
        })
    }

    submitForm() {
        OnboardingVendorRequestOR.submitVendorRequest.isEnabled().then((displayed) => {
            OnboardingVendorRequestOR.submitVendorRequest.click();
        })
    }

    successBoxValidation(Message: any) {
        OnboardingVendorRequestOR.successDialogBox.isDisplayed().then(() => {
            OnboardingVendorRequestOR.successDialogBox.getText().then((displayed) => {
                expect(displayed).to.equal(Message);
            })
        })
    }

    clickGreatBtn() {
        OnboardingVendorRequestOR.greatBtn.isDisplayed().then(() => {
            OnboardingVendorRequestOR.greatBtn.click().then(() => {
                browser.wait(until.visibilityOf(OnboardingVendorRequestOR.bannerTitle), 9000, 'Vendor-Onboarding Banner');
                OnboardingVendorRequestOR.bannerTitle.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                })
            })
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.bannerTitle), 9000, 'Vendor-Onboarding Banner');
            wait.waitCondition(3000);
        })
    }

    clickViewTile() {
        OnboardingVendorRequestViewTileOR.clickViewTile.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewTileOR.clickViewTile.click().then(() => {
                OnboardingVendorRequestViewTileOR.searchRequest.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                })
            })
        })
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewDetailsTabOR.dateSortBtn), 90000, 'Sort date');
        wait.waitCondition(3000);
    }

    enterSearchRequestAsperVendorSelected(vendor: string) {
        wait.waitCondition(2000);
        OnboardingVendorRequestViewTileOR.searchRequest.sendKeys(vendor).then(() => {
            browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
                wait.waitCondition(3000);
                OnboardingVendorRequestViewTileOR.downloadCurrentView.isPresent().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                })
            });
        })
    }

    getGridValues(value: string) {
        OnboardingVendorRequestViewTileOR.viewGrid.getText().then((text) => {
            let values = text[0].split("\n", 2);
            expect(values[1].includes(value)).to.equal(true);
        })
    }

    selectAssignManager() {
        OnboardingVendorRequestOR.assignManager.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestOR.assignManager.click().then(() => {
                OnboardingVendorRequestOR.requestRecievedAssignManagerSubmitBtn.click().then(() => {
                })
            });
        })
    }

    validateMissingInformation() {
        OnboardingVendorRequestOR.missingInformation.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
    }

    assignUser() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestOR.actionBtn), 9000, 'Action Btn');
        OnboardingVendorRequestOR.actionBtn.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestOR.assignBtn), 9000, 'Assign Btn');
            OnboardingVendorRequestOR.assignBtn.click().then(() => {
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.selectUser), 90000, 'Select User');
                OnboardingVendorRequestOR.selectUser.click().then(() => {
                    browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.submitBtn), 12000, 'submit Btn');
                    OnboardingVendorRequestOR.submitBtn.click();
                    wait.waitCondition(4000);
                });
            });
        });
    }

    validateVMOManager() {
        expect(OnboardingVendorRequestOR.assignedVMOManager.isPresent()).to.eventually.equal(true);
    }

    searchPendingVendorRequest() {
        OnboardingVendorRequestOR.pendingVendorRequest.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        });
    }

    filterContainerView() {
        OnboardingVendorRequestViewTileOR.vendorRequestFilterContainer.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        })
    }

    selectAssignmentInFilter() {
        OnboardingVendorRequestViewTileOR.filterAssignmentDropdownBtn.click().then(() => {
            OnboardingVendorRequestViewTileOR.filterAssignentsUser.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
            OnboardingVendorRequestViewTileOR.filterSelectAssignee.click().then(() => {
                OnboardingVendorRequestViewTileOR.applyFilterBtn.click();
            })
        })
    }

    selectStatus() {
        browser.wait(until.invisibilityOf(OnboardingVendorRequestViewTileOR.loaderOnAction), 30000, 'status option is not clickable')
        OnboardingVendorRequestViewTileOR.filterStatusDropdownBtn.click().then(() => {
            OnboardingVendorRequestViewTileOR.filterStatusDropdown.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
            OnboardingVendorRequestViewTileOR.filterStatusOption.click();
            OnboardingVendorRequestViewTileOR.applyFilterBtn.click();
        })
    }

    selectRequestDateRange() {
        browser.wait(until.invisibilityOf(OnboardingVendorRequestViewTileOR.loaderOnAction), 10000, 'status option is not clickable')
        OnboardingVendorRequestViewTileOR.filterStartDateTime.click();
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewTileOR.datePickerContainer), 10000, "datepicker is displayed")
        OnboardingVendorRequestViewTileOR.filterCurrentDate.click();
        OnboardingVendorRequestViewTileOR.filterEndDateTime.click();
    }

    selectDeadlineDateRange() {
        OnboardingVendorRequestViewTileOR.deadlineStartDateTime.click();
        OnboardingVendorRequestViewTileOR.deadlineEndDateTime.click();
        OnboardingVendorRequestViewTileOR.applyFilterBtn.click();
    }

    validateDeclinedStatus() {
        OnboardingVendorRequestViewTileOR.declinedList.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        })
    }

    validatePendingStatus() {
        OnboardingVendorRequestViewTileOR.pendingList.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        })
    }

    reActivateVendorRequest() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.actionBtn), 90000, 'Action Btn');
        OnboardingVendorRequestOR.actionBtn.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.reActivateBtn), 90000, 'reActivate Btn');
            OnboardingVendorRequestOR.reActivateBtn.click().then(() => {
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.reActivateSubmitBtn), 9000, 'reActivate Submit Btn');
                OnboardingVendorRequestOR.reActivateSubmitBtn.click();
            })
        })
        wait.waitCondition(4000);
    }
}
