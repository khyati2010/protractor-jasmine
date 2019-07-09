import { OnboardingVendorRequestViewDueDiligenceTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestDueDiligenceTabOR";
import { browser, protractor } from "protractor";
import { Wait } from "../../com.venminder.utilities/Wait"
import { BasePage } from "../shared/BasePage";
const wait = new Wait();
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;

export class OnboardingVendorRequestDueDiligenceTabPages extends BasePage {

    clickDueDiligenceTab() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewDueDiligenceTabOR.dueDiligenceTab), 100000, "Validate Due Diligence Tab is displayed ");
        OnboardingVendorRequestViewDueDiligenceTabOR.dueDiligenceTab.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDueDiligenceTabOR.dueDiligenceTab.click();
            wait.waitCondition(4000);
        });
    }

    addVendorLevelDueDiligence(label: string) {
        OnboardingVendorRequestViewDueDiligenceTabOR.addDueDiligenceBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
        OnboardingVendorRequestViewDueDiligenceTabOR.addDueDiligenceBtn.click();
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewDueDiligenceTabOR.selectVendor), 100000, "Select Radio Button ");
        OnboardingVendorRequestViewDueDiligenceTabOR.selectVendor.click();
        OnboardingVendorRequestViewDueDiligenceTabOR.labelTextArea.sendKeys(label);
        OnboardingVendorRequestViewDueDiligenceTabOR.selectType.click().then(() => {
            OnboardingVendorRequestViewDueDiligenceTabOR.selectTypeValue.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
                OnboardingVendorRequestViewDueDiligenceTabOR.selectTypeValue.click();
            })
            OnboardingVendorRequestViewDueDiligenceTabOR.submitBtn.click();
        })
        wait.waitCondition(5000)
        OnboardingVendorRequestViewDueDiligenceTabOR.createdvendorTask.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
    }

    deleteCreatedVendorRequirments() {
        OnboardingVendorRequestViewDueDiligenceTabOR.editBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDueDiligenceTabOR.editBtn.click();
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewDueDiligenceTabOR.deleteRequirmentBtn), 100000, "Delete Requirment Button");
            OnboardingVendorRequestViewDueDiligenceTabOR.deleteRequirmentBtn.click();
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewDueDiligenceTabOR.confirmBtn), 100000, "Confirm Button");
            OnboardingVendorRequestViewDueDiligenceTabOR.confirmBtn.click();
        })
        wait.waitCondition(5000);
    }

    selectDateAndOwner() {
        OnboardingVendorRequestViewDueDiligenceTabOR.clickDate.click();
        OnboardingVendorRequestViewDueDiligenceTabOR.selectDate.click();
        wait.waitCondition(5000);
        OnboardingVendorRequestViewDueDiligenceTabOR.ownerDropDown.click().then(() => {
            OnboardingVendorRequestViewDueDiligenceTabOR.selectOwner.click();
        })
        OnboardingVendorRequestViewDueDiligenceTabOR.ownerSubmitBtn.click();
        wait.waitCondition(2000);
    }
}