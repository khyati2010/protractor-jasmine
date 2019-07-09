import { BasePage } from "../shared/BasePage";
import { TextBox } from "./../../com.venminder.utilities/TextBox";
import { browser, protractor } from "protractor";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { ScrollPage } from "../../com.venminder.utilities/ScrollPage";
import { Click } from "../../com.venminder.utilities/Click";
import { OversightRequirementOR } from "../../com.venminder.page_object/dashboard/OversightRequirementOR";
import { OversightRequirementPage } from "../../com.venminder.page/dashboard/OversightRequirementPage";
import { OversightRequirementData } from "../../com.venminder.testdata/TestData";

export class OversightRequirementManagePage extends BasePage {
	textbox = new TextBox();
	click = new Click();
	select = new SelectDropDown();
	scrollpage = new ScrollPage();
	oversightRequirementPage = new OversightRequirementPage();
	randtxt: string;
	prodtxt: string;
	a: string;
	a1: string;
	a2: string;
	selectLabel: string;

	verifyManageVendor() {
		let beforeOwner: any;
		let afterowner: any;
		let afterDate: any;
		let beforeDate: any;
		let header: any;
		var a: any, a1: any, a2: any;
		let req: any;
		OversightRequirementOR.lblManageTaskHead.getText().then(data => {
			let taskName = data.toString().trim();
			console.log(
				"As Product tab is not present, hence Manage task is at vendor level, task name is " +
					taskName
			);
		});
		this.click.buttonClick(OversightRequirementOR.dropdwnOwnerTask);
		this.click.buttonClick(OversightRequirementOR.selectOwnerdrpdwn);
		OversightRequirementOR.lblOwnerSelected.getText().then(data => {
			beforeOwner = data.toString().trim();
			console.log("New Owner Selected :" + beforeOwner);
			this.click.buttonClick(OversightRequirementOR.selectDateTask);
			OversightRequirementOR.selectDateTask.clear();
			this.textbox.setTextValue(
				OversightRequirementOR.selectDateTask,
				OversightRequirementData.date
			);
			this.click.buttonClick(OversightRequirementOR.lblManageTaskHead);
			OversightRequirementOR.lblManageTaskHead.getText().then(data => {
				header = data.toString().trim();
				console.log("Heading : " + header);
				a = header.split(": ");
				a1 = a[0];
				a2 = a[1].trim();
				console.log("Break Vendor Name :" + a2);
				OversightRequirementOR.selectDateTask
					.getAttribute("value")
					.then(data => {
						beforeDate = data.toString().trim();
						console.log("New date selected: " + beforeDate);
						OversightRequirementOR.btnSubmitManageTask
							.isDisplayed()
							.then(data => {
								this.assertEquals(data, true);
								this.click.buttonClick(
									OversightRequirementOR.btnSubmitManageTask
								);
								browser.sleep(8000);
								console.log("Manage task submit button is working fine.");
								OversightRequirementOR.reqlistall.getText().then(data => {
									req = data.toString().trim();
									OversightRequirementOR.reqlistall.isDisplayed().then(data => {
										expect(req).toContain(a2);
										OversightRequirementOR.verifyDate(a2)
											.getText()
											.then(data => {
												afterDate = data.toString().trim();
												console.log("After editing date :" + afterDate);
												OversightRequirementOR.verifyDate(a2)
													.isDisplayed()
													.then(data => {
														this.assertEquals(beforeDate, afterDate);
														OversightRequirementOR.verfyOwner(a2)
															.getText()
															.then(data => {
																afterowner = data.toString().trim();
																console.log(
																	"After editing owner :" + afterowner
																);
																OversightRequirementOR.verfyOwner(a2)
																	.isDisplayed()
																	.then(data => {
																		this.assertEquals(beforeOwner, afterowner);
																		console.log(
																			"Manage Task is working fine at vendor level"
																		);
																	});
															});
													});
											});
									});
								});
							});
					});
			});
		});
	}

	manageVendorDeleteTask() {
		browser.sleep(3000);
		this.click.buttonClick(OversightRequirementOR.btnActions);
		this.click.buttonClick(OversightRequirementOR.lblMangeTask);
		this.click.buttonClick(OversightRequirementOR.btnDeleteTask);
		OversightRequirementOR.lblDeleteTaskHeader.isDisplayed().then(data => {
			this.assertEquals(data, true);
			this.click.buttonClick(OversightRequirementOR.checkboxDelete);
		});
		this.click.buttonClick(OversightRequirementOR.btnDeleteSubmit);
		console.log("Delete Task is working fine.");
	}

