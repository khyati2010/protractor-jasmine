import { element, by } from 'protractor';

export class OnboardingVendorRequestViewDueDiligenceTabOR {

    static dueDiligenceTab = element(by.id("dueDiligence-tab"));
    static addDueDiligenceBtn = element(by.xpath("//*[@class='text-primary pointer au-target' and contains(text(),'Add Due Diligence')]"));
    static selectVendor = element(by.xpath("//*[@type='radio']"));
    static labelTextArea = element(by.xpath("//*[@type='text'and @value.bind='customOversightRequirement.name']"))
    static selectType = element(by.xpath("//*[@class='form-control au-target' and @value.bind='customOversightRequirement.oversightManagementCategoryID']"));
    static selectTypeValue = element(by.xpath("//*[@value.bind='oversightCategory.ID' and contains(text(),'Business Continuity')]"));
    static submitBtn = element(by.xpath("//button[@type='button' and contains(text(),'Submit')]"));
    static createdvendorTask = element(by.xpath("//*[contains(text(),'New Vendor Due Diligence Task Added')]"));
    static editBtn = element(by.xpath("//*[contains(text(),'New Vendor Due Diligence Task Added')]//..//td/i[@class='fa fa-pencil pointer text-primary m-t-sm au-target']"));
    static deleteRequirmentBtn = element(by.xpath("//*[@class='text-danger pull-left au-target' and contains(text(),'Delete Requirement')]"));
    static confirmBtn = element(by.xpath("//*[@type='button'and contains(.,'Confirm')]"));
    static clickDate = element(by.xpath("//*[@id='taskDate']/span/abp-datetime-picker/div/input"));
    static selectDate = element(by.xpath(".//*[@class='day today']"));
    static ownerDropDown = element(by.xpath("//*[contains(text(),'Select Owner')]"));
    static selectOwner = element(by.xpath("//*[@class='text m-0' and contains(text(),'Nischay Suri')]"));
    static ownerSubmitBtn = element(by.xpath("//*[@type='button' and contains(text(),'Submit')]"))
}