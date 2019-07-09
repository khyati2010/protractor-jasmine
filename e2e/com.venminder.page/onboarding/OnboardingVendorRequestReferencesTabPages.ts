import { OnboardingVendorRequestViewReferencesTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestReferencesTabOR";
import { browser, protractor, by } from "protractor";
import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";
import { OnboardingVendorRequestViewTileOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestViewTileOR";
import { Wait } from "../../com.venminder.utilities/Wait"
import path = require("path");
import { BasePage } from "../shared/BasePage";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const assert = chai.assert;
const wait = new Wait();

export class OnboardingVendorRequestReferencesTabPage extends BasePage {

    clickReferencesTab() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.referencesTab), 100000, "Validate Reference Tab is displayed ");
        OnboardingVendorRequestViewReferencesTabOR.referencesTab.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewReferencesTabOR.referencesTab.click();
            wait.waitCondition(4000);
        });
    }

    clickAddReference() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.addReference), 100000, "Validate Add Reference Btn is displayed ");
        OnboardingVendorRequestViewReferencesTabOR.addReference.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewReferencesTabOR.addReference.click().then(() => {
                browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.addReferenceText), 100000, "Validate Add Reference Text is displayed ");
                OnboardingVendorRequestViewReferencesTabOR.submitBtn.click().then(() => {
                    OnboardingVendorRequestViewReferencesTabOR.errorMessage.getText().then((displayedValue) => {
                        assert(displayedValue != null)
                    })
                })
            })

        });
    }

    enterCompanyNameAndEmailId() {
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.companyName), 2000, 'Company Name input field');
        OnboardingVendorRequestViewReferencesTabOR.companyName.sendKeys(this.generateRandomText()).then(() => {
            OnboardingVendorRequestViewReferencesTabOR.companyName.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
        browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.emailAddress), 2000, 'Email Address Field ');
        OnboardingVendorRequestViewReferencesTabOR.emailAddress.sendKeys(this.generateRandomText() + "@test.com").then(() => {
            OnboardingVendorRequestViewReferencesTabOR.emailAddress.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
            })
        })
    }

    attachBtn(filePath: any) {
        let fpath = path.resolve(__dirname, filePath);
        OnboardingVendorRequestViewReferencesTabOR.attachBtn;
        var fileElem = browser.element(by.css('input[type="file"]'));
        browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
        fileElem.sendKeys(fpath);
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.submitBtn), 100000, "Submit Btn");
        OnboardingVendorRequestViewReferencesTabOR.submitBtn.click();
        wait.waitCondition(5000);
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.addReference), 100000, "Add New Update");
    }

    actionsBtn() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.actionsBtn), 2000, 'Action Btn ');
        OnboardingVendorRequestViewReferencesTabOR.actionsBtn.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.viewBtn), 2000, 'view Btn ');
            OnboardingVendorRequestViewReferencesTabOR.viewBtn.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.editBtn), 2000, 'edit Btn ');
                OnboardingVendorRequestViewReferencesTabOR.editBtn.isDisplayed().then((displayed) => {
                    expect(displayed).to.equal(true);
                    browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.deleteBtn), 2000, 'delete Btn ');
                    OnboardingVendorRequestViewReferencesTabOR.deleteBtn.isDisplayed().then((displayed) => {
                        expect(displayed).to.equal(true);
                        OnboardingVendorRequestViewReferencesTabOR.deleteBtn.click();
                        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.deleteRef), 20000, 'delete Ref Btn ');
                        OnboardingVendorRequestViewReferencesTabOR.deleteRef.click();
                    });
                });
            });
            wait.waitCondition(3000);
        });
    }

    noRefText() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.noRefFound), 2000, 'No Reference ');
        OnboardingVendorRequestViewReferencesTabOR.noRefFound.isDisplayed().then((displayed) => {
            expect(displayed).to.equal(true);
        });
    }

    addCompanyNameAndPhoneNumber() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.submitBtn), 100000, "Submit Btn");
        OnboardingVendorRequestViewReferencesTabOR.submitBtn.click().then(() => {

            browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.companyName), 2000, 'Company Name input field');
            OnboardingVendorRequestViewReferencesTabOR.companyName.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestViewReferencesTabOR.companyName.sendKeys(this.generateRandomText());
            });

            browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.rareACode), 2000, 'Enter Area Code');
            OnboardingVendorRequestViewReferencesTabOR.rareACode.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestViewReferencesTabOR.rareACode.sendKeys(this.getRandomInteger());
            });

            browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.rprefix), 2000, 'Enter Prefix Code');
            OnboardingVendorRequestViewReferencesTabOR.rprefix.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestViewReferencesTabOR.rprefix.sendKeys(this.getRandomInteger());
            });

            browser.wait(until.visibilityOf(OnboardingVendorRequestViewReferencesTabOR.rsuffix), 2000, 'Enter Suffix Code');
            OnboardingVendorRequestViewReferencesTabOR.rsuffix.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                OnboardingVendorRequestViewReferencesTabOR.rsuffix.sendKeys(this.getRandomInteger());
            });

            browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.submitBtn), 100000, "Submit Btn");
            OnboardingVendorRequestViewReferencesTabOR.submitBtn.click();
            wait.waitCondition(4000)
        });
    }

    editLink() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.editLink), 100000, "Edit Link");
        OnboardingVendorRequestViewReferencesTabOR.editLink.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewReferencesTabOR.assignmentList), 100000, "Assignment List");
            OnboardingVendorRequestViewReferencesTabOR.assignmentList.click().then(() => {

            })
        })
    }
}