	manageVendorCancelTask() {
		this.click.buttonClick(OversightRequirementOR.btnActions);
		this.click.buttonClick(OversightRequirementOR.lblMangeTask);
		OversightRequirementOR.btnManageCancel.isDisplayed().then(data => {
			this.assertEquals(data, true);
			this.click.buttonClick(OversightRequirementOR.btnManageCancel);
			console.log("Cancel functionality working fine.");
		});
	}

	verifyManageProduct() {
		browser.sleep(3000);
		let afterOwner: any;
		let afterDate: any;
		let Header;
		let a, a1, a2;
		this.oversightRequirementPage.addCustomOversightRequirement(
			OversightRequirementData.oversightRequirementLevel[1],
			OversightRequirementData.addProductLevelOversightRequirement +
				new BasePage().generateRandomText(),
			OversightRequirementData.oversightSelectType[2]
		);
		this.textbox.setTextValue(
			OversightRequirementOR.selectdateProd,
			OversightRequirementData.date
		);
		this.click.buttonClick(OversightRequirementOR.drpdwnOwnerProd);
		this.click.buttonClick(OversightRequirementOR.drpdwnselectOwnerProd);
		this.click.buttonClick(OversightRequirementOR.btnsubmitProd);
		console.log("Individual Submission successfully");
		browser.sleep(2000);
		this.click.buttonClick(OversightRequirementOR.btnSelectActionsProd);
		this.click.buttonClick(OversightRequirementOR.btnSelectManageProd);
		this.click.buttonClick(OversightRequirementOR.dropdwnOwnerTask);
		this.click.buttonClick(OversightRequirementOR.selectOwnerdrpdwn);
		OversightRequirementOR.lblOwnerSelected.getText().then(data => {
			afterOwner = data.toString().trim();
			console.log("New Owner Selected :" + afterOwner);
			this.click.buttonClick(OversightRequirementOR.selectDateTask);
			OversightRequirementOR.selectDateTask.clear();
			this.textbox.setTextValue(
				OversightRequirementOR.selectDateTask,
				OversightRequirementData.date
			);
			this.click.buttonClick(OversightRequirementOR.lblManageTaskHead);
			OversightRequirementOR.selectDateTask.getAttribute("value").then(data => {
				afterDate = data.toString().trim();
				console.log("New date selected: " + afterDate);
				this.click.buttonClick(OversightRequirementOR.dropdwnProduct);
				this.textbox.setTextValue(
					OversightRequirementOR.txtSearchPrdct,
					OversightRequirementData.RandomText
				);
				browser.sleep(2000);
				OversightRequirementOR.lblNoprdct.getText().then(data => {
					this.assertEquals(data, OversightRequirementData.compareText);
					OversightRequirementOR.txtSearchPrdct.clear();
					this.click.buttonClick(OversightRequirementOR.selectPrdctList);
					this.click.buttonClick(OversightRequirementOR.deselectALLPrdct);
					this.click.buttonClick(OversightRequirementOR.selectALLPrdct);
					OversightRequirementOR.lblManageTaskHead.getText().then(data => {
						Header = data.toString().trim();
						console.log("Heading : " + Header);
						a = Header.split(": ");
						a1 = a[0];
						a2 = a[1].trim();
						console.log("Break Vendor Name :" + a2);
						this.click.buttonClick(OversightRequirementOR.btnSubmitManageTask);
						browser.sleep(8000);
						OversightRequirementOR.reqlistall.isDisplayed().then(data => {
							expect(OversightRequirementOR.reqlistall.getText()).toContain(a2);
							OversightRequirementOR.verifyDate(a2)
								.isDisplayed()
								.then(data => {
									this.assertEquals(
										OversightRequirementOR.verifyDate(a2).getText(),
										afterDate
									);
									OversightRequirementOR.verfyOwner(a2)
										.isDisplayed()
										.then(data => {
											this.assertEquals(
												OversightRequirementOR.verfyOwner(a2).getText(),
												afterOwner
											);
											console.log(
												"Manage Task at Product Level is working fine."
											);
										});
								});
						});
					});
				});
			});
		});
	}

