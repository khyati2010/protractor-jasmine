import { element, by } from "protractor";

export class ProductProfileOR {
  static tabProductProfile = element(by.css("li#productProfile>a"));
  static lblProductInfo = element(by.css("div.tab-head>h3"));
  static edtProductProfile = element(by.css("h3.text-primary>i"));
  static inputProductName = element(by.xpath("h3.text-primary>i"));
  static inputProductType = element(
    by.xpath("//input[@value.bind='productInformation.type']")
  );
  static selectStatus = element(
    by.xpath("//input[@value.bind='productInformation.isActive']")
  );
  static inputDescription = element(
    by.xpath("//input[@value.bind='productInformationModel.description']")
  );
  static selectProductManager = element(
    by.xpath("//input[@value.bind='productInformation.managerID']")
  );
  static selectCollaborators = element(by.id("collaboratorDropdown"));
  static btnAddCollaborator = element(by.css("span.text-primary.pointer"));
  static selectCategory = element(by.id("categorySelect"));
  static radioBtnNpiAccessYes = element(
    by.xpath("input[name='NPIAccess'][value='true']")
  );
  static radioBtnNpiAccessNo = element(
    by.xpath("input[name='NPIAccess'][value='false']")
  );
  static radioBtnProductOutsourcedYes = element(
    by.xpath("input[name='productsOutsourced'][value='true']")
  );
  static radioBtnProductOutsourcedNo = element(
    by.xpath("input[name='productsOutsourced'][value='false']")
  );
  static radioBtnProductProcessedInHouseYes = element(
    by.xpath("input[name='productsProcessedInHouse'][value='true']")
  );
  static radioBtnProductProcessedInHouseNo = element(
    by.xpath("input[name='productsProcessedInHouse'][value='false']")
  );
  static inputAddress = element(by.id("inputAddress"));
  static inputAddress2 = element(by.id("inputAddress2"));
  static inputCity = element(by.id("inputCity"));
  static inputState = element(by.id("inputState"));
  static inputZip = element(by.id("inputZip"));
  static selectContacts = element(by.id("contactsDropdown"));
  static addNewContacts = element(by.css("span.text-primary.pointer"));

  static lblDeleteMsg = element(by.xpath("//span[@class='text-danger']"));
  static btnUndo = element(by.xpath("//td[@class='delete-icon']/span/i"));
  static btnDelete = element(by.xpath("//td[@class='delete-icon']/span/i"));
  static btnViewDocuments = element(
    by.xpath("//i[@class='fa fa-file text-primary']")
  );
  static btnUploadContracts = element(
    by.xpath("//button/i[@class='fa fa-upload text-primary']")
  );
  static btnUploadDocuments = element(
    by.xpath("//a/i[@class='fa fa-upload text-primary']")
  );
  static questionLabels = element.all(by.css("td.strong"));
  static answerValue = element.all(by.css("td.strong+td"));

  //Add new profile item

  static btnUndoCustomItem = element.all(
    by.xpath("//span[@show.bind='profileItem.ToBeDeleted']/i")
  );
  static errorRemoveFromVendor = element.all(by.xpath("span.text-danger>em"));
  static btnSave = element(
    by.xpath("//button[@click.delegate='validateProfileInformation()']")
  );
  static btnCancel = element(
    by.xpath("//button[@click.delegate='showReadOnlyProfile()']")
  );

  //Add Custom Item Modal
  static btnAddProfileItem = element(
    by.xpath("//span[@click.delegate='addCustomProfileItem()']")
  );
  static headerAddCustomItem = element(by.css("h3.modal-title"));
  static inputQuestionLabel = element(
    by.css("vm-autocomplete#questionLabel>div.vm-autocomplete-container>input")
  );
  static selectAnswerFormat = element(by.css("select#inputFormat"));
  static characterCountText = element(
    by.xpath("//label[text()='Label']/following-sibling::small")
  );
  static labelApplyToAllVendor = element(
    by.css("div#errorDuplicateNotEditable>p")
  );
  static textYesNo = element.all(by.css("div#errorDuplicateNotEditable>label"));
  static checkboxYesNo = element.all(
    by.css("div#errorDuplicateNotEditable>label>input")
  );
  static errorDuplicateQuestion = element(
    by.css("div#errorDuplicateNotEditable>p")
  );
  static btnSubmitCustomItem = element(by.css("button#addComplexQuestion"));
  static btnCancelCustomItem = element(
    by.css("button#cancelAddComplexQuestion")
  );
  static inputResponse = element.all(by.css("input[placeholder='Response']"));
  static deleteResponse = element.all(
    by.css("input[placeholder='Response']+i")
  );
  static btnAddAnOption = element(by.css("div#addLevel1Option>span"));
  static btnSaveResponse = element(
    by.xpath("//button[@click.delegate='saveLevel1QuestionResponses()']")
  );
  static errorDuplicateResponse = element(
    by.css("div#duplicateResponsesLevel1")
  );
  static CharacterCountText = element(by.css("input#input+small"));

  static applyToAllYes = element(by.css("input[value='true']"));
  static applyToAllNo = element(by.css("input[value='false']"));
  static buttonSaveCustomItem = element(
    by.xpath("//button[@click.trigger='addCustomQuestion()']")
  );
  static buttonCancelCustomItem = element(
    by.xpath(
      "//button[@click.trigger='addCustomQuestion()']/following-sibling::button"
    )
  );
}
