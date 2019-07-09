import { browser, element, by, protractor } from 'protractor';

export class SlaDetailsOR {

	static inputTitle = element(by.id("inputTitle"));
	static inputNotes = element(by.id("inputNotes"));
	static dropDownSlaCategory = element(by.className("form-control au-target"));
	static dropDownSelectProduct = element(by.css('option[value="y"]'));
	static addNewCategory = element(by.id("newcategory"));
	static uploadContractButton = element(by.id("btnContractUpload0"));
	static browseButton = element(by.xpath("//span[contains(text(),'Browse')]/input"));
	static slaCreateContinue = element.all(by.buttonText("Continue"));
	static closePopup = element(by.xpath("//button[@type='button']"));
	static submitButton = element(by.id("btnSubmitContract"));



}