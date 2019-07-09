import { browser, element, by, protractor } from 'protractor';

export class VenminderHomeOR {


    static hamburgerMenu = element(by.xpath("//i[@class='fa fa-bars']"));
	static slaManagementIpad = element(by.xpath("//span[contains(text(),'SLA Management')]"));
	static assesment = element(by.xpath("//i[@class='fa fa-question-circle fa-fw']"));
	static hamburgerMenu2 = element(by.xpath("//div[@class='menu-icon grayBlueBG left pointer']"));
	static slaManagementIpad2 = element(by.xpath("//li[contains(text(),'SLA Management')]"));
	static slaManagementDesktop = element(by.xpath("//span[contains(text(),'SLA Management')]"));
	



}