import { browser, element, by, protractor, Browser, WebElement } from "protractor";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { CreateSlaPage } from "../../com.venminder.page/sla/CreateSlaPage";
import { siteUrls, userData } from "../../com.venminder.utilities/TestData";
import { PassThrough } from "stream";
import { SlaMonitorPage } from "../../com.venminder.page/sla/SlaMonitorPage";
import { FileHandling } from "../../com.venminder.utilities/FileHandling";
var userHome = require('user-home');

describe("Setup SLA functionality", function () {
    let loginPage = new LoginPage();
    let sla = new CreateSlaPage();
    let slaMonitor = new SlaMonitorPage();
    let siteUrl = new siteUrls();
    let credential = new userData();


    it("Sla Monitor Setup", function () {
        FileHandling.fileWrite();
        var filePath = userHome + "\\Random.txt ";
        console.log(filePath);
        loginPage.openUrl(siteUrl.sand_dev_3_url);
        loginPage.login();
        sla.slaContractUpload(filePath);
        slaMonitor.saveSlaValidation();

    });
});