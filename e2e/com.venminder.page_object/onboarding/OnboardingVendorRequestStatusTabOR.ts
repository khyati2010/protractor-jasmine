import { element, by } from 'protractor';

export class OnboardingVendorRequestStatusTabOR {

    static vendorInformationSection = element(by.id("vendorInfoSection"));
    static vendorNameInfoSection = element(by.xpath(".//*[@id='vendorInfoSection']/div/div/ul/li[1]"));
    static headerVendorName = element(by.id("vendor-info__text-vendor-name"));
    static statusTab = element(by.id('status-tab'));
    static vmoInformationSection = element(by.id("vmoInfoSection"));
    static vmoManagerDetail = element(by.xpath(".//*[@id='vmoInfoSection']/div/div/ul/li[4]"));
    static vmoAssign = element(by.id("AssignVmo"));
    static vmoManagerAssignModal = element(by.id("vmo-selection-model-container"));
    static vmoManagerAssignModalTitle = element(by.xpath("//*[contains(text(),'Assign VMO Manager')]"));
    static selectVmoManagerDropdown = element(by.css("select option:nth-child(2)"));
    static submitVmoManagerModalBtn = element(by.id("vmo-selection__submit-btn"));
    static vmoManagerReassignModalTitle = element(by.xpath("//*[contains(text(),'Reassign VMO Manager')]"));
    static currentManagerLbl = element(by.xpath("//*[@id='vmo-selection-model-container']/ux-dialog-body/div[1]/div/form/div[1]/label"))
    static vendorNotesSection = element(by.xpath(".//*[@id='status']/div[2]/div[1]/vendor-notes/div"));
    static noNoteInNotesSection = element(by.id("noNotes"));
    static addNotes = element(by.id("addNote"));
    static addNoteModal = element(by.id("add-note"));
    static addNoteSubmitBtn = element(by.id("add-notes-btn"));
    static addNoteCloseBtn = element(by.id("add-notes-close"));
    static notesDescriptionArea = element(by.id("notes-description-area"));
    static notesTbl = element(by.id("notes-table"));
    static notesExpandBtn = element(by.id("notes-expand-icon"));
    static expandedNotesTbl = element(by.id("expanded-notes-view"));
    static expandedAddNoteBtn = element(by.id("add-note-btn-expanded-view"));
    static requirementStatusModal = element(by.id("requirementStatusInfoSection"));
    static requirementStatuslist = (index) => element(by.id("statusSection_" + index));
    static requirementAssignmentList = (index) => element(by.id("assignmentSection_" + index));
    static approveVendorBtn = element(by.id('approveVendor'));
    static approveVendorModal = element(by.id('approve-vendor__dialog'));
    static productManagerDropdown = element(by.xpath('.//*[@id="approve-vendor-prod-mgr"]/div/button'));
    static productMangerApprovalModal = element(by.xpath(".//*[@id='approve-vendor-prod-mgr']/div/div/ul/li[1]/a/span"));
    static approveManagerModalNextBtn = element(by.id('approve-vendor__next-btn'));
    static declineVendorBtn = element(by.id("declineVendor"));
    static declineModal = element(by.xpath("//*[@id='delete-request-dialog__container']/ux-dialog-header/div/h3"));
    static declineAddNote = element(by.xpath("//*[@id='delete-request-dialog__container']/ux-dialog-body/div/form/div/textarea"));
    static declineSubmitBtn = element(by.id("delete-request-dialog__submit-btn"));
} 