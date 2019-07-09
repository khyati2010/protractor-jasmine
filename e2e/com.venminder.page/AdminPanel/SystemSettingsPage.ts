import { VendorDashboardPage } from "./../dashboard/VendorDashboardPage";
import { BasePage } from "../shared/BasePage";
import { UserRolesPage } from "./UserRolesPage";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { userData } from "../../com.venminder.testdata/TestData";
import { AddVendorPage } from "../../com.venminder.page/dashboard/AddVendorPage";
import { browser } from "protractor";
import { SystemSettingsOR } from "../../com.venminder.page_object/adminPanel/SystemSettingsOR";
import { ScrollPage } from "../../com.venminder.utilities/ScrollPage";
import { BasePageOR } from "./../../com.venminder.page_object/shared/BasePageOR";
import { OversightRequirementOR } from "../../com.venminder.page_object/dashboard/OversightRequirementOR";

export class SystemSettingsPage extends BasePage {
	textbox = new TextBox();
	click = new Click();
	select = new SelectDropDown();
	scroll = new ScrollPage();
	addvendor = new AddVendorPage();
	userrolespage = new UserRolesPage();
	vendorDashboardPage = new VendorDashboardPage();

	verifySystemSettingScreen() {
		browser.sleep(3000);
		SystemSettingsOR.lblAdminPanel.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			console.log("Admin panel label is visible on system setting screen.");
		});
		SystemSettingsOR.lblSettings.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			console.log("Settings label is visible on system setting screen.");
		});
		SystemSettingsOR.lblRiskApprovalSettings.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			console.log(
				"Risk Approval Setting label is visible on system setting screen."
			);
		});
		SystemSettingsOR.lblDocumentStorage.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			console.log(
				"Document storage label is visible on system setting screen."
			);
		});
		SystemSettingsOR.lblOversightReq.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			console.log(
				"Oversight Requirement label is visible on system setting screen."
			);
		});
		SystemSettingsOR.lblCategory.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			console.log(
				"Category Management label is visible on system setting screen."
			);
		});
	}

	changeRiskApproverSetting() {
		this.scroll.scrollUp();
		browser.sleep(2000);
		SystemSettingsOR.msgRiskOff.isPresent().then(data => {
			if (data == true) {
				this.click.buttonClick(SystemSettingsOR.btnRiskApprovalSettingsON);
			} else
				this.click.buttonClick(SystemSettingsOR.btnRiskApprovalSettingsOFF);
		});
	}

	selectFromList(name: string) {
		SystemSettingsOR.dropDownDownload.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			this.select.selectElementByText(SystemSettingsOR.dropDownDownload, name);
		});
		SystemSettingsOR.btnDocumentSaveSettings.isPresent().then(isDisplayed => {
			if (isDisplayed) {
				SystemSettingsOR.dropDownDownload
					.$("option:checked")
					.getText()
					.then(text => {
						this.assertEquals(text.trim(), name);
						console.log("Save button displayed");
					});
			} else {
				this.select.selectElementByIndex(SystemSettingsOR.dropDownDownload, 1);
				console.log(
					"Save button was not displayed, hence picked up other option"
				);
			}
		});
	}

	selectFromServicePermissionList(name: string, action: string) {
		SystemSettingsOR.lblServicePermissions.isPresent().then(isDisplayed => {
			if (isDisplayed == true) {
				SystemSettingsOR.dropDownManageOrders
					.isDisplayed()
					.then(isDisplayed => {
						this.assertEquals(isDisplayed, true);
						this.select.selectElementByText(
							SystemSettingsOR.dropDownManageOrders,
							name
						);
					});
				SystemSettingsOR.btnServiceSaveSettings
					.isPresent()
					.then(isDisplayed => {
						if (isDisplayed) {
							SystemSettingsOR.dropDownManageOrders
								.$("option:checked")
								.getText()
								.then(text => {
									this.assertEquals(text.trim(), name);
									console.log("Save button displayed");
								});
						} else {
							this.select.selectElementByText(
								SystemSettingsOR.dropDownManageOrders,
								"Admins only"
							);
							console.log(
								"Save button was not displayed, hence picked up other option"
							);
						}
					});
				this.clickServicePermissionSaveSetting(action);
			} else console.log("service permission section is not present");
		});
	}

	clickRiskSetting(action: string) {
		if (action == "save") {
			SystemSettingsOR.btnRiskSaveSettings.isDisplayed().then(isDisplayed => {
				this.assertEquals(isDisplayed, true);
				this.click.buttonClick(SystemSettingsOR.btnRiskSaveSettings);
				SystemSettingsOR.msgSavedText.isDisplayed().then(isDisplayed => {
					this.assertEquals(isDisplayed, true);
					SystemSettingsOR.msgSavedText.getText().then(text => {
						let textMessage = text.toString().trim();
						console.log("Text after saving data :" + textMessage);
						browser.sleep(1000);
					});
				});
			});
		} else if (action == "cancel") {
			SystemSettingsOR.btnRiskCancelSettings.isDisplayed().then(isDisplayed => {
				this.assertEquals(isDisplayed, true);
				this.click.buttonClick(SystemSettingsOR.btnRiskCancelSettings);
			});
		}
	}

	verifyRiskApproversCount() {
		SystemSettingsOR.lblNumberOfRiskApprovers
			.isDisplayed()
			.then(isDisplayed => {
				if (isDisplayed) {
					SystemSettingsOR.lblNumberOfRiskApprovers.getText().then(text => {
						let count = parseInt(text.toString().trim());
						SystemSettingsOR.riskApproverList.count().then(list => {
							this.assertEquals(count, list);
						});
					});
				}
			});
	}

	clickDocumentStorageSetting(action: string) {
		if (action == "save") {
			SystemSettingsOR.btnDocumentSaveSettings
				.isDisplayed()
				.then(isDisplayed => {
					this.assertEquals(isDisplayed, true);
					this.click.buttonClick(SystemSettingsOR.btnDocumentSaveSettings);
				});
			SystemSettingsOR.msgDocSaveText.isDisplayed().then(isDisplayed => {
				this.assertEquals(isDisplayed, true);
				SystemSettingsOR.msgDocSaveText.getText().then(text => {
					let textMessage = text.toString().trim();
					console.log("Text after saving data :" + textMessage);
					browser.sleep(1000);
				});
			});
		} else if (action == "cancel") {
			SystemSettingsOR.btnDocumentCancelSettings
				.isDisplayed()
				.then(isDisplayed => {
					this.assertEquals(isDisplayed, true);
					this.click.buttonClick(SystemSettingsOR.btnDocumentCancelSettings);
				});
		}
	}

	clickServicePermissionSaveSetting(action: string) {
		if (action == "save") {
			SystemSettingsOR.btnServiceSaveSettings
				.isDisplayed()
				.then(isDisplayed => {
					this.assertEquals(isDisplayed, true);
					this.click.buttonClick(SystemSettingsOR.btnServiceSaveSettings);
				});
			SystemSettingsOR.msgServiceSaveText.isDisplayed().then(isDisplayed => {
				this.assertEquals(isDisplayed, true);
				SystemSettingsOR.msgServiceSaveText.getText().then(text => {
					let textMessage = text.toString().trim();
					console.log("Text after saving data :" + textMessage);
					browser.sleep(1000);
				});
			});
		} else if (action == "cancel") {
			SystemSettingsOR.btnServiceCancelSettings
				.isDisplayed()
				.then(isDisplayed => {
					if (isDisplayed == true) {
						this.click.buttonClick(SystemSettingsOR.btnServiceCancelSettings);
					} else
						console.log(
							"Service permission cancel setting button is not displayed."
						);
				});
		}
	}

	verifyInformationalModal() {
		SystemSettingsOR.oversightInfoIcon.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			this.click.buttonClick(SystemSettingsOR.oversightInfoIcon);
			this.click.buttonClick(SystemSettingsOR.btnInfoClose);
		});
	}

	verifyORTurnOn(action: string) {
		browser.sleep(1000);
		SystemSettingsOR.lblOnText.isPresent().then(data => {
			if (data == true) {
				if (action == "save") {
					SystemSettingsOR.btnOversightON.isEnabled().then(isEnabled => {
						if (isEnabled == false) {
							this.click.buttonClick(SystemSettingsOR.btnOversightON);
							SystemSettingsOR.btnSaveChanges
								.isDisplayed()
								.then(isDisplayed => {
									if (isDisplayed == true) {
										this.click.buttonClick(SystemSettingsOR.btnSaveChanges);
										browser.sleep(1000);
										console.log(
											"Saved Text :" +
												SystemSettingsOR.msgOversightSavdTxt.getText()
										);
									}
								});
						} else this.click.buttonClick(SystemSettingsOR.btnOversightOFF);
					});
				} else if (action == "cancel") {
					SystemSettingsOR.btnCancel.isDisplayed().then(isDisplayed => {
						this.assertEquals(isDisplayed, true);
						this.click.buttonClick(SystemSettingsOR.btnCancel);
					});
				}
			} else console.log("Oversight Requirement tile is not present");
		});
	}

	verifyCategoryInformationalModal() {
		SystemSettingsOR.categoryInfoIcon.isDisplayed().then(isDisplayed => {
			if (isDisplayed) {
				this.click.buttonClick(SystemSettingsOR.categoryInfoIcon);
				this.click.buttonClick(SystemSettingsOR.btnInfoClose);
			} else {
				console.log("Category Informational Modal is not displayed");
			}
		});
	}

	verifyCategoryTurnOn(action: string) {
		browser.sleep(1000);
		this.click.buttonClick(SystemSettingsOR.btnCategoryMangmnt);
		if (action == "save") {
			SystemSettingsOR.btnCategorySaveChanges
				.isDisplayed()
				.then(isDisplayed => {
					this.assertEquals(isDisplayed, true);
					this.click.buttonClick(SystemSettingsOR.btnCategorySaveChanges);
					browser.sleep(1000);
					SystemSettingsOR.msgCategorySavdTxt.getText().then(text => {
						let CategorySavedText = text.toString().trim();
						console.log("Saved Text :" + CategorySavedText);
					});
				});
		} else if (action == "cancel") {
			SystemSettingsOR.btnCancelCategory.isDisplayed().then(isDisplayed => {
				this.assertEquals(isDisplayed, true);
				this.click.buttonClick(SystemSettingsOR.btnCancelCategory);
			});
		}
	}

	verifyCategoryTurnOff(action: string) {
		browser.sleep(1000);
		this.click.buttonClick(SystemSettingsOR.btnCategoryMangmnt);
		if (action == "save") {
			SystemSettingsOR.btnCategorySaveChanges
				.isDisplayed()
				.then(isDisplayed => {
					this.assertEquals(isDisplayed, true);
					this.click.buttonClick(SystemSettingsOR.btnCategorySaveChanges);
				});
			browser.sleep(1000);
			SystemSettingsOR.msgCategorySavdTxt.getText().then(text => {
				let OversightSavedText2 = text.toString().trim();
				console.log("Saved Text :" + OversightSavedText2);
			});
		} else if (action == "cancel") {
			SystemSettingsOR.btnCancelCategory.isDisplayed().then(isDisplayed => {
				this.assertEquals(isDisplayed, true);
				this.click.buttonClick(SystemSettingsOR.btnCancelCategory);
			});
		}
	}

	verifyAddVendorProduct() {
		let basePage = new BasePage();
		SystemSettingsOR.colorGreenCategory
			.getCssValue("background-color")
			.then(value => {
				var a = value;
				console.log("value of background : " + value);
				var b = "rgba(125, 195, 25, 1)";
				if (a.toString() == b.toString()) {
					console.log("Category Management is Turn On");
					browser.get(userData.URL_HOME_PAGE);
					browser.sleep(1000);
					basePage.searchVendorAndGoToDashboardPage(
						BasePageOR.inputVendorSearch_old,
						BasePageOR.vendorNameSearchList_old
					);
					this.vendorDashboardPage.clickOnProductProfileTab();
					browser.sleep(1000);
					this.click.buttonClick(OversightRequirementOR.btnAddNewPrdct);
					console.log("Add new product  button is clicked.");
					this.click.buttonClick(OversightRequirementOR.btnNewProduct);
					var rndm = this.generateRandomText();
					console.log("Product Value :" + rndm);
					this.textbox.setTextValue(
						OversightRequirementOR.txtProductType,
						this.generateRandomText()
					);
					browser.sleep(2000);
					OversightRequirementOR.btnSubmit.isEnabled().then(isEnabled => {
						this.assertEquals(isEnabled, false);
						console.log("Submit button is disabled as category is required.");
					});
				} else {
					console.log("Category Management is Turn Off");
					browser.get(userData.URL_HOME_PAGE);
					browser.sleep(2000);
					basePage.searchVendorAndGoToDashboardPage(
						BasePageOR.inputVendorSearch_old,
						BasePageOR.vendorNameSearchList_old
					);
					this.vendorDashboardPage.clickOnProductProfileTab();
					browser.sleep(2000);
					this.click.buttonClick(OversightRequirementOR.btnAddNewPrdct);
					this.click.buttonClick(OversightRequirementOR.btnNewProduct);
					var rndm = this.generateRandomText();
					console.log("Product Value :" + rndm);
					this.textbox.setTextValue(
						OversightRequirementOR.txtProductType,
						this.generateRandomText()
					);
					browser.sleep(4000);
					OversightRequirementOR.btnSubmit.isEnabled().then(isDisplayed => {
						this.assertEquals(isDisplayed, true);
						console.log(
							"Submit button is enable, as category is not required."
						);
					});
				}
			});
	}

	verifyEditVendorProduct() {
		this.click.buttonClick(SystemSettingsOR.btnUserIcon);
		this.click.buttonClick(SystemSettingsOR.btnAdminPanel);
		SystemSettingsOR.lblSystemSetting.isDisplayed().then(isDisplayed => {
			this.assertEquals(isDisplayed, true);
			browser.sleep(12000);
			this.click.buttonClick(SystemSettingsOR.lblSystemSetting);
		});
		browser.sleep(2000);
		SystemSettingsOR.colorGreenCategory
			.getCssValue("background-color")
			.then(value => {
				var a = value;
				console.log("value of background : " + value);
				var b = "rgba(125, 195, 25, 1)";
				if (a.toString() == b.toString()) {
					console.log("Category Management is initially On");
					this.click.buttonClick(SystemSettingsOR.btnCategoryMangmnt);
					browser.sleep(2000);
					this.click.buttonClick(SystemSettingsOR.btnCategorySaveChanges);
					console.log("Category Management is now Off");
					browser.get(userData.URL_HOME_PAGE);
					browser.sleep(10000);
					this.addvendor.createNew1Vendor();
					browser.sleep(6000);
					SystemSettingsOR.lblVendorName.getText().then(data => {
						let vend = data.toString().trim();
						console.log("Vendor Created : " + vend);
						browser.sleep(2000);
						this.click.buttonClick(SystemSettingsOR.btnUserIcon);
						this.click.buttonClick(SystemSettingsOR.btnAdminPanel);
						browser.sleep(5000);
						SystemSettingsOR.lblSystemSetting
							.isDisplayed()
							.then(isDisplayed => {
								this.assertEquals(isDisplayed, true);
								browser.sleep(10000);
								this.click.buttonClick(SystemSettingsOR.lblSystemSetting);
								browser.sleep(4000);
								this.click.buttonClick(SystemSettingsOR.btnCategoryMangmnt);
								browser.sleep(2000);
								this.click.buttonClick(SystemSettingsOR.btnCategorySaveChanges);
								console.log(
									"Category Management is now On, after adding vendor"
								);
								this.click.buttonClick(SystemSettingsOR.btnHomeLink);
								browser.sleep(10000);
								SystemSettingsOR.vendorSearchListHome.getText().then(data => {
									expect(data.toString()).toContain(vend);
									SystemSettingsOR.vendorSearchHome(vend).click();
									browser.sleep(6000);
									OversightRequirementOR.prdctProfileTab
										.isDisplayed()
										.then(isDisplayed => {
											this.assertEquals(isDisplayed, true);
											this.click.buttonClick(
												OversightRequirementOR.prdctProfileTab
											);
											browser.sleep(3000);
											SystemSettingsOR.btnEditProduct
												.isDisplayed()
												.then(isDisplayed => {
													this.assertEquals(isDisplayed, true);
													this.click.buttonClick(
														SystemSettingsOR.btnEditProduct
													);
													browser.sleep(4000);
													this.click.buttonClick(
														SystemSettingsOR.btnSubmitEdit
													);
													SystemSettingsOR.btnSubmitEdit
														.isPresent()
														.then(data => {
															this.assertEquals(data, true);
															console.log(
																"Not able to save data as category field is empty"
															);
														});
												});
										});
								});
							});
					});
				} else {
					console.log("Category Management is Initially Off");
					browser.get(userData.URL_HOME_PAGE);
					browser.sleep(10000);
					this.addvendor.createNew1Vendor();
					browser.sleep(6000);
					SystemSettingsOR.lblVendorName.getText().then(data => {
						let vend1 = data.toString().trim();
						console.log("Vendor Created :" + vend1);
						browser.sleep(2000);
						this.click.buttonClick(SystemSettingsOR.btnUserIcon);
						this.click.buttonClick(SystemSettingsOR.btnAdminPanel);
						browser.sleep(5000);
						SystemSettingsOR.lblSystemSetting
							.isDisplayed()
							.then(isDisplayed => {
								this.assertEquals(isDisplayed, true);
								browser.sleep(10000);
								this.click.buttonClick(SystemSettingsOR.lblSystemSetting);
								browser.sleep(4000);
								this.click.buttonClick(SystemSettingsOR.btnCategoryMangmnt);
								browser.sleep(2000);
								this.click.buttonClick(SystemSettingsOR.btnCategorySaveChanges);
								console.log("Category Management is On after adding vendor");
								this.click.buttonClick(SystemSettingsOR.btnHomeLink);
								browser.sleep(10000);
								SystemSettingsOR.vendorSearchListHome.getText().then(data => {
									expect(data.toString()).toContain(vend1);
									SystemSettingsOR.vendorSearchHome(vend1).click();
									browser.sleep(5000);
									OversightRequirementOR.prdctProfileTab
										.isDisplayed()
										.then(isDisplayed => {
											this.assertEquals(isDisplayed, true);
											this.click.buttonClick(
												OversightRequirementOR.prdctProfileTab
											);
											browser.sleep(3000);
											this.click.buttonClick(SystemSettingsOR.btnEditProduct);
											browser.sleep(4000);
											this.click.buttonClick(SystemSettingsOR.btnSubmitEdit);
											SystemSettingsOR.btnSubmitEdit.isPresent().then(data => {
												this.assertEquals(data, true);
												console.log(
													"Not able to save data as category field is empty"
												);
											});
										});
								});
							});
					});
				}
			});
	}
}
