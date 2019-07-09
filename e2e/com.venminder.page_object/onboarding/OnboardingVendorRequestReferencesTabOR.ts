import { element, by } from 'protractor';

export class OnboardingVendorRequestViewReferencesTabOR {

    static referencesTab = element(by.id("references-tab"));
    static addReference = element(by.xpath("//*[@type='button' and contains(text(),'Add New Reference')]"));
    static addReferenceText = element(by.id("addReference-description"))
    static submitBtn = element(by.id("add-reference-btn"));
    static errorMessage = element(by.xpath("//*[@class='help-block alert alert-danger' and contains(text(),'A reference must have a Contact Email or Phone Number')]"));
    static companyName = element(by.id("reference-companyName"));
    static attachBtn = element(by.id("reference__attach--link"));
    static emailAddress = element(by.id("reference-email"));
    static actionsBtn = element(by.id("master-form-0-actions__btn"));
    static viewBtn = element(by.xpath("//*[@id='view-request-refernce']/a"));
    static editBtn = element(by.xpath("//*[@id='edit-request-reference']/a"));
    static deleteBtn = element(by.xpath("//*[@id='delete-request-reference']/a"));
    static noRefFound = element(by.id("no-reference-found__lbl"));
    static rareACode = element(by.id("rareacode"));
    static rprefix = element(by.id("rprefix"));
    static rsuffix = element(by.id("rsuffix"));
    static editLink = element(by.id("edit__link"));
    static assignmentList = element(by.id("edit-section-assignment-userlist"));
    static deleteRef = element(by.id("delete-reference-btn"));
}