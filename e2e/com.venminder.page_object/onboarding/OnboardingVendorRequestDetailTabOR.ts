import { element, by } from 'protractor';

export class OnboardingVendorRequestViewDetailsTabOR {

    static statusTab = element(by.xpath("//*[@class='hidden-xs vm-text-elipsis' and contains(text(),'Status')]"));
    static detailsTab = element(by.id("details-tab"));
    static vendorInfo = element(by.id("vo-vendor-info__header"));
    static productInfo = element(by.id("vo-product-info__header"));
    static pricingInfo = element(by.id("vo-pricing-info__header"));
    static criticalInfo = element(by.id("vo-criticality-info__header"));
    static riskAssessment = element(by.id("vo-risk-info__header"));
    static riskLevelIndicator = element(by.id("risk-level-text"));
    static completeDetailPage = element(by.id("vendor-info__container"));
    static editBtn = element(by.id("vo-details__edit-link"));
    static cancelBtn = element(by.id("vendor-details__cancel-btn"));
    static saveBtn = element(by.id("vendor-details__save-btn"));
    static descField = element(by.id("input-product-description"));
    static allPendingVendorBtn = element(by.id("menu-list__btn"));
    static hamburgerViewAllRequests = element(by.id("menu-back-nav__link"))
    static vmoManager = element(by.xpath("//*[@class= 'au-target' and contains(text(),'Testy Tester')]"))
    static statusSortBtn = element(by.xpath("//*[@class='au-target' and contains(text(),'Status')]/following-sibling::span"));
    static dateSortBtn = element(by.xpath("//*[@class='au-target' and contains(text(),'Date')]/following-sibling::span"));
    static allPendingVendorList = element(by.id("menu-list-item-1__lbl"));
    static allVendorRequest = element(by.id("menu-list__btn"));
    static menuNav = element(by.id("menu-back-nav__link"));
}