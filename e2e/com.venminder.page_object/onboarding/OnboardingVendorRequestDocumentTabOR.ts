import { element, by } from 'protractor';

export class OnboardingVendorRequestDocumentsTabOR {

    static documentTab = element(by.xpath("//*[@class='hidden-xs vm-text-elipsis' and contains(text(),'Documents')]"));
    static uploadBtn = element(by.id("upload-documents__btn"));
    static submitBtn = element(by.xpath("//*[@type='button' and contains(text(),'Upload')]"));
    static browseBtn = element(by.xpath("//*[@class='btn AddTagButton BrowseBTN']"));
    static effectiveDate = element(by.xpath("//*[@class='au-target input-group date']/input"));
    static actionBtn = element(by.xpath("//*[@class='dropdown text-right']/button"));
    static viewBtn = element(by.xpath("//*[@class='dropdown-menu dropdownResults font-normal']/li"));
    static clearBtn = element(by.id("filter-clear__btn"));
    static showAllBtn = element(by.id("show-all__btn"));
    static addDocument = element(by.css("input[type='file']"));
    static addTag = element(by.xpath("//*[@class='uploadAvailableTagList']/button"));
    static deleteBtn = element(by.xpath("//*[@class='dropdown-menu dropdownResults font-normal']/li[4]"));
    static closeBtn = element(by.xpath("//*[@type='button' and contains(text(),'Close')]"));
    static deleteDocument = element(by.xpath("//*[@type='button' and contains(text(),'Delete Documents')]"));
    static documentTags = element(by.xpath("//*[@click.delegate= 'toggleSelect(tag, $event)' and contains(text(),'Analysis Services')]"));
    static applyFilters = element(by.xpath("//*[@data-toggle='tooltip' and contains(text(),'Apply Filters')]"));
}