import { element, by } from 'protractor';

export class OnboardingVendorRequestViewRelationshipsTabOR {

    static vendorRelationshipsTab = element(by.id("relationships-tab"));
    static statusBarContainer = element(by.id("requirement-status-bar-container"));
    static statusBarMarkCompleteBtn = element(by.id("mark-as-complete__btn"));
    static statusBarNotRequiredChckBox = element(by.xpath("//*[@for='not-required']"));
    static thirdPartyContainer = element(by.xpath("//*[@id='vendor-relationship_section']/div[1]/div"));
    static editThirdPartyBtn = element(by.id("editThirdPartyRelationship"));
    static fourthPartyContainer = element(by.xpath("//*[@id='vendor-relationship_section']/div[2]/div"));
    static editFourthPartyBtn = element(by.id("editFourthPartyRelationship"));
    static thirdFourthPartyRelationshipModal = element(by.id("third-fourth-party-vendors-dialog-container"));
    static fourtPartyVendorsSelected = element.all(by.id("fourthPartyList"));
    static fourthPartyVendorList = element.all(by.xpath("//ux-dialog-body/div[1]/div/div[2]/div[2]/div/table/tbody/tr"))
    static fourthPartyVendorRow = (index) => element(by.xpath("//ux-dialog-body/div[1]/div/div[2]/div[2]/div/table/tbody/tr[" + index + "]/td[2]"));
    static vendorsChckbox = (index) => element(by.xpath("//ux-dialog-body/div[1]/div/div[2]/div[2]/div/table[1]/tbody/tr[" + index + "]/td/div"));
    static fourthPartyCheckedStatus = element(by.xpath("//*[@id='vendor-relationship_section']/div[2]/div/div/p[1]"));
    static thirdPartySelectChckbox = element(by.xpath(".//*[@for='relationshipThirdParty']"));
    static fourthPartySelectChckbox = element(by.xpath(".//*[@for='relationshipfourthParty']"));
    static submitBtnRelationshipModal = element(by.id("submitVendorRelationshipmodal"));
    static cancelBtnRelationshipModal = element(by.id("cancelVendorRelationshipmodal"));
    static thirdPartyVendorSelected = element.all(by.id("thirdPartyList"));
    static thirdPartyVendorList = element.all(by.xpath("//ux-dialog-body/div[1]/div/div[4]/div[2]/div/table/tbody/tr"));
    static thirdPartyVendorRow = (index) => element(by.xpath("//ux-dialog-body/div[1]/div/div[4]/div[2]/div/table/tbody/tr[" + index + "]/td[2]"))
    static thirdPartyVendorsChckbox = (index) => element(by.xpath("//ux-dialog-body/div[1]/div/div[4]/div[2]/div/table[1]/tbody/tr[" + index + "]/td/div"));
    static loaderOnAction = element(by.xpath("//img[@ref='imgElem']"));
    static hyperlinkedVendor = (index) => element(by.xpath(".//*[@id='fourthPartyList']/li[" + index + "]/*[@class]"));
    static vendorRelatedToPartyErrorMsg = element(by.xpath("//*[@class='text-danger au-target']"));

}
