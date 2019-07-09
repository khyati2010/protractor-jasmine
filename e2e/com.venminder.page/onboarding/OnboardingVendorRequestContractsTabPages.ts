import { OnboardingVendorRequestViewContractsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestContractsTabOR";
import { browser, protractor, by } from "protractor";
import { OnboardingVendorRequestViewRelationshipsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestRelationshipsTabOR";
import { OnboardingVendorRequestViewDetailsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestDetailTabOR";
import { Wait } from "../../com.venminder.utilities/Wait";
import path = require("path");
const wait = new Wait();
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const assert = chai.assert;

export class OnboardingVendorRequestContractsTabPage {

    clickContractsTab() {
        OnboardingVendorRequestViewContractsTabOR.contractsTab.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewContractsTabOR.contractsTab.click();
            browser.wait(until.visibilityOf(OnboardingVendorRequestViewRelationshipsTabOR.statusBarContainer), 90000, "Validate Status Bar Container is displayed ");
            OnboardingVendorRequestViewRelationshipsTabOR.statusBarContainer.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
            })
        })
        wait.waitCondition(5000);
    }

    assignRequestSectionTab() {
        OnboardingVendorRequestViewContractsTabOR.contractsTab.click();
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.editLink), 90000, "edit link");
        OnboardingVendorRequestViewContractsTabOR.editLink.click();
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.editModal), 90000, "Verify Edit Modal Title");
        OnboardingVendorRequestViewContractsTabOR.relationshipAssignment.click();
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.saveBtn), 90000, "Save Btn");
        OnboardingVendorRequestViewContractsTabOR.saveBtn.click();
    }


    clickEditLink() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.editLink), 90000, "edit link");
        OnboardingVendorRequestViewContractsTabOR.editLink.click();
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.editModal), 90000, "Verify Edit Modal Title");
    }

    editModal() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.editModal), 90000, "Verify Edit Modal Title");
        OnboardingVendorRequestViewContractsTabOR.relationshipAssignment.click();
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.saveBtn), 90000, "Save Btn");
        wait.waitCondition(4000);
    }

    clickSaveBtn() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.saveBtn), 90000, "Save Btn");
        OnboardingVendorRequestViewContractsTabOR.saveBtn.click();
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewRelationshipsTabOR.statusBarContainer), 90000, "Validate Status Bar Container is displayed ");
        wait.waitCondition(5000);
    }

    verifyAssignmentName(value: string) {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.assignmentName), 90000, "Validate Status Bar Container is displayed ");
        OnboardingVendorRequestViewContractsTabOR.assignmentName.getText().then((getName) => {
            expect(getName).to.equal(value);
        })
        wait.waitCondition(4000);
    }

    notRequiredFunctionality(AssignmentValue: String, StatusValue: String) {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.markAsCompleteBtn), 90000, "Mark As Complete functionality");
        OnboardingVendorRequestViewContractsTabOR.markAsCompleteBtn.isEnabled().then((value) => {
            if (value == true) {
                OnboardingVendorRequestViewContractsTabOR.notRequiredCheckBox.click();
                wait.waitCondition(4000);
                OnboardingVendorRequestViewContractsTabOR.markAsCompleteBtn.isEnabled().then((value) => {
                    expect(value).to.equal(false);
                    OnboardingVendorRequestViewContractsTabOR.assignmentName.getText().then((getAssignmentValue) => {
                        expect(getAssignmentValue).to.equal(AssignmentValue);
                        OnboardingVendorRequestViewContractsTabOR.statusField.getText().then((getStatusValue) => {
                            expect(getStatusValue).to.equal(StatusValue);
                        })
                    })
                })
            }
            else {
                OnboardingVendorRequestViewContractsTabOR.assignmentName.getText().then((getAssignmentValue) => {
                    expect(getAssignmentValue).to.equal(AssignmentValue);
                    OnboardingVendorRequestViewContractsTabOR.statusField.getText().then((getStatusValue) => {
                        expect(getStatusValue).to.equal(StatusValue);
                    })
                })
            }
        })
    }

    markAsComplete() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.markAsCompleteBtn), 90000, "Mark As Complete functionality");
        OnboardingVendorRequestViewContractsTabOR.markAsCompleteBtn.isEnabled().then((value) => {
            expect(value).to.equal(true);
            OnboardingVendorRequestViewContractsTabOR.markAsCompleteBtn.click();
            browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.markAsCompleteTitle), 90000, "Mark As Complete Title");
            OnboardingVendorRequestViewContractsTabOR.markAsCompleteCheckBox.click();
            OnboardingVendorRequestViewContractsTabOR.submitBtn.isEnabled().then((enabled) => {
                expect(enabled).to.equal(true);
                OnboardingVendorRequestViewContractsTabOR.submitBtn.click();
                browser.wait(until.visibilityOf(OnboardingVendorRequestViewRelationshipsTabOR.statusBarContainer), 100000, "Validate Status Bar Container is displayed ");
                wait.waitCondition(4000);
            })
        });
    }

    verifyAssignmentAndStatus() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewRelationshipsTabOR.statusBarContainer), 100000, "Validate Status Bar Container is displayed ");
        OnboardingVendorRequestViewContractsTabOR.assignmentName.getText().then((getAssignmentValue) => {
            getAssignmentValue.toString().includes("Testy Tester");
            OnboardingVendorRequestViewContractsTabOR.statusField.getText().then((getStatusValue) => {
                getStatusValue.toString().includes("Testy Tester");
            })
        })
    }

    clickStatusTab() {
        OnboardingVendorRequestViewDetailsTabOR.statusTab.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.statusTab.click();
        });

    }

    clickAddNewUpdate() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.addNewUpdateBtn), 100000, "Add New Update");
        OnboardingVendorRequestViewContractsTabOR.addNewUpdateBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewContractsTabOR.addNewUpdateBtn.click();
            browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.productName), 100000, "Product Name");
        })
    }


    uploadDocument(filePath: any) {
        let fpath = path.resolve(__dirname, filePath);
        OnboardingVendorRequestViewContractsTabOR.attachFile;
        var fileElem = OnboardingVendorRequestViewContractsTabOR.uploadDocument;
        browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
        fileElem.sendKeys(fpath);
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.submitUploadDocument), 100000, "Submit Btn");
        OnboardingVendorRequestViewContractsTabOR.submitUploadDocument.click();
        wait.waitCondition(5000);
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.addNewUpdateBtn), 100000, "Add New Update");
    }

    verifyincumbentVendorContractName() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.incumbentVendorContractName), 100000, "Vendor Contract Name");
        OnboardingVendorRequestViewContractsTabOR.incumbentVendorContractName.click();
    }

    getWindowHandlers(text: string) {
        browser.getAllWindowHandles().then((handles) => {
            var secondWindowHandle = handles[1];
            var firstWindowHandle = handles[0];
            browser.switchTo().window(secondWindowHandle).then(() => {
                wait.waitCondition(3000);
                OnboardingVendorRequestViewContractsTabOR.viewContract.getText().then((textIs) => {
                    expect(textIs).to.equal(text)
                })
            });
            browser.switchTo().window(firstWindowHandle).then(() => {
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewContractsTabOR.addNewUpdateBtn), 100000, "Add New Update");
            })
        });
    }

    getTextNoContracts(text: string) {
        OnboardingVendorRequestViewContractsTabOR.noContractsDisplayed.getText().then((textIs) => {
            expect(textIs).to.equal(text)
        })
    }

    validateContractsDocumentNameDisplayed() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.productType), 100000, "Product Type displayed");
        OnboardingVendorRequestViewContractsTabOR.productType.getText().then((productType) => {
            assert(productType != null)
            browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.documentName), 100000, "Document Name displayed");
            OnboardingVendorRequestViewContractsTabOR.documentName.getText().then((documentName) => {
                documentName.toString().includes(productType.toString());
            });
        });
    }

    validateViewfunctionality(author: string) {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.actionsBtn), 100000, "Actions Btn");
        OnboardingVendorRequestViewContractsTabOR.actionsBtn.click().then(() => {
            browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.viewBtn), 100000, "View Btn");
            OnboardingVendorRequestViewContractsTabOR.viewBtn.click();
            browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.viewContractEntry), 100000, "View Contract Entry");
            browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.authorName), 100000, "Author Name");
            OnboardingVendorRequestViewContractsTabOR.authorName.getText().then((name) => {
                expect(name).to.equal(author);
                browser.wait(until.visibilityOf(OnboardingVendorRequestViewContractsTabOR.closeBtn), 100000, "Close Btn");
                OnboardingVendorRequestViewContractsTabOR.closeBtn.click();
            });
        });
        wait.waitCondition(5000);
    }
}