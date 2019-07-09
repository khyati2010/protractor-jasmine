import { element, by, ElementFinder, ElementArrayFinder } from "protractor";

export class OversightAutomationOR {

static lblSalesNcontract = element(by.xpath("//h3[text()='Sales and Contracting']"));
static txtFiSearch = element(by.xpath("//input[@id='FI_Search']"));
static btnSearchClient = element(by.xpath("//input[@id='searchBtn']"));
static btnSelectClient = element(by.xpath("//div[@class='buttonContainer align-right']/input[@value='Select']"));
static lblNewClientSale = element(by.xpath("//h2[text()='New Client Sale']"));
static lblOA = element.all(by.xpath("//table[@class='tableStyle formStyle']/tbody/tr/td/select"));

//Interrupt modal
    static header = element(by.xpath("//h2[contains(text(),'Welcome to Oversight Automation')]"));
    static btnGotIt = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
    static inputDontShow = element(by.css("input#checkboxL3"));
    static lblDontShow = element(by.css("input#checkboxL3+label"));
    static btnCancelIcon = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
    static btnSimplifiedModal = element(by.xpath("//i[@click.delegate='showSimplifiedLandingModal()']"));
    static btnClose = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
    static lblContentModal = element(by.xpath("//h2[contains(text(),'Welcome to Oversight Automation')]/following-sibling::p[1]"))
    static colorGreenCategory = element(by.xpath("//label[@for='category1' and 'color: rgb(125,195,25)']"));
    static disableTxt = element(by.xpath("//div[contains(text(),'In order to use')]"));
    static lblCategoryMngmtDlg = element(by.xpath("//span[contains(text(),'institution')]"));
    static btnTurnOnCat = element(by.xpath("//label[@for='category1']"));
    static btnSaveChanges = element(by.xpath("//button[@click.trigger='saveSettings()']"));
    static btnOASaveChanges = element(by.xpath("//button[@click.delegate='saveChanges()']"));
    static btnCatgryMethod = element(by.xpath("//label[@for='radioPair1']"));
    static btnApplyPair = element(by.xpath("//button[@click.delegate='applyPairingSettings()']"));
    static lblCategoryPaired = element(by.xpath("//th[contains(text(),'Categories')]"));
    static lblTurnOffMsg = element(by.xpath("//span[contains(text(),'cannot be turned off')]"));
    static btnTurnoffCat = element(by.xpath("//label[@for='category2']"));
    static lblGreenCat = element(by.xpath("//label[@for='radioPair1' and 'color: rgb(125,195,25)']"));
    static lblMethodSelected = element(by.xpath("//tr[@class='border bg-gray-md']/th[1]"));
    static lblTurningOn = element(by.xpath("//div[@id='AT_CategoryManagement']/div/div/div/ul/li[contains(text(),'on:')]"));
    static lblOAstatusOff = element(by.xpath("//h4[contains(text(),'Oversight Automation')]//following-sibling::div[3]/div/div[contains(text(),'ON')]"));
    static btnOATurnOn = element(by.xpath("//label[@for='automation1']"));
    static btnOATurnOff = element(by.xpath("//label[@for='automation2']"));
    static lblCatMgmtON = element(by.xpath("//div[@id='AT_CategoryManagement']/div/span"));
    static btnRiskOn = element(by.xpath("//label[@for='radioPair2']"));
    static btnCriticality = element(by.xpath("//label[@for='checkboxR1']"));
    static btnNPIAccess = element(by.xpath("//label[@for='checkboxR2']"));
    static btnApplyMethod = element(by.xpath("//button[contains(text(),'Apply')]"));
    static lblRiskPaired = element(by.xpath("//th[contains(text(),'Risk Level')]"));
    static lblCriticalityPaired = element(by.xpath("//th[contains(text(),'Criticality')]"));
    static lblNPIPaired = element(by.xpath("//th[contains(text(),'NPI')]"));
    static btnAddOR = element(by.xpath("//span[@click.delegate='pairOversightRequirement(pairedRequirements)']"));
    static btnUnpair = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[2]/span/i"));
    static lblunpairOR = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[2]/span/i//parent::span"));
    static btnCheckbx = element(by.xpath("//div[@class='modal-body']/div/div/table/tbody/tr[2]/td/div"));
    static lblORselected = element(by.xpath("//div[@class='modal-body']/div/div/table/tbody/tr[2]/td[2]"));
    static lblCategorySelected = element(by.xpath("//div[@class='dialog-header-content']/h3/span"));
    static btnConfirmOR = element(by.xpath("//button[@click.delegate='confirmOversightPairing()']"));
    static lblORPaired = element.all(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[4]"));
    static btnSaveChng = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']//following-sibling::div/button[contains(text(),'Save Changes')]"));
    static btnCancelChng = element(by.xpath("//button[@click.delegate='resetChanges()']"));
    static lblCategrySelected = element(by.xpath("//span[@click.delegate='pairOversightRequirement(pairedRequirements)']//parent::td//parent::tr/td[1]"));
    static pairedFrequency(index1:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[contains(text(),'" + index1 + "')]//following-sibling::td[2]"));
    }
    static pairedOR(index1:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[contains(text(),'" + index1 + "')]//following-sibling::td/span"));
    }
    static comparePairedOR(index1:any,index2:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[contains(text(),'" + index1 + "')]//following-sibling::td/span[contains(text(),'" + index2 + "')]"));
    }
    static lblAllOR(index1:any): ElementArrayFinder {
        return element.all(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[contains(text(),'" + index1 + "')]//following-sibling::td/span"));
    }
    static unpairCat(index1:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[2]/span[contains(text(),'" + index1 + "')]//ancestor::tr/td[1]"));
    }
    static unpairOR(index1:any,index2:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[contains(text(),'" + index1 + "')]//following-sibling::td/span[contains(text(),'" + index2 + "')]"));
    }
    static lblUnpairCat = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[2]/span/i//ancestor::tr/td[1]"));
    static lblResetPopup = element(by.xpath("//h3[contains(text(),'Risk configuration')]"));
    static btnCheckradio = element(by.xpath("//label[@for='checkboxRiskConfirm']"));
    static btnSubmitReset = element(by.xpath("//button[@click.delegate='controller.ok()']"));
    static lblShowFilter = element(by.xpath("//span[@id='dropdown-oversight-dropdown__btn--text']"));
    static btnSelectAllFilter = element(by.xpath("//button[@id='oversight-dropdown__select-all-btn']"));
    static btnDeSelectAllFilter = element(by.xpath("//button[@id='oversight-dropdown__deselect-all-btn']"));
    static btnSearchFilter = element(by.xpath("//input[@id='dropdown-oversight-dropdown__search-input']"));
    static selectFilterOPtion = element(by.xpath("//ul[@id='oversight-dropdown-list-container']/li/a/span"));
    static btnUnPairOR(index1:any,index2:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[contains(text(),'" + index1 + "')]//following-sibling::td/span[contains(text(),'" + index2 + "')]/i"));
    }
    static lblCritGreen = element(by.xpath("//input[@id='checkboxR1' and @value='true']"));
    static lblNPIGreen = element(by.xpath("//input[@id='checkboxR2' and @value='true']"));
    static lblSavedTxt = element(by.xpath("//div[contains(text(),'Settings saved by')]"));
    static lblProductLevel = element(by.xpath("//ul[@id='oversight-dropdown-list-container']/li/span/b[contains(text(),'Product')]"));
    static lblVendorLevel = element(by.xpath("//ul[@id='oversight-dropdown-list-container']/li/span/b[contains(text(),'Vendor')]"));
    static btnEditOA = element(by.xpath("//span[@click.delegate='openPairingDialog()']"));
    static lblPairingMethod = element(by.xpath("//label[@for='radioPair1']"));
    static btnPairingCategoryMethod = element(by.id("radioPair1"));
    static btnPairingRiskMethod = element(by.id("radioPair2"));
    static checkCriticality = element(by.xpath("//label[@for='checkboxR1']"));
    static checkNPI = element(by.xpath("//label[@for='checkboxR2']"));
    static btnProceed = element(by.xpath("//button[contains(text(),'Proceed')]"));
    static btnCancel = element(by.xpath("//button[@click.delegate='controller.cancel()']"));
    static checkConfirm = element(by.xpath("//label[@for='checkboxdefault']"));
    static btnoversightReq = element(by.xpath("//label[@for='item1']"));
    static btnoversightAuto = element(by.xpath("//label[@for='automation1']"));
    static btncategryMangmnt = element(by.xpath("//label[@for='category1']"));
    static lblOROn = element(by.xpath("//h4[contains(text(),'Oversight Requirement')]//following-sibling::div[3]/div/div[contains(text(),'ON')]"));
    static lblCatstatusOff = element(by.xpath("//div[@id='AT_CategoryManagement']/div/div/div/ul/li[2][contains(text(),'turning this on')]"));
    static lblCatMangmtDisable = element(by.xpath("//span[@class='text-danger m-b-sm m-t-sm' and contains(text(),'turned off')]"));
    static lblApplyRiskTxt = element(by.xpath("//span[contains(text(),'risk variables')]"));
    static lblSelected = element(by.xpath("//span[@click.delegate='pairOversightRequirement(pairedRequirements)']//parent::td//parent::tr/td[1]"));
    static lblPairingSelected = element(by.xpath("//div[@class='dialog-header-content']/h3/span"));
    static btnAddRiskOR = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr[1]/td/span[@click.delegate='pairOversightRequirement(pairedRequirements)']"));
    static lblFreqencySelected = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr[1]/td/select"));
    static lblBeforePairOR = element.all(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr[1]/td/span[not(@click.delegate='pairOversightRequirement(pairedRequirements)')]"));
    static btnUnpairRiskX = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr[1]/td/span/i"));
    static lblUnpairRiskOR = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr[1]/td/span/i//parent::span"));
    static unpairRisk(index1:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr[1]/td/span[contains(text(),'" + index1 + "')]"));
    }
    static verifyFilter(index1:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr[1]/td/span[not(@click.delegate='pairOversightRequirement(pairedRequirements)') and contains(text(),'" + index1 + "')]"));
    }
    static clickFilteroption(index1:any): ElementFinder {
        return element(by.xpath("//div[@id='oversight-dropdown__menu-container']/ul[3]/li/a/span[contains(text(),'" + index1 + "')]"));
    }
    static lblNoVendorOR = element(by.xpath("//h4[contains(text(),'Vendor')]//following-sibling::div[@class='no-os']"));
    static lblNoProductOR = element(by.xpath("//h4[contains(text(),'Product')]//following-sibling::div[@class='no-os']"));
    static btnCancelAddOR = element(by.xpath("//button[contains(text(),'Cancel') and @click.delegate='controller.cancel()']"));
    static lblLevelSelectedOR(index1:any): ElementFinder {
        return element(by.xpath("//div[@class='modal-body']/div/div/table/tbody/tr[2]/td[contains(text(),'" + index1 + "')]//ancestor::div/h4"));
    }
    static lblVendorORFilter = element(by.xpath("//ul[@id='oversight-dropdown-list-container']/li/span/b[text()='Vendor Level']//ancestor::li//following-sibling::li[1]/a/span"));
    static lblProductORFilter = element(by.xpath("//ul[@id='oversight-dropdown-list-container']/li/span/b[text()='Product Level']//ancestor::li//following-sibling::li[1]/a/span"));
    static btnDailogProceed = element(by.xpath("//button[@value.bind = 'okButtonText']"));
    static btnDailogCancel = element(by.xpath("//button[@click.delegate='cancel()']"));
    static lblHeader = element(by.xpath("//h2[contains=text(),'Would you like to leave this page?']"));
    static lblOAStatusOn = element(by.xpath("//h4[contains(text(),'Oversight Automation')]//following-sibling::div[3]/div/div[contains(text(),'OFF')]"));
    static lblORStatusOff = element(by.xpath("//h4[contains(text(),'Oversight Requirement')]//following-sibling::div[3]/div/div[contains(text(),'OFF')]"));
    static lblReviewPeriodFreq = element(by.xpath("//label[contains(text(),'Review Period')]"));
    static lblSelectFrequency = element(by.xpath("//select[@value.bind='selectedFrequencyPeriod']"));
    static btnNewOR(index1:any): ElementFinder {
        return element(by.xpath("//div[@class='modal-body']/div/div/table/tbody/tr/td[2][contains(text(),'" + index1 + "')]//parent::tr/td[1]"));
    }
    static btnUnpairNewOR(index1:any): ElementFinder {
        return element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td[2]/span[contains(text(),'" + index1 + "')]/i"));
    }
    static btnUnpairConfirm = element(by.xpath("//button[@click.delegate='confirmUnpair()']"));
    static lblSearchVendor = element(by.xpath("//ul[@class='navbar-top-links navbar-right app-menu-bar']/li/div/div/vm-autocomplete/div/input"));
    static lblManageClient = element(by.xpath("//h3[contains(text(),'Manage Clients')]"));
    static lblMethodSelcted = element(by.xpath("//label[contains(text(),'Category')]"));
    static lblORPresent = element(by.xpath("//table[@class='table table-striped table-hover table-responsive']/tbody/tr/td/span[not(@click.delegate='pairOversightRequirement(pairedRequirements)')]"));

}
