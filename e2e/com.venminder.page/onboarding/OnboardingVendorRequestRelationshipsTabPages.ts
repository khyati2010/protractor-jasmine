import { OnboardingVendorRequestViewRelationshipsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestRelationshipsTabOR";
import { browser, protractor } from "protractor";
import { vendorRequestData } from "../../com.venminder.testdata/TestData";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const relationshipsTab = OnboardingVendorRequestViewRelationshipsTabOR;
const dataVendorRequest = new vendorRequestData;


export class OnboardingVendorRequestRelationshipsTabPage {

    clickRelationshipsTab() {
        relationshipsTab.vendorRelationshipsTab.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            relationshipsTab.vendorRelationshipsTab.click();
            browser.wait(until.visibilityOf(relationshipsTab.statusBarContainer), 10000, " Status Bar Container is displayed ");
            relationshipsTab.statusBarContainer.isDisplayed().then((Displayed) => {
                expect(Displayed).to.equal(true);
            });
        });
    };

    thirdPartySection() {
        expect(relationshipsTab.thirdPartyContainer.isDisplayed()).to.eventually.equal(true);
        expect(relationshipsTab.fourthPartyContainer.isDisplayed()).to.eventually.equal(true);
        browser.sleep(700);
        relationshipsTab.statusBarMarkCompleteBtn.getAttribute("disabled").then((value) => {
            if (value == "true") {
                browser.wait(until.elementToBeClickable(relationshipsTab.statusBarNotRequiredChckBox), 1000, 'button is not clickable')
                relationshipsTab.statusBarNotRequiredChckBox.click().then(() => {
                    expect(relationshipsTab.editThirdPartyBtn.isDisplayed()).to.eventually.equal(true);
                    expect(relationshipsTab.editFourthPartyBtn.isDisplayed()).to.eventually.equal(true);
                });
            };
        });
    };

    fourthPartySection() {
        expect(relationshipsTab.fourthPartyContainer.isDisplayed()).to.eventually.equal(true);
    };

    readOnlyRelationships() {
        browser.sleep(1000)
        relationshipsTab.statusBarMarkCompleteBtn.getAttribute("disabled").then((value) => {
            if (value == "true") {
                expect(relationshipsTab.editThirdPartyBtn.isPresent()).to.eventually.equal(false);
            }
            else {
                relationshipsTab.statusBarNotRequiredChckBox.click().then(() => {
                    browser.wait(until.invisibilityOf(relationshipsTab.editThirdPartyBtn), 15000, 'edit btn is disbaled')
                    expect(relationshipsTab.editThirdPartyBtn.isPresent()).to.eventually.equal(false);
                });
            };
        });
    };

    linkVendorRelationshipsModal() {
        browser.wait(until.elementToBeClickable(relationshipsTab.editThirdPartyBtn), 5000, 'edit third party button is not clickable')
        relationshipsTab.editThirdPartyBtn.isDisplayed().then(() => {
            relationshipsTab.editThirdPartyBtn.click().then(() => {
                browser.wait(until.visibilityOf(relationshipsTab.thirdFourthPartyRelationshipModal), 10000, "relationship party modal is displayed")
                expect(relationshipsTab.thirdFourthPartyRelationshipModal.isDisplayed()).to.eventually.equal(true);
            });
        })
    }

    selectThirdPartyRelationshipVendor() {
        let addedVendor, allVendorsListed;
        let vendorsToBechecked = [];
        relationshipsTab.fourtPartyVendorsSelected.getText().then((text) => {
            addedVendor = text[0].split("\n");
            relationshipsTab.fourthPartyVendorList.getText().then((text) => {
                allVendorsListed = text;
                const uniqueVendors = allVendorsListed.filter((unique) => {
                    return addedVendor.indexOf(unique) == -1;
                });
                for (let listRow = 1; listRow <= allVendorsListed.length; listRow++) {
                    relationshipsTab.fourthPartyVendorRow(listRow).getText().then((text) => {
                        if (uniqueVendors.indexOf(text) !== -1) {
                            vendorsToBechecked.push(relationshipsTab.vendorsChckbox(listRow));
                        };
                        if (listRow === allVendorsListed.length) {
                            vendorsToBechecked[0].click();
                        };
                    });
                };
            });
            relationshipsTab.submitBtnRelationshipModal.click();
        });
    };

    selectFourthPartyRelationshipVendor() {
        browser.wait(until.invisibilityOf(relationshipsTab.loaderOnAction), 8000, "edit fourth party btn is clickable");
        browser.wait(until.elementToBeClickable(relationshipsTab.editFourthPartyBtn), 5000, "edit button is clickable")
        relationshipsTab.fourthPartyCheckedStatus.getText().then((status) => {
            relationshipsTab.editFourthPartyBtn.click().then(() => {
                browser.wait(until.visibilityOf(relationshipsTab.thirdFourthPartyRelationshipModal), 10000, "relationship party modal is displayed")
                expect(relationshipsTab.thirdFourthPartyRelationshipModal.isDisplayed()).to.eventually.equal(true);
                browser.wait(until.elementToBeClickable(relationshipsTab.fourthPartySelectChckbox), 8000, "checkbox is not clickable");
                if (status == "No") {
                    relationshipsTab.fourthPartySelectChckbox.click();
                }
                else if (status == "Yes") {
                    let addedVendor, allVendorsListed;
                    let vendorsToBechecked = [];
                    relationshipsTab.thirdPartyVendorSelected.getText().then((text) => {
                        addedVendor = text[0].split("\n");
                        relationshipsTab.thirdPartyVendorList.getText().then((text) => {
                            allVendorsListed = text;
                            const uniqueVendors = allVendorsListed.filter((unique) => {
                                return addedVendor.indexOf(unique) == -1;
                            });
                            for (let listRow = 1; listRow <= allVendorsListed.length; listRow++) {
                                relationshipsTab.thirdPartyVendorRow(listRow).getText().then((text) => {
                                    if (uniqueVendors.indexOf(text) !== -1) {
                                        vendorsToBechecked.push(relationshipsTab.thirdPartyVendorsChckbox(listRow));
                                    }
                                    if (listRow === allVendorsListed.length) {
                                        vendorsToBechecked[0].click();
                                    };
                                });
                            };
                        });
                        relationshipsTab.submitBtnRelationshipModal.click();
                    });
                };
            });
        });
    };

    vendorDashboardNavigation() {
        let vendorsAdded;
        relationshipsTab.fourtPartyVendorsSelected.getText().then((text) => {
            vendorsAdded = text[0].split("\n")
            for (let i = 1; i <= vendorsAdded.length; i++) {
                relationshipsTab.hyperlinkedVendor(i).getAttribute("class").then((classValue) => {
                    if (classValue == "au-target") {
                        relationshipsTab.hyperlinkedVendor(i).click().then(() => {
                            browser.getAllWindowHandles().then((handles) => {
                                browser.switchTo().window(handles[1]);
                                browser.getCurrentUrl().then((url) => {
                                    let dashboardUrl = url.toString().split('/?')[0];
                                    expect(dashboardUrl).to.equal(dataVendorRequest.dashboardUrl);
                                })
                            });
                            browser.getAllWindowHandles().then((handles) => {
                                browser.switchTo().window(handles[0]);
                            });
                        })
                    }
                })
            }
        })
    };

    relatedAsPartyInlineMessage() {
        relationshipsTab.editThirdPartyBtn.click();
        relationshipsTab.thirdPartySelectChckbox.click().then(() => {
            relationshipsTab.fourthPartySelectChckbox.click().then(() => {
                relationshipsTab.submitBtnRelationshipModal.click().then(() => {
                    expect(relationshipsTab.vendorRelatedToPartyErrorMsg.isDisplayed()).to.eventually.equal(true);
                });
                relationshipsTab.cancelBtnRelationshipModal.click().then(() => {
                    expect(relationshipsTab.editFourthPartyBtn.isDisplayed()).to.eventually.equal(true);
                });
            });
        });
    };
};