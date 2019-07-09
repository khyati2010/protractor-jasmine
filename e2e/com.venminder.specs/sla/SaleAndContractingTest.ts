const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const until = protractor.ExpectedConditions;
import { browser, element, by, protractor, Browser } from 'protractor';
import { addSoftware } from "../../com.venminder.page/SalesAndContractingPage";
import { SalesAndContractingOR } from "../../com.venminder.page_object/onboarding/SalesAndContractingPageOR";

describe("Test the functionality for adding onboarding from software sell and contracting", function () {
    let addOnboarding = new addSoftware();
    let salesAndContractingOr = new SalesAndContractingOR();

    it("login with DCadmin credentials", function () {
        addOnboarding.openUrl();
        addOnboarding.addUsername();
        addOnboarding.addPassword();
        addOnboarding.clickLoginBtn();
    });

    it("click on sales and contracting tab", function () {
        browser.wait(until.presenceOf(salesAndContractingOr.salesAndContractingTab), 10000);
        expect(browser.getTitle()).to.eventually.equal("Dashboard");
        addOnboarding.clickSalesAndContracting();
    });

    it("select existing client for onboarding software request", function () {
        expect(browser.getTitle()).to.eventually.equal("DC Sales");
        addOnboarding.clickNewClientSale();
        expect(browser.getTitle()).to.eventually.equal("New Client Sale");
        addOnboarding.inputClientName("a");
        addOnboarding.clickClientSearchBtn();
    })
});