	showHideDisabledRequirement() {
		browser.sleep(3000);
		let oversightSelected;
		let disabledReq;
		OversightRequirementOR.lblShowDisabledReq.isDisplayed().then(data => {
			if (data == true) {
				this.click.buttonClick(OversightRequirementOR.lblShowDisabledReq);
				this.scrollpage.scrollDown();
			}
		});
		OversightRequirementOR.reqlistall.getText().then(data => {
			var listreq = data.toString().trim();
			if (listreq.indexOf("- disabled") != -1) {
				console.log(
					"After enabling show disabled requirements button, disabled requirements displayed."
				);
			} else {
				console.log("There are no disabled oversight requirement present.");
				this.click.buttonClick(OversightRequirementOR.btnXdisable);
				OversightRequirementOR.lblDisableModal.isDisplayed().then(data => {
					this.assertEquals(data, true);
					OversightRequirementOR.lblReqSelected.getText().then(data => {
						oversightSelected = data.toString().trim();
						console.log("Oversight selected for disable :" + oversightSelected);
						this.click.buttonClick(OversightRequirementOR.btnSubmitDisable);
						OversightRequirementOR.lbldisabledReq(oversightSelected)
							.getText()
							.then(data => {
								let reqDisabled = data.toString().trim();
								console.log(
									"After X button operation, item disabled :" + reqDisabled
								);
							});
					});
				});
			}
			OversightRequirementOR.lblDisable.getText().then(data => {
				disabledReq = data.toString().trim();
				console.log("Requirement Name with status :" + disabledReq);
				this.a = disabledReq.split(" -");
				console.log("A :" + this.a);
				this.a1 = disabledReq[0];
				console.log("A1 :" + this.a1);
				this.a2 = disabledReq[1];
				console.log("A2 :" + this.a2);
				console.log("Disabled requirement selected :" + this.a1);
				OversightRequirementOR.enableReq(this.a1)
					.getText()
					.then(data => {
						let reqName = data.toString().trim();
						OversightRequirementOR.enableReq(this.a1)
							.isDisplayed()
							.then(data => {
								expect(reqName).toContain("Enable");
								console.log(
									"After enabling show disabled requirements button, Enable button also present."
								);
								this.click.buttonClick(
									OversightRequirementOR.checkEnable(this.a1)
								);
								browser.sleep(3000);
								OversightRequirementOR.checkSubmit(this.a1)
									.getText()
									.then(data => {
										let reqName1 = data.toString().trim();
										OversightRequirementOR.checkSubmit(this.a1)
											.isDisplayed()
											.then(data => {
												this.assertEquals(reqName1, "Submit");
												console.log(
													"After clicking enable button, requirement is enabled"
												);
											});
									});
							});
					});
			});
		});
	}

	actionButtonDisable() {
		let oversightSelected;
		this.textbox.setTextValue(
			OversightRequirementOR.txtSelectDate,
			OversightRequirementData.date
		);
		this.click.buttonClick(OversightRequirementOR.txtSelectOwner);
		this.click.buttonClick(OversightRequirementOR.dropdownOwnerSelected);
		this.click.buttonClick(OversightRequirementOR.btnSubmitSelected);
		browser.sleep(2000);
		this.click.buttonClick(OversightRequirementOR.btnActionSelected);
		this.click.buttonClick(OversightRequirementOR.btnDisableSelected);
		OversightRequirementOR.lblDisableModal.isDisplayed().then(data => {
			this.assertEquals(data, true);
			OversightRequirementOR.lblReqSelected.getText().then(data => {
				oversightSelected = data.toString().trim();
				console.log("Oversight selected for disable :" + oversightSelected);
				this.click.buttonClick(OversightRequirementOR.btnSubmitDisable);
				OversightRequirementOR.lbldisabledReq(oversightSelected)
					.getText()
					.then(data => {
						data.toString().trim();
						console.log(
							"Clicking on Action and then disabled oversight, item disabled."
						);
					});
			});
		});
		browser.sleep(2000);
		this.click.buttonClick(OversightRequirementOR.lblShowDisabledReq);
		OversightRequirementOR.reqlistall.getText().then(data => {
			var listreq = data.toString().trim();
			if (listreq.indexOf("- disabled") != 1) {
				console.log(
					"After disabling show disabled requirements button, disabled requirements are not displayed : " +
						listreq
				);
			} else {
				console.log("Show disabled requirement button is not working.");
			}
		});
	}
}
