import { OnboardingVendorRequestStatusTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestStatusTabOR";
import { browser, protractor } from "protractor";
import { OnboardingApprovalSettings } from "../../com.venminder.page_object/onboarding/OnboardingApprovalSettingsOR";
import { OnboardingVendorRequestContractsTabPage } from "../../com.venminder.page/onboarding/OnboardingVendorRequestContractsTabPages"
import { contractsTab } from "../../com.venminder.testdata/TestData";
import { OnboardingVendorRequestViewContractsTabOR } from "../../com.venminder.page_object/onboarding/OnboardingVendorRequestContractsTabOR";

const chai = require("chai").use(require("chai-as-promised"));
const until = protractor.ExpectedConditions;
const expect = chai.expect;
const ContractsTab = new contractsTab;

export class OnboardingVendorRequestStatusTabPage extends OnboardingVendorRequestContractsTabPage {


    vendorInformationSection() {
        OnboardingVendorRequestStatusTabOR.vendorInformationSection.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
        });
        OnboardingVendorRequestStatusTabOR.vendorNameInfoSection.getText().then((text) => {
            const info = text.toString().split(":");
            OnboardingVendorRequestStatusTabOR.headerVendorName.getText().then((value) => {
                expect(info[1].trim()).to.equal(value);
            });
        });
    }

    vmoInformationSection() {
        OnboardingVendorRequestStatusTabOR.vmoInformationSection.isDisplayed().then((Displayed) => {
            expect(Displayed).to.equal(true);
            OnboardingVendorRequestStatusTabOR.vmoManagerDetail.getText().then((text) => {
                const vmoManager = text.toString().split(":");
                if (vmoManager[1].includes("Unassigned")) {
                    OnboardingVendorRequestStatusTabOR.vmoAssign.isDisplayed().then(() => {
                        OnboardingVendorRequestStatusTabOR.vmoAssign.click().then(() => {
                            browser.wait(until.visibilityOf(OnboardingVendorRequestStatusTabOR.vmoManagerAssignModal), 10000, "VMO assign manager modal displayed")
                            OnboardingVendorRequestStatusTabOR.vmoManagerAssignModal.isDisplayed().then(() => {
                                OnboardingVendorRequestStatusTabOR.vmoManagerAssignModalTitle.isDisplayed().then((displayed) => {
                                    expect(displayed).to.equal(true);
                                    OnboardingVendorRequestStatusTabOR.selectVmoManagerDropdown.click();
                                    browser.wait(until.elementToBeClickable(OnboardingVendorRequestStatusTabOR.submitVmoManagerModalBtn), 5000, "submit button is clickable");
                                    OnboardingVendorRequestStatusTabOR.submitVmoManagerModalBtn.click();
                                })
                            })
                        })
                    })
                }
                else {
                    OnboardingVendorRequestStatusTabOR.vmoAssign.click().then(() => {
                        browser.wait(until.visibilityOf(OnboardingVendorRequestStatusTabOR.vmoManagerAssignModal), 10000, "VMO assign manager modal displayed")
                        OnboardingVendorRequestStatusTabOR.vmoManagerAssignModal.isDisplayed().then(() => {
                            OnboardingVendorRequestStatusTabOR.vmoManagerReassignModalTitle.isDisplayed().then((displayed) => {
                                expect(displayed).to.equal(true);
                                OnboardingVendorRequestStatusTabOR.currentManagerLbl.isDisplayed().then((displayed) => {
                                    expect(displayed).to.equal(true);
                                })
                                OnboardingVendorRequestStatusTabOR.selectVmoManagerDropdown.click();
                                browser.wait(until.elementToBeClickable(OnboardingVendorRequestStatusTabOR.submitVmoManagerModalBtn), 5000, "submit button is clickable");
                                OnboardingVendorRequestStatusTabOR.submitVmoManagerModalBtn.click();
                            })
                        })
                    })
                }
            })
        })
    }

    addNotesSection() {
        OnboardingVendorRequestStatusTabOR.vendorNotesSection.isDisplayed().then(() => {
            OnboardingVendorRequestStatusTabOR.addNotes.isDisplayed().then(() => {
                OnboardingVendorRequestStatusTabOR.addNotes.click().then(() => {
                    OnboardingVendorRequestStatusTabOR.addNoteModal.isDisplayed().then((displayed) => {
                        expect(displayed).to.equal(true);
                        OnboardingVendorRequestStatusTabOR.addNoteSubmitBtn.isEnabled().then((enabled) => {
                            expect(enabled).to.equal(false);
                        });
                        let str = "Test for adding random notes";
                        for (; str.length < 100;) {
                            str = str + Math.random().toString(36).substr(2)
                        }
                        OnboardingVendorRequestStatusTabOR.notesDescriptionArea.sendKeys(str).then(() => {
                            OnboardingVendorRequestStatusTabOR.addNoteSubmitBtn.isEnabled().then((enabled) => {
                                expect(enabled).to.equal(true);
                                OnboardingVendorRequestStatusTabOR.addNoteSubmitBtn.click();
                            });
                        });
                        browser.wait(until.visibilityOf(OnboardingVendorRequestStatusTabOR.notesTbl), 1000, "Notes table is displayed");
                        OnboardingVendorRequestStatusTabOR.notesTbl.isDisplayed().then((displayed) => {
                            expect(displayed).to.equal(true);
                        })
                    })
                })
            })
            browser.wait(until.invisibilityOf(OnboardingApprovalSettings.loaderOnAction), 3000, 'note expand option is not clickable')
            OnboardingVendorRequestStatusTabOR.notesExpandBtn.isDisplayed().then(() => {
                OnboardingVendorRequestStatusTabOR.notesExpandBtn.click();
                OnboardingVendorRequestStatusTabOR.expandedNotesTbl.isDisplayed().then(() => {
                    OnboardingVendorRequestStatusTabOR.expandedAddNoteBtn.isDisplayed().then(() => {
                        OnboardingVendorRequestStatusTabOR.expandedAddNoteBtn.click().then(() => {
                            OnboardingVendorRequestStatusTabOR.addNoteModal.isDisplayed().then(() => {
                                OnboardingVendorRequestStatusTabOR.addNoteCloseBtn.click().then(() => {
                                    OnboardingVendorRequestStatusTabOR.addNoteModal.isDisplayed().then((displayed) => {
                                        expect(displayed).to.equal(true);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    requirementStatusSection() {
        expect(OnboardingVendorRequestStatusTabOR.requirementStatusModal.isDisplayed()).to.eventually.equal(true);
        for (let i = 0; i < 5; i++) {
            OnboardingVendorRequestStatusTabOR.requirementAssignmentList(i).getText().then((text) => {
                if (text === "In progress") {
                    OnboardingVendorRequestStatusTabOR.requirementStatuslist(i).getText().then((text) => {
                        expect(text).to.equal("Incomplete")
                    })
                }
                if (text === "Complete") {
                    OnboardingVendorRequestStatusTabOR.requirementStatuslist(i).getText().then((text) => {
                        expect(text).to.equal("Complete")
                    })
                }
            })
        }
    }

    validateApproveVendorBtn() {
        OnboardingVendorRequestStatusTabOR.approveVendorBtn.isDisplayed().then(() => {
            OnboardingVendorRequestStatusTabOR.approveVendorBtn.getAttribute('disabled').then((btnDisabled) => {
                expect(btnDisabled).to.equal(null);
            });
            this.assignRequestSectionTab();
        });
        browser.sleep(500);
        OnboardingVendorRequestStatusTabOR.statusTab.click();
        expect(OnboardingVendorRequestStatusTabOR.approveVendorBtn.getAttribute('disabled')).to.eventually.equal('true');
        OnboardingVendorRequestViewContractsTabOR.contractsTab.click();
        this.notRequiredFunctionality(ContractsTab.contractsvalue[0], ContractsTab.contractsvalue[1]);
        browser.sleep(500);
        OnboardingVendorRequestStatusTabOR.statusTab.click();
        expect(OnboardingVendorRequestStatusTabOR.approveVendorBtn.getAttribute('disabled')).to.eventually.equal(null);
        OnboardingVendorRequestStatusTabOR.approveVendorBtn.click().then(() => {
            expect(OnboardingVendorRequestStatusTabOR.approveVendorModal.isDisplayed()).to.eventually.equal(true);
        });
        expect(OnboardingVendorRequestStatusTabOR.approveManagerModalNextBtn.getAttribute('disabled')).to.eventually.equal('true')
        OnboardingVendorRequestStatusTabOR.productManagerDropdown.click();
        OnboardingVendorRequestStatusTabOR.productMangerApprovalModal.click();
        expect(OnboardingVendorRequestStatusTabOR.approveManagerModalNextBtn.getAttribute('disabled')).to.eventually.equal(null)
        OnboardingVendorRequestStatusTabOR.approveManagerModalNextBtn.click();
    };

    clickDeclineVendorRequest(note: string) {
        browser.wait(until.elementToBeClickable(OnboardingVendorRequestStatusTabOR.declineVendorBtn), 90000, 'Decline vendor Button');
        OnboardingVendorRequestStatusTabOR.declineVendorBtn.click().then(() => {
            OnboardingVendorRequestStatusTabOR.declineModal.isDisplayed().then((displayed) => {
                expect(displayed).to.equal(true);
                browser.wait(until.visibilityOf(OnboardingVendorRequestStatusTabOR.declineAddNote), 90000, 'Decline add note');
                OnboardingVendorRequestStatusTabOR.declineAddNote.sendKeys(note);
                browser.wait(until.elementToBeClickable(OnboardingVendorRequestStatusTabOR.declineSubmitBtn), 90000, 'Decline submit Button');
                OnboardingVendorRequestStatusTabOR.declineSubmitBtn.click();
                browser.wait(until.invisibilityOf(OnboardingApprovalSettings.loaderOnAction), 10000, 'Loader ')
            });
        });
    }
}
