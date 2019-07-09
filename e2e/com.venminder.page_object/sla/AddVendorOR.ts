import { browser, element, by, protractor } from 'protractor';

export class AddVendorOR {
	

	static vendorAutocompelete = element.all(by.className("vm-autocomplete-input"));
	static vendorList = element(by.className("list-group-item"));
	static productCheckbox = element.all(by.xpath("//input[@type='checkbox']"));
    static selectProduct = element(by.className("vm-autocomplete-input"));
	static selectProductContinue = element(by.id("btnSLACreateContinue"));
	

}