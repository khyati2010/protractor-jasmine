import { element, by } from "protractor";

export class VendorProfileOR {
  static labelVendorInformation = element(by.css("div.tab-head.au-target>h3>span"));
  static editVendorInformationIcon = element(by.css("div.tab-head.au-target>h3>i"));
  static labelRelationship = element(by.xpath("//h3[contains(text(),'Relationship')]"));
  static editRelationshipIcon = element(by.xpath("//i[@click.delegate='editVendorRelationships()']"));
  static questionLablelnInReadMode = element.all(by.css("td.strong"));
  static questionValuelnInReadMode = element.all(by.css("td.strong+td"));
  static btnMoveIcon = element.all(by.xpath("//tbody[@reorderable-after-reordering='QuestionsReOrdered']//td/i"));
  static btnDeleteCustomItem = element.all(by.xpath("//span[@show.bind='!profileItem.toBeDeleted']/i"));
  static btnEditCustomItem = element.all(by.xpath("//span[@show.bind='!profileItem.toBeDeleted']/following-sibling::span/i"));
  static btnUndoCustomItem = element.all(by.xpath("//span[@show.bind='profileItem.toBeDeleted']/i"));
  static errorRemoveFromVendor = element.all(by.xpath("span.text-danger>em"));
  static btnSaveVendorProfile = element(by.css("button#saveVenodrProfile"));
  static btnCancelVendorProfile = element(by.css("button#cancelVendorProfile"));
  static questionLableInEditMode = element.all(by.xpath("//tbody[@reorderable-after-reordering='QuestionsReOrdered']//td/span/label"));
  static btnSingleSelectQuestion = function (index): any {
    return element.all(by.xpath("//tbody[@reorderable-after-reordering='QuestionsReOrdered'][" + index + "]//td[3]//select[@value.bind='profileItem.answer']"));
  }
  static btnMultiSelectQuestion = element.all(by.xpath("//div[@class='dropdown-menu open multipleSlection']/preceding-sibling::button"));
  static multiSelectResponseTextOptions = element.all(by.xpath("//div[@class='dropdown-menu open multipleSlection']"));
  static multiSelectResponseText = element.all(by.xpath("//div[@class='dropdown-menu open multipleSlection']//a/span[1]"));
  static multiSelectResponseValueIsSelected = element.all(by.xpath("//div[@class='dropdown-menu open multipleSlection']//a/span[2]"));

  //Add Custom Item Modal
  static btnAddProfileItem = element(by.xpath("//div[@click.delegate='addCustomProfileItem()']"));
  static headerAddCustomItem = element(by.css("div.dialog-header-content>h3"));
  static inputQuestionLabel = element(by.css("vm-autocomplete#questionLabel>div.vm-autocomplete-container>input"));
  static selectAnswerFormat = element(by.css("select#inputFormat"));
  static characterCountText = element(by.xpath("//label[text()='Label']/following-sibling::small"));
  static labelApplyToAllVendor = element(by.css("div#errorDuplicateNotEditable>p"));
  static textYesNo = element.all(by.css("div#errorDuplicateNotEditable>label"));
  static checkboxYesNo = element.all(by.css("div#errorDuplicateNotEditable>label>input"));
  static errorDuplicateQuestion = element(by.css("div#errorDuplicateNotEditable>p"));
  static btnSubmitCustomItem = element(by.css("button#addComplexQuestion"));
  static btnCancelCustomItem = element(by.css("button#cancelAddComplexQuestion"));
  static inputResponse = element.all(by.css("input[placeholder='Response']"));
  static deleteResponse = element.all(by.css("input[placeholder='Response']+i"));
  static btnAddAnOption = element(by.css("div#addLevel1Option>span"));
  static btnSaveResponse = element(by.xpath("//button[@click.delegate='saveLevel1QuestionResponses()']"));
  static errorDuplicateResponse = element(by.css("div.text-danger>i"));
  static btnOptionCount = element(by.xpath("//button[@click.delegate='editLevel1Responses()']"));
  static btnAddRule = element(by.css("div#ParentDropdown>span.fa-stack.small.pointer+span"));
}
