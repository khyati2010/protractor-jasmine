
import { element, by } from "protractor";

export class SlaRecordSearchOR {


    static searchText = element(by.id("searchTxt"));
    static headerList = element.all(by.xpath("//table[@id='tbl']//th"));
    static statusSort = element(by.xpath("//span[text()='Status']/following-sibling::span"));
    static TitleSort = element(by.xpath("//span[text()='Title']/following-sibling::span"));
    static FrequencySort = element(by.xpath("//span[text()='Frequency']/following-sibling::span"));
    static DueDate = element(by.xpath("//span[text()='Due Date']/following-sibling::span"));
    static Manager = element(by.xpath("//span[text()='Manager']/following-sibling::span"));

    static totalSort = element.all(by.xpath("//table[@id='tbl']//th/span[contains(@show.bind,'Sortable') and not(contains(@class,'hide'))]"))
    static searchedData = element.all(by.xpath("//table[@id='tbl']/tbody/tr/td[2]//a[contains(@class,'strong text')]"));

}



