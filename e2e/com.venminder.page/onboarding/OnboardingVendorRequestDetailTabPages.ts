import { OnboardingVendorRequestViewDetailsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestDetailTabOR";
import { browser, protractor } from "protractor";
import { OnboardingVendorRequestOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestOR";
import { OnboardingVendorRequestViewTileOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestViewTileOR";
import { Wait } from "../../com.venminder.utilities/Wait"
const wait = new Wait();
const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const assert = chai.assert;

export class OnboardingVendorRequestDetailsTabPage {

    navigateToRequestView() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.actionBtn), 9000, 'Action Btn');
        OnboardingVendorRequestOR.actionBtn.click().then(() => {
            browser.wait(until.elementToBeClickable(OnboardingVendorRequestOR.viewBtn), 9000, 'View Btn');
            OnboardingVendorRequestOR.viewBtn.click().then(() => {
                expect(OnboardingVendorRequestViewDetailsTabOR.statusTab.isDisplayed()).to.eventually.equal(true);
            });
        });
    }

    clickDetailsTab() {
        OnboardingVendorRequestViewDetailsTabOR.detailsTab.isDisplayed().then((Displayed) => {
            expect(Displayed).to.Equal(true);
            OnboardingVendorRequestViewDetailsTabOR.detailsTab.click();
        })
    }

    verifyFormSections() {
        OnboardingVendorRequestViewDetailsTabOR.vendorInfo.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.productInfo.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
                OnboardingVendorRequestViewDetailsTabOR.pricingInfo.isDisplayed().then((Displayed) => {
                    expect(Displayed).to.equal(true);
                    OnboardingVendorRequestViewDetailsTabOR.criticalInfo.isDisplayed().then((Displayed) => {
                        expect(Displayed).to.equal(true);
                        OnboardingVendorRequestViewDetailsTabOR.riskAssessment.isDisplayed().then((Displayed) => {
                            expect(Displayed).to.equal(true);
                        })
                    })
                })
            })
        })
    }

    clickEditBtn() {
        OnboardingVendorRequestViewDetailsTabOR.editBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.editBtn.click();
        })
    }

    clickCancelBtn() {
        OnboardingVendorRequestViewDetailsTabOR.cancelBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.cancelBtn.click();
        })
    }

    verifyButtonVisible() {
        OnboardingVendorRequestViewDetailsTabOR.saveBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.cancelBtn.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
            })
        })
    }

    enterTextDescField(value: any) {
        OnboardingVendorRequestViewDetailsTabOR.descField.clear().then(() => {
            OnboardingVendorRequestViewDetailsTabOR.descField.sendKeys(value).then(() => {
                OnboardingVendorRequestViewDetailsTabOR.saveBtn.click().then(() => {
                    OnboardingVendorRequestViewDetailsTabOR.descField.getAttribute('value').then((Displayed) => {
                        expect(Displayed).to.equal(value);
                    })
                })
            })
        })
        wait.waitCondition(5000)
    }

    clickStatusSortBtn() {
        OnboardingVendorRequestViewDetailsTabOR.statusSortBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.statusSortBtn.click();
            wait.waitCondition(7000)
        })
    }

    clickDateSortBtn() {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestViewDetailsTabOR.dateSortBtn), 90000, 'Sort date');
        OnboardingVendorRequestViewDetailsTabOR.dateSortBtn.click();
        wait.waitCondition(7000)
    }

    clickEditBtnFalse() {
        OnboardingVendorRequestViewDetailsTabOR.editBtn.isPresent().then((Displayed) => {
            expect(Displayed).to.equal(false);
        })
    }

    verifyEditBtnDisabled() {
        OnboardingVendorRequestViewDetailsTabOR.editBtn.isEnabled().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
    }

    clickAllVendorRequestsListAndNavToViewTilePage() {
        OnboardingVendorRequestViewDetailsTabOR.allPendingVendorBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.allPendingVendorBtn.click().then(() => {
                OnboardingVendorRequestViewDetailsTabOR.hamburgerViewAllRequests.click().then(() => {
                    OnboardingVendorRequestViewTileOR.searchRequest.isDisplayed().then((Displayed) => {
                        expect(Displayed).to.equal(true);
                    })
                })
            })
        })
    }

    verifyVMOManager() {
        OnboardingVendorRequestViewDetailsTabOR.vmoManager.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        })
        wait.waitCondition(3000)
    }

    verifyTooltipDisplayed() {
        OnboardingVendorRequestViewDetailsTabOR.allPendingVendorBtn.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.allPendingVendorBtn.click().then(() => {
                OnboardingVendorRequestViewDetailsTabOR.allPendingVendorList.getAttribute('title').then((displayedValue) => {
                    assert(displayedValue != null)
                })
            })
        })
        wait.waitCondition(3000)
    }

    vendorRequestsPageNavigation() {
        OnboardingVendorRequestViewDetailsTabOR.hamburgerViewAllRequests.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestViewDetailsTabOR.hamburgerViewAllRequests.click();
            wait.waitCondition(3000)
        })
    }

    riskLevelIndicatorDetailsTab() {
        OnboardingVendorRequestViewDetailsTabOR.riskAssessment.isDisplayed().then(() => {
            OnboardingVendorRequestViewDetailsTabOR.riskLevelIndicator.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
            })
        })
    }

    noRiskAssessmentRiskLevelIndicator() {
        OnboardingVendorRequestViewDetailsTabOR.riskAssessment.isPresent().then((displayed) => {
            expect(displayed).to.equal(false);
        });
    }
}
