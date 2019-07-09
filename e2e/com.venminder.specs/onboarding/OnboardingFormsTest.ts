import { LoginPage } from "./../../com.venminder.page/shared/LoginPage";
import {
  siteUrls,
  userData,
  masterFormSection
} from "../../com.venminder.testdata/TestData";
import { VendorOnboarding } from "../../com.venminder.page/onboarding/VendorOnboardingPage";
import { VendorOnboardingForm } from "../../com.venminder.page/onboarding/OnboardingFormsPage";

describe("validating the functionality for vendor onboarding forms ", function() {
  let OnboardingForm = new VendorOnboardingForm();
  let vendorOnboardingMenu = new VendorOnboarding();
  let siteUrl = new siteUrls();
  let credential = new userData();
  let login = new LoginPage();
  let masterFormSection1 = new masterFormSection();

  it("login with admin user", function() {
    login.commonLogin(
      siteUrl.sand_dev_2_url,
      credential.admin_username,
      credential.password
    );
  });

  it("validate vendor onboarding is displayed for admin user", function() {
    vendorOnboardingMenu.vendorOnboardingMenuBtn();
  });

  it("user is navigated to onboarding forms tab", function() {
    vendorOnboardingMenu.onboardingSettingTileTab();
    vendorOnboardingMenu.onboaringSettingTileEditBtnClick();
    OnboardingForm.clickOnboardingFormsTab();
  });

  it("user validate onboarding forms sections is displayed with default content", function() {
    OnboardingForm.onboardingFormsSectionContent();
  });

  it("user validate action button options for default active master form", function() {
    OnboardingForm.clickMasterFormActionBtn();
  });

  describe("validation for view master form", function() {
    it("user click on view in master form action tab", function() {
      OnboardingForm.clickActionViewBtn();
    });

    it("validate user is naviagted to view master form popup", function() {
      OnboardingForm.viewMasterFormPopup();
    });
  });

  describe("validation for create new master form", function() {
    it("user click on add new master form", function() {
      OnboardingForm.clickAddNewMasterFormBtn();
    });

    it("user validate all the section of master form", function() {
      OnboardingForm.getvendorInformationSectionContent(
        masterFormSection1.vendorInformationSection
      );
      OnboardingForm.getProductInformationSectionContent(
        masterFormSection1.productInformationSection
      );
      OnboardingForm.getPricingInformationSectionContent(
        masterFormSection1.pricingInformationSection
      );
      OnboardingForm.getCriticalQuestionsList(
        masterFormSection1.criticalQuestionsList
      );
      OnboardingForm.addFieldModal(masterFormSection1.customFieldLblNames[0]);
    });

    it("user save master form", function() {
      OnboardingForm.clickSaveFormBtn(masterFormSection1.clientMasterForm);
    });
  });

  describe("validation for clone to custom form", function() {
    it("user naviagte using clone to custom form button from active master form ", function() {
      OnboardingForm.cloneToCustomForm();
    });

    it("validation for custom form name and product category", function() {
      OnboardingForm.validateDisabledSaveFormBtn();
      OnboardingForm.createCustomFormFieldValidation(
        masterFormSection1.formNames[0]
      );
      OnboardingForm.customFormPostAddValidation(
        masterFormSection1.formNames[0]
      );
    });
  });

  describe("validation for make active disabled master form", function() {
    it("validation for making disable master form active", function() {
      OnboardingForm.makeMasterFormActive();
    });
  });

  describe("validation for add new custom form", function() {
    it("add custom form from add new custom form", function() {
      OnboardingForm.addNewCustomForm();
      OnboardingForm.validateDisabledSaveFormBtn();
      OnboardingForm.createCustomFormFieldValidation(
        masterFormSection1.formNames[1]
      );
      OnboardingForm.customFormPostAddValidation(
        masterFormSection1.formNames[1]
      );
    });
  });

  describe("validation for view custom form", function() {
    it("user validate view custom form", function() {
      OnboardingForm.clickCustomFormActionBtn();
      OnboardingForm.viewCustomForm();
    });
  });

  describe("validation for edit custom form", function() {
    it("user validate edit custom form", function() {
      OnboardingForm.clickCustomFormActionBtn();
      OnboardingForm.editCustomForm(masterFormSection1.formNames[2]);
      OnboardingForm.customFormPostAddValidation(
        masterFormSection1.formNames[2]
      );
    });

    it("validation for duplicate form with same name", function() {
      OnboardingForm.duplicateFormNameValidation();
    });
  });

  describe("validation for delete custom form", function() {
    it("user validate delete custom form", function() {
      OnboardingForm.deleteCustomForm();
    });
  });
});
