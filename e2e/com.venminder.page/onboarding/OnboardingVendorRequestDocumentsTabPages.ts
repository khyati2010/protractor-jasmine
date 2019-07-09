import { OnboardingVendorRequestDocumentsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestDocumentTabOR";
import { browser, protractor, by } from "protractor";
import { OnboardingVendorRequestViewTileOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestViewTileOR";
import { Wait } from "../../com.venminder.utilities/Wait"
import path = require("path");
const wait = new Wait();
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const assert = chai.assert;

export class OnboardingVendorRequestDocumentTabPage {

    clickDocumentsTab() {
        OnboardingVendorRequestDocumentsTabOR.documentTab.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestDocumentsTabOR.documentTab.click();
        })
        wait.waitCondition(5000);
    }

    uploadDocument(filePath: any) {
        OnboardingVendorRequestDocumentsTabOR.uploadBtn.click();
        let fpath = path.resolve(__dirname, filePath);
        OnboardingVendorRequestDocumentsTabOR.browseBtn;
        var fileElem = OnboardingVendorRequestDocumentsTabOR.addDocument
        browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
        fileElem.sendKeys(fpath);
        OnboardingVendorRequestDocumentsTabOR.effectiveDate.click();
        OnboardingVendorRequestDocumentsTabOR.addTag.click();
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.submitBtn), 100000, "Submit Btn");
        OnboardingVendorRequestDocumentsTabOR.submitBtn.click();
        wait.waitCondition(5000)
    }

    viewBtnFunctionality() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.actionBtn), 30000, 'Action Btn is not clickable');
        OnboardingVendorRequestDocumentsTabOR.actionBtn.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestDocumentsTabOR.actionBtn.click().then(() => {
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.viewBtn), 30000, 'View Btn is not clickable');
                OnboardingVendorRequestDocumentsTabOR.viewBtn.click().then(() => {
                    browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.closeBtn), 30000, 'close Btn is not clickable');
                    OnboardingVendorRequestDocumentsTabOR.closeBtn.click();
                })
            });
        });
    }

    clearAndShowAll() {
        OnboardingVendorRequestDocumentsTabOR.clearBtn.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestDocumentsTabOR.clearBtn.click();
            OnboardingVendorRequestDocumentsTabOR.showAllBtn.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestDocumentsTabOR.showAllBtn.click();
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.actionBtn), 30000, 'Action Btn');
            })
        })
    }


    deleteFunctionality() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.actionBtn), 30000, 'Action Btn');
        OnboardingVendorRequestDocumentsTabOR.actionBtn.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
            OnboardingVendorRequestDocumentsTabOR.actionBtn.click().then(() => {
                OnboardingVendorRequestDocumentsTabOR.deleteBtn.isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                    OnboardingVendorRequestDocumentsTabOR.deleteBtn.click();
                    browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.deleteDocument), 50000, 'Delete Documents Btn');
                    OnboardingVendorRequestDocumentsTabOR.deleteDocument.click();
                })
            })
        })
    }

    selectDocumentTags() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.documentTags), 30000, 'Document tags is not clickable');
        OnboardingVendorRequestDocumentsTabOR.documentTags.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestDocumentsTabOR.applyFilters), 30000, 'Apply Filters ');
            OnboardingVendorRequestDocumentsTabOR.applyFilters.click();
        })
    }
}
