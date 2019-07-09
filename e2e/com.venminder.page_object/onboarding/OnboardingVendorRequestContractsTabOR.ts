import { element, by } from 'protractor';

export class OnboardingVendorRequestViewContractsTabOR {

    static contractsTab = element(by.id("contracts-tab"));
    static editLink = element(by.id("edit__link"));
    static editModal = element(by.id("edit-section-assignment-description"));
    static relationshipAssignment = element(by.xpath("//*[@model.bind='user' and contains(text(),'test13 test13')]"));
    static saveBtn = element(by.id("save-edit-section-assignment-btn"));
    static assignmentName = element(by.id("assignee-name__lbl"));
    static notRequiredCheckBox = element(by.xpath("//*[@for='not-required']"));
    static markAsCompleteBtn = element(by.id("mark-as-complete__btn"))
    static statusField = element(by.id("status__lbl"));
    static markAsCompleteCheckBox = element(by.xpath("//label[@for='markSectionCheckbox']"));
    static submitBtn = element(by.id("mark-section-complete-btn"));
    static markAsCompleteTitle = element(by.id("mark-section-complete"));
    static addNewUpdateBtn = element(by.id("add-new-update__btn"));
    static attachFile = element(by.id("update-contract__attach--link"));
    static submitUploadDocument = element(by.id("vo-update-contract-submit__btn"));
    static incumbentVendorContractName = element(by.id("incumbent-vendor-contract-name"))
    static viewContract = element(by.xpath("//*[@data-bind='text: title']"));
    static noContractsDisplayed = element(by.id("no-vendor-contract__lbl"));
    static productName = element(by.xpath("//*[@id='update-contract-product-name']/strong"));
    static documentName = element(by.id("vendor-contract-$index-name"));
    static productType = element(by.id("vendor-info__text-product-type"));
    static actionsBtn = element(by.id("vendor-contract-$index__action-btn"));
    static viewBtn = element(by.id("vendor-contract-$index__view-link"));
    static viewContractEntry = element(by.id("view-draft-contract-form-name"));
    static authorName = element(by.id("view-draft-contract__author"));
    static closeBtn = element(by.id("view-draft-contract-close__btn"));
    static uploadDocument = element(by.css('input[type="file"]'));
}