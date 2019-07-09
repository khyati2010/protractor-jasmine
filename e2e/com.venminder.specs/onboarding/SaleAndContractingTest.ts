import { browser } from "protractor";
import { AddSoftware } from "../../com.venminder.page/onboarding/SalesAndContractingPage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { siteUrls } from "../../com.venminder.testdata/TestData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

describe("Test the functionality for adding onboarding from software sell and contracting", () => {
    const addOnboarding = new AddSoftware();
    const siteUrl = new siteUrls();
    const login = new LoginPage();

    it("login with DCadmin credentials", () => {
        login.openUrl(siteUrl.sand_dev_2_url);
        addOnboarding.addUsername();
        addOnboarding.addPassword();
        addOnboarding.clickLoginBtn();
    });

    it("click on sales and contracting tab", () => {
        expect(browser.getTitle()).to.eventually.equal("Dashboard");
        addOnboarding.clickSalesAndContracting();
    });

    it("select existing client for onboarding software request", () => {
        expect(browser.getTitle()).to.eventually.equal("DC Sales");
        addOnboarding.clickNewClientSale();
        expect(browser.getTitle()).to.eventually.equal("New Client Sale");
        addOnboarding.inputClientName("a");
        addOnboarding.clickClientSearchBtn();
    });
});
