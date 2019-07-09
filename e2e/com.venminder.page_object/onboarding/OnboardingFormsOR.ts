import { element, by } from "protractor";
import { LoginPageOR } from "../shared/LoginPageOR";

export class OnboardingFormsOR extends LoginPageOR {
  onboardingFormsTab = element(by.id("onboardingFormsTab"));
  masterFormTitle = element(by.xpath("//*[contains(text(),'Master Form')]"));
  masterFormTable = element(by.id("masterForms"));
  clientMasterForm = element(by.xpath("//*[@id='masterForms']/tbody/tr/td[1]"));
  customFormTable = element(by.id("sortable-customForms"));
  customFormsNamesInTable = element.all(
    by.xpath("//*[@id='sortable-customForms']//td[1]")
  );
  masterFormActionBtn = element(by.id("master-form-0-actions__container"));
  masterFormActionViewBtn = element(by.id("master-form-0-view-action"));
  disabledMasterFormActionBtn = element(
    by.id("master-form-1-actions__container")
  );
  masterFormActionCloneBtn = element(
    by.id("master-form-0-clone-to-custom-action")
  );
  makeActiveActionBtn = element(by.id("master-form-1-active-action"));
  makeActiveMasterFormModal = element(
    by.id("active-disable-master-form-container")
  );
  makeActiveMasterFormSubmitBtn = element(
    by.id("active-disable-master-form-submit-btn")
  );
  customFormActionBtn = element(by.id("custom-form-0-actions__container"));
  customFormActionCloneBtn = element(
    by.id("custom-form-0-clone-to-custom-action")
  );
  customFormActionEditBtn = element(by.id("custom-form-0-edit-action"));
  customFormActionViewBtn = element(by.id("custom-form-0-view-action"));
  customFormActionDeleteBtn = element(by.id("custom-form-0-delete-action"));
  addNewMasterFormBtn = element(by.id("add-master-form__btn"));
  vendorInformationTitle = element(
    by.xpath("//*[contains(text(),'Vendor Information')]")
  );
  importVendorProfileFieldsBtn = element(
    by.xpath("//*[contains(text(),'Import Vendor Profile Fields')]")
  );
  vendorInformationSection = element.all(by.id("vo-vendor-info-section"));
  productInformationSection = element.all(by.id("vo-product-info-section"));
  pricingInformationSection = element.all(by.id("vo-pricing-info-section"));
  criticalQuestionSection = element.all(by.id("vo-critical-info-section"));
  saveFormBtn = element(by.id("vo-form__save-btn"));
  viewMasterForm = element(by.id("onboardingMasterForm"));
  closeViewMasterForm = element(by.xpath("//*[contains(text(),'Close')]"));
  pricingSectionAddFieldBtn = element(by.id("addCustomItemPricing"));
  addFieldModalPopup = element(by.id("add-custom-item-pricing__dialog"));
  addFieldLblInput = element(by.id("add-custom-item-pricing__input"));
  addFieldSubmitBtn = element(
    by.id("add-custom-item-pricing-dialog__add-field-btn")
  );
  masterFormNames = element.all(
    by.xpath("//*[@id='masterForms']/tbody/tr/td[1]")
  );
  masterFormActionBtns = element.all(
    by.xpath("//*[@id='masterForms']/tbody/tr/td[5]")
  );
  customFieldcloseBtn = element(
    by.xpath(
      "*//label[contains(text(),'test')]/../i[@click.delegate='removePricingQuestion(customItem)']"
    )
  );
  masterFormCancelBtn = element(by.id("vo-form__cancel-btn"));
  formNameInputBoxCloneToCustom = element(by.id("vo-form-name__input"));
  loader = element(by.xpath("//img[@ref='imgElem']"));
  categoryDropdown = element(by.id("dropdown-category-dropdown__btn"));
  selectCategoriesDropdown = element(by.id("category-dropdown-list-container"));
  firstCategoryDropdown = element(by.id("category-dropdown-list-item-0"));
  addNewCustomFormBtn = element(by.id("add-custom-form__btn"));
  customFormViewCancelBtn = element(by.id("vo-view-form-cancel-button"));
  editFormNameInput = element(by.id("vo-form-name__input"));
  riskAssessmentQuestionRemoveBtn = element(
    by.xpath("//*[@id='vo-risk-info-section']/div[1]/table/tbody/tr[1]/td[5]/i")
  );
  deleteCustomFormodal = element(by.id("delete-custom-form"));
  deleteCustomFormModalBtn = element(by.id("delete-custom-form-delete"));
  deleteFormAcknowldgChkbox = element(
    by.className("checkbox checkbox-primary checkbox-inline")
  );
}
