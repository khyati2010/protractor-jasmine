import { element, by } from 'protractor';

export class OnboardingVendorRequestViewTileOR {

    static clickViewTile = element(by.id("vo-pending_view-btn"));
    static searchRequest = element(by.xpath("//input[@type='search' and @id='searchTxt']"));
    static downloadCurrentView = element(by.id("download_button"));
    static viewGrid = element.all(by.id("tbl"));
    static vendorRequestFilterContainer = element(by.id("request-view-filter--container"));
    static filterAssignmentDropdownBtn = element(by.id("dropdown-assignment-dropdown__btn"));
    static filterAssignentsUser = element(by.id("assignment-dropdown-list-container"));
    static filterSelectAssignee = element(by.id("assignment-dropdown-list-item-0"));
    static filterStatusDropdownBtn = element(by.id("dropdown-status-dropdown__btn"));
    static filterStatusDropdown = element(by.id("status-dropdown-list-container"));
    static filterStatusOption = element(by.id("status-dropdown-list-item-0--text"));
    static applyFilterBtn = element(by.id("apply-filter__btn"));
    static loaderOnAction = element(by.xpath("//img[@ref='imgElem']"));
    static filterStartDateTime = element(by.id("request-start-datetime"));
    static filterEndDateTime = element(by.id("request-end-datetime"));
    static datePickerContainer = element(by.id("request-start-datetime"));
    static filterCurrentDate = element(by.xpath(".//*[@class='day today']"));
    static deadlineStartDateTime = element(by.id("deadline-start-datetime"));
    static deadlineEndDateTime = element(by.id("deadline-end-datetime"));
    static declinedList = element(by.xpath("//compose/p [contains(text(),'Declined')]"));
    static pendingList = element(by.xpath("//a [contains(text(),'Pending')]"));
}
