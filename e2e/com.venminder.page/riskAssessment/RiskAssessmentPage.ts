import { RiskAssessmentOR } from "../../com.venminder.page_object/riskAssessment/RiskAssessmentOR";
import { BasePage } from "../shared/BasePage";
import { browser, protractor } from "protractor";
import { RiskAssessmentData } from "../../com.venminder.testdata/TestData";
const until = protractor.ExpectedConditions;
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";

export class RiskAssessmentPage extends BasePage {
	select = new SelectDropDown();

	verifyRiskModalAndProceed(action: string) {
		RiskAssessmentOR.btnContinueAssessment.isPresent().then(isPresent => {
			if (isPresent == true) {
				this.click.buttonClick(RiskAssessmentOR.btnContinueAssessment);
				this.click.buttonClick(RiskAssessmentOR.btnLoadTemplate);
			} else console.log("Template modal of risk is not present");
		});
		//  RiskAssessmentOR.modalRisk.isPresent().then(isPresent => {
		//      if (isPresent) {
		//          browser.wait(until.visibilityOf(RiskAssessmentOR.lblmodalDialogContent), 5000, "Risk Modal Dialog Content label is present");
		//          if (action == "continue") {
		//              browser.wait(until.visibilityOf(RiskAssessmentOR.btnContinueRiskLevel), 5000, "Dont show button is present");
		//              this.click.buttonClick(RiskAssessmentOR.btnContinueRiskLevel);
		//          } else if (action == "cancel") {
		//              browser.wait(until.visibilityOf(RiskAssessmentOR.btnCloseModal), 3000, "Cancel button is present");
		//              this.click.buttonClick(RiskAssessmentOR.btnCloseModal);
		//          }
		//      }
		//      else
		//          console.log("Risk modal is not present");
		//  });
		this.click.buttonClick(RiskAssessmentOR.btnModifyRiskTemplate);
		//check screen for lock of assessment
		browser.wait(
			until.visibilityOf(RiskAssessmentOR.lblRiskLevelSettings),
			30000,
			"RiskLevel Screen is displayed"
		);
	}

	verifyDeleteAddRisk(action: string) {
		browser.sleep(3000);
		RiskAssessmentOR.listRiskLevel.getText().then(data => {
			var length: number = data.length;
			if (length > 3) {
				RiskAssessmentOR.btnRemoveRiskLevel.isDisplayed().then(data => {
					if (data == true) {
						if (action == "submit") {
                            this.click.buttonClick(RiskAssessmentOR.btnRemoveRiskLevel);
                            console.log("Removed RiskLevel");
						} else if (action == "reset") {
                            this.click.buttonClick(RiskAssessmentOR.btnResetRiskLevel);
                            console.log("clicked on Reset RiskLevel");
						}
					}
				});
			} else {
				RiskAssessmentOR.btnAddRiskLevel.isEnabled().then(data => {
					if (data == true) {
                        this.click.buttonClick(RiskAssessmentOR.btnAddRiskLevel);
                        console.log("Added new RiskLevel");
						// RiskAssessmentOR.listRiskLevel.then(length => {
						//    var RiskLength = length.length;
						let last = RiskAssessmentOR.listRiskLevel.last();	
						last.sendKeys(RiskAssessmentData.addRiskLevel);
						//this.click.buttonClick(RiskAssessmentOR.btnAddRiskLevel);
                        this.verifyDeleteAddRisk("submit");
                        console.log(" RiskLevel is deleted");
					}
				});
			}
		});
	}

	verifyDeleteRiskMappingModal(action: string) {
		RiskAssessmentOR.lblHeaderRiskLevel.isDisplayed().then(isDisplayed => {
			if (isDisplayed == true) {
				this.verifyMessageWhenVendorPaired();
				RiskAssessmentOR.lblHeaderVendor.isDisplayed().then(isDisplayed => {
					if (isDisplayed == true) {
						this.verifyVendorListWhenPaired();
						this.selectMappingWhenDeleted[1];
						if (action == "save") {
                            this.click.buttonClick(RiskAssessmentOR.btnModalApply);
                            console.log("Apply Modal RiskLevel is clicked");
						} else if ((action = "cancel")) {
							this.click.buttonClick(RiskAssessmentOR.btnModalCancel);
						}
					}
				});
			} else console.log("Risk Mapping modal is not present");
		});
	}

	verifyVendorListWhenPaired() {
		RiskAssessmentOR.lblHeaderProduct.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
		});
		var listVendor = RiskAssessmentOR.listVendor;
		listVendor.each(function(element, index) {
			element.getText().then(function(text) {
				console.log("list Vendor " + index, text);
			});
		});
		var prodList = RiskAssessmentOR.listProduct;
		prodList.each(function(element, index) {
			element.getText().then(function(text) {
				console.log("list product " + index, text);
			});
		});
		RiskAssessmentOR.lblHeaderRiskLevel.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
		});
	}

	verifyMessageWhenVendorPaired() {
		RiskAssessmentOR.msgRiskOverOA.getText().then(data => {
			let message = data.toString().trim();
			expect(message).toContain(RiskAssessmentData.msgRiskOverOA);
			//this.assertEquals(message, RiskAssessmentData.msgRiskOverOA);
		});
	}

    selectMappingWhenDeleted(selectRisk: number) {
       RiskAssessmentOR.selectRiskLevelMapping.isDisplayed().then(isDisplayed => {
		   while (isDisplayed = false) {
				this.click.buttonClick(RiskAssessmentOR.selectRiskLevel);			
							this.select.selectElementByIndex(RiskAssessmentOR.selectRiskLevelMapping,selectRisk);
						}
					});
        //SELECT ALL having select risk level rext 
	}

	verifySubmitRiskAssesment(action: string) {
        if (action == "apply") {
            RiskAssessmentOR.btnApplyChanges.isEnabled().then(applyChanges => {
                if ((applyChanges = true)) {
                    this.click.buttonClick(RiskAssessmentOR.btnApplyChanges);
                }
                else this.selectMappingWhenDeleted(1);
            });
        } else if (action == "cancel") {
            this.click.buttonClick(RiskAssessmentOR.btnCancelRiskLevel);
        }
        else
            console.log("Risk mapping is still not completed");
	}
}
