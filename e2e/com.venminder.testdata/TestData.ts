export class siteUrls {
  sand_dev_1_url = "https://sand-dev-1-rsd.venminder.com";
  sand_dev_2_url = "https://sand-dev-2-app.venminder.com";
  sand_dev_3_url = "https://sand-dev-3-rsd.venminder.com";
  sand_gets_1_url = "https://sand-gets-1-app.venminder.com";
}
export class userData {
  admin_username = "testy.tester@entclient1.com";
  dc_admin_username = "venminder.admin@venminder.com";
  general_username = "general@entclient1.com";
  username_onboarding = "testData1@entclient1.com";
  VMO_username = "non.admin@entclient1.com ";
  general_user_pswd = "Digital123!";
  password = "Digital123";
  URL_ADMIN_PANEL = "https://sand-dev-1-rsd.venminder.com/clients/admin-panel";
  static URL_HOME_PAGE =
    "https://sand-dev-1-app.venminder.com/FI/MainDashboard";
  vendor_name = "Adobe Systems Incorporated";
}

export class VendorProfileData {
  static vendor_keyword = "AL";
  static dashboardLabel = "Vendor Dashboard";
  static vendorName = "Vendor_";
  static productName = "Product_";
  static critical = "Critical";
  static non_critical = "Non-Critical";
  static thirdPartyIndex = 1;
  static fourthPartyIndex = 2;
  static productType = "ACH Services";
  static label_Vendor_Information = "Vendor Information";
  static labelAddCustomItem = "Add Custom Field";
  static labelEditCustomItem = "Edit Custom Field";
  static answerFormatOptions = ["Select Format", "Free Form Field", "Yes/No", "Dropdown Select", "Multi-dropdown Select"];
  static characterCount = "Characters remaining: 30";
  static textApplyForAllVendor =
    "Would you like to apply this item for all Vendors?";
  static checkBoxYesNo = ["Yes", "No"];
  static moreThan30characters = "AddingResponse Multi-dropdown Select";
  static duplicateResponseMessage = "Responses can not be duplicate.";
}

export class ProductProfileData {
  static status_active = "Active";
  static status_inactive = "Inactive";
  static status_index = 1;
  static lbl_Product_Information = "Product Information";
  static lblAddCustomItem = "Add Custom Field";
  static answerFormatOptions = [
    "Select Format",
    "Free Form Field",
    "Yes/No",
    "Dropdown Select",
    "Multi-dropdown Select"
  ];
  static characterCount = "Characters remaining: 30";
  static textApplyForAllVendor =
    "Would you like to apply this item for all product profiles?";
  static checkBoxYesNo = ["Yes", "No"];
  static moreThan30characters = "AddingResponse Multi-dropdown Select";
  static duplicateResponseMessage = "Responses can not be duplicate.";
}

export class OversightRequirementData {
  static label_Oversight_requirement = "Oversight Requirements";
  static label_Please_Set_Date = "Please Set Date";
  static lbl_oversight_Requirement = "Oversight Requirements";
  static oversightSelectType = ["Business Continuity", "FFIEC Report of Exam", "Financials", "Information Security", "Insurance", "OFAC", "Policies"];
  static lbl_yes = "yes";
  static lbl_no = "no";
  static dropDownSelectMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  static dropDownSelectYear = [
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028"
  ];
}

export class AdminPanelData {
  static label_Admin_Panel = "Admin Panel";
  static label_User_Roles = "Roles";
  static label_Product_Categories = "Product Categories";
  static label_Oversight_Requirements = "Oversight Requirements";
  static label_System_Settings = "Settings";

  static label_addCategoryCharCount = "Characters remaining: 150";
  static label_exemptOversightRequirement = "Exempt from oversight requirements?";
  static categoryName = "Category";
  static categoryNameMaxChar = "Count characters.Count characters.Count characters.Count characters.Count characters.Count characters.Count characters.Count character.Count character";

  static vendor_oversight_requirement = ["FFIEC ROE", "Financial Health Review", "OFAC Check"];
  static product_oversight_requirement = ["BCP/DR Review", "Contract Review", "Cyber Security Review",
    "GLBA Policy", "Information Security Review", "Insurance Certificate", "PCI Certification", "Red Flag Compliance",
    "SOC 1 Review", "SOC 2 Review"];
  static headerAddOversightModal = "Add Oversight Requirement";
  static headerEditOversightModal = "Edit Oversight Requirement";
  static headerDeleteOversightModal = "Confirm Delete";
  static selectLevel = ["Vendor", "Product"];
  static placeholderValue = "Oversight Requirement title";
  static headerInformalBoxModal = "Welcome to Oversight Requirement management";
  static venminderSupportNumber = "(270) 506-5140";
  static venminderSupportEmail = "support@venminder.com";
  static oversightLevel = ["Vendor Level", "Product Level"];
  static oversightActions = ["Edit", "Delete"];
  static moreThan50Characters = "Add Oversight Requirement Items For Vendor/Product level";
  static btnSubmit = "Submit";
  static btnConfirm = "Confirm";
  static btnCancel = "Cancel";
  static exemptCategoryToolip = "Vendor products with exempt categories may be required to perform oversight reviews.";
  static nonExemptCategoryToolip = "Vendor products with non-exempt categories may be required to perform oversight reviews.";
  static potentialMatchData = "Cate";
  static potentialMatchMessage="Attention: We found some potential matches that already exist in your category list.";
  
  static searchVendor ="xe";
  static searchProduct ="ca";
}

export class database {
  port = "1433";
  venminder_db_service = "sandbox-venminder.database.windows.net";
  venminder_vcms_db = "SAND-DEV-1-VCMS";
  venminder_email_db = "SAND-DEV-1-Email";
  venminder_logging_db = "SAND-DEV-1-Logging";
  venminder_db_user = "3Pillar";
  venminder_db_password = "p37*4W7VG78s";
}

export class masterFormSection {
  vendorInformationSection = [
    "Vendor Name",
    "Site URL",
    "Address",
    "Address2",
    "City",
    "State",
    "Select State",
    "Zip",
    "Description",
    "Add field"
  ];
  productInformationSection = [
    "Product Name",
    "Product Type",
    "Select Type",
    "Product Category",
    "Select Category",
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "Ext.",
    "Type",
    "Select Type",
    "Work",
    "Home",
    "Cell",
    "Description",
    "Add field"
  ];
  pricingInformationSection = [
    "Annual Cost",
    "Annual variable cost",
    "Annual fixed cost",
    "Total Spend (contract lifetime)",
    "Onetime Cost (Setup Fees, etc.)",
    "Term (months/years)",
    "Add field"
  ];
  criticalQuestionsList = [
    "Would a sudden disappearance of this vendor (e.g., due to insolvency, due to sudden termination) cause a material disruption to the business?",
    "Would the time to recover be greater than 24 hours / 1 business day?",
    "Would the disappearance have an impact on your institution’s customers?"
  ];
  clientMasterForm = "Enterprise Client 1 Master Form";
  customFieldLblNames = ["test"];
  formNames = ["test Clone Form", "test New Custom Form", "Edited Form Name"];
}
