import { BasePage } from "../shared/BasePage";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { ScrollPage } from "../../com.venminder.utilities/ScrollPage";
import { OversightAutomationOR } from "../../com.venminder.page_object/adminPanel/OversightAutomationOR";
import { browser, protractor, Browser } from "protractor";
import { UserRolesPage } from "../AdminPanel/UserRolesPage";
import { userData, OversightRequirementData, OversightAutomation } from "../../com.venminder.testdata/TestData";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { ProductProfilePage } from "../dashboard/ProductProfilePage";
import { OversightAutomationPage } from "../adminPanel/OversightAutomationPage";
import { VendorProfilePage } from "../dashboard/VendorProfilePage";
import { LoginPage } from "../../com.venminder.page/shared/LoginPage";
import { VendorDashboardPage } from "../dashboard/VendorDashboardPage";
import { ProductCategoriesByCategoryPage } from "../AdminPanel/ProductCategoriesByCategoryPage";
import { ProductProfileOR } from "../../com.venminder.page_object/dashboard/ProductProfileOR";
import { OversightRequirementPage } from "../dashboard/OversightRequirementPage";
import { OversightRequirementsOR } from "../../com.venminder.page_object/adminPanel/OversightRequirementsOR";
import { OversightRequirementOR } from "../../com.venminder.page_object/dashboard/OversightRequirementOR";
const until = protractor.ExpectedConditions;
let productCategoriesPage = new ProductCategoriesByCategoryPage();
let basepage = new BasePage();
let userrolespage = new UserRolesPage();
  let profilepage = new VendorProfilePage();
  let vendorDashboardPage = new VendorDashboardPage();
  let loginPage = new LoginPage();
let productProfilePage = new ProductProfilePage();
let oversightAutomationPage = new OversightAutomationPage();
let oversightRequirementPage = new OversightRequirementPage();

export class DashboardAfterPairingPage extends BasePage {
    textbox = new TextBox();
    click = new Click();
    select = new SelectDropDown();
    scroll = new ScrollPage();
    UserData = new userData();
    userrolespage = new UserRolesPage();
    pairMethod:any;
    newTaskOR:any;
    cmpltTaskOR:any;
    inFlightTaskOR:any;
    dueTaskOR:any;
    enteredORPost:any
    enteredORDue:any;
    enteredORCmplt:any
    enteredOR:any;
    enteredORFlight:any;
    vendorSelected:any;
    postpndTaskOR:any;
    mm:any;
    currentDate:any;

    verifyOAON(){
      OversightAutomationOR.lblOAStatusOn.isDisplayed().then(data=>{
        if(data == true){
          console.log("Oversight Automation is On")
        }
        else{
          OversightAutomationOR.lblORStatusOff.isDisplayed().then(data=>{
            if(data == true){
              this.click.buttonClick(OversightAutomationOR.btnoversightReq);
              this.click.buttonClick(OversightAutomationOR.btnOASaveChanges);
              browser.sleep(2000);
              this.click.buttonClick(OversightAutomationOR.btnOATurnOn);
              this.click.buttonClick(OversightAutomationOR.btnOASaveChanges);
              browser.sleep(2000);
              console.log("Oversight Automation is now Turned On.")
             }
             else{
              this.click.buttonClick(OversightAutomationOR.btnOATurnOn);
              this.click.buttonClick(OversightAutomationOR.btnOASaveChanges);
              browser.sleep(2000);
              console.log("Oversight Automation is now Turned On.")
             }
          });
        }
      });
    }

      verifyMethodPaired(action:string, productSelection:string){
      OversightAutomationOR.lblPairingMethod.getText().then(data=>{
        this.pairMethod = data.toString().trim();
       if(this.pairMethod == OversightAutomation.Cat_PairingMethod){
         console.log("Pairing Method is Category");
         oversightAutomationPage.verifyPairCategory(action,productSelection);
       }
       else{
        console.log("Pairing Method is Risk");
        oversightAutomationPage.verifyPairRisk(action,productSelection);
          }
      });
     } 

verifyCurrentDate(){
  var today = new Date();
var dd = today.getDate();
this.mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(this.mm<10) {
   this.mm ='0'+this.mm
} 
this.currentDate = this.mm+'-'+dd+'-'+yyyy;
console.log("current date : " +this.currentDate);
return this.currentDate;
}

     verifyTaskStatus(SelectType:string){
      OversightRequirementOR.lblPairVendor.getText().then(data=>{
           this.vendorSelected = data.toString().trim();
           console.log("Vendor Selected for Pairing Scenario : " +this.vendorSelected)
// New Task
           this.click.buttonClick(OversightRequirementOR.btnAddOversight);
           this.click.buttonClick(OversightRequirementOR.radiobtnVendor);
           this.textbox.setTextValue(OversightRequirementOR.inputOversightLabel, this.generateRandomText());
           this.select.selectElementByText(OversightRequirementOR.selectOversightType,SelectType);
           browser.sleep(2000);
      OversightRequirementOR.lblEnteredOR.getText().then(data=>{
      this.enteredOR =  data.toString().trim();
      console.log("OR entered for New Task: " +this.enteredOR);
      this.click.buttonClick(OversightRequirementOR.btnAddOversghtSubmit);
        browser.sleep(5000);
       this.textbox.setTextValue(OversightRequirementOR.lblPairDate(this.enteredOR),OversightRequirementData.date);
      this.click.buttonClick(OversightRequirementOR.lblPairOwner(this.enteredOR));
      this.click.buttonClick(OversightRequirementOR.lblPairSelectOwner(this.enteredOR));
      browser.sleep(2000);
      OversightRequirementOR.lblPairOR(this.enteredOR).getText().then(data=>{
        this.newTaskOR = data.toString().trim();
        console.log("OR selected for New Task : " +this.newTaskOR);
      this.click.buttonClick(OversightRequirementOR.btnInTaskSubmit(this.newTaskOR));
       browser.sleep(2000);

   // In Flight
   this.click.buttonClick(OversightRequirementOR.btnAddOversight);
    this.click.buttonClick(OversightRequirementOR.radiobtnVendor);
    this.textbox.setTextValue(OversightRequirementOR.inputOversightLabel, this.generateRandomText());
    this.select.selectElementByText(OversightRequirementOR.selectOversightType,SelectType);
    browser.sleep(2000);
  OversightRequirementOR.lblEnteredOR.getText().then(data=>{
  this.enteredORFlight =  data.toString().trim();
  console.log("OR entered for Inflight Task: " +this.enteredORFlight);
  this.click.buttonClick(OversightRequirementOR.btnAddOversghtSubmit);
    browser.sleep(5000);
    this.textbox.setTextValue(OversightRequirementOR.lblPairDate(this.enteredORFlight),OversightRequirementData.date);
  this.click.buttonClick(OversightRequirementOR.lblPairOwner(this.enteredORFlight));
  this.click.buttonClick(OversightRequirementOR.lblPairSelectOwner(this.enteredORFlight));
  browser.sleep(2000);
      OversightRequirementOR.lblPairOR(this.enteredORFlight).getText().then(data=>{
        this.inFlightTaskOR = data.toString().trim();
        console.log("OR selected for Inflight Task : " +this.inFlightTaskOR);
        this.click.buttonClick(OversightRequirementOR.btnInTaskSubmit(this.inFlightTaskOR));
       browser.sleep(2000);
      this.click.buttonClick(OversightRequirementOR.btnSelectActions(this.inFlightTaskOR));
      browser.sleep(2000);
      this.click.buttonClick(OversightRequirementOR.lblViewTask(this.inFlightTaskOR));
      browser.sleep(15000);
    browser.navigate().back();
    browser.sleep(5000);
    vendorDashboardPage.clickOnOversightRequirementTab();

     // Due Task
     this.click.buttonClick(OversightRequirementOR.btnAddOversight);
     this.click.buttonClick(OversightRequirementOR.radiobtnVendor);
     this.textbox.setTextValue(OversightRequirementOR.inputOversightLabel, this.generateRandomText());
   this.select.selectElementByText(OversightRequirementOR.selectOversightType,SelectType);
 browser.sleep(2000);
     OversightRequirementOR.lblEnteredOR.getText().then(data=>{
      this.enteredORDue =  data.toString().trim();
      console.log("OR entered for Due Task: " +this.enteredORDue);
      this.click.buttonClick(OversightRequirementOR.btnAddOversghtSubmit);
        browser.sleep(5000);
    this.textbox.setTextValue(OversightRequirementOR.lblPairDate(this.enteredORDue),this.verifyCurrentDate());
    this.click.buttonClick(OversightRequirementOR.drpdwnOwner);
    this.click.buttonClick(OversightRequirementOR.drpdwnSelectedOwner);
    browser.sleep(2000);
    OversightRequirementOR.lblPairOR(this.enteredORDue).getText().then(data=>{
      this.dueTaskOR = data.toString().trim();
      console.log("OR selected for Due Task : " +this.dueTaskOR);
    this.click.buttonClick(OversightRequirementOR.btnInTaskSubmit(this.dueTaskOR));
     browser.sleep(2000);
     this.click.buttonClick(OversightRequirementOR.btnSelectActions(this.dueTaskOR));
  browser.sleep(2000);
     this.click.buttonClick(OversightRequirementOR.lblViewTask(this.enteredORDue));
     browser.sleep(15000);
   browser.navigate().back();
   browser.sleep(5000);
   vendorDashboardPage.clickOnOversightRequirementTab();

  //Postponed Task
  this.click.buttonClick(OversightRequirementOR.btnAddOversight);
  this.click.buttonClick(OversightRequirementOR.radiobtnVendor);
  this.textbox.setTextValue(OversightRequirementOR.inputOversightLabel, this.generateRandomText());
  this.select.selectElementByText(OversightRequirementOR.selectOversightType,SelectType);
  browser.sleep(2000);
  OversightRequirementOR.lblEnteredOR.getText().then(data=>{
  this.enteredORPost =  data.toString().trim();
  console.log("OR entered for Postponed Task: " +this.enteredORPost);
  this.click.buttonClick(OversightRequirementOR.btnAddOversghtSubmit);
    browser.sleep(5000);
    this.textbox.setTextValue(OversightRequirementOR.lblPairDate(this.enteredORPost),OversightRequirementData.date);
  this.click.buttonClick(OversightRequirementOR.lblPairOwner(this.enteredORPost));
  this.click.buttonClick(OversightRequirementOR.lblPairSelectOwner(this.enteredORPost));
  browser.sleep(2000);
   OversightRequirementOR.lblPairOR(this.enteredORPost).getText().then(data=>{
    this.postpndTaskOR = data.toString().trim();
    console.log("OR selected for Postponed Task : " +this.postpndTaskOR);
  this.click.buttonClick(OversightRequirementOR.btnInTaskSubmit(this.postpndTaskOR));
   browser.sleep(2000);
   this.click.buttonClick(OversightRequirementOR.btnSelectActions(this.postpndTaskOR));
   browser.sleep(2000);
   this.click.buttonClick(OversightRequirementOR.lblViewTask(this.postpndTaskOR));
   browser.sleep(15000);
  this.click.buttonClick(OversightRequirementOR.btnCheckBoxOM);
  this.textbox.setTextValue(OversightRequirementOR.lblEnterDate,OversightRequirementData.postponedDate);
  this.textbox.setTextValue(OversightRequirementOR.lblEnterDscrpt,OversightRequirementData.description);
  this.click.buttonClick(OversightRequirementOR.btnAddDate);
  this.click.buttonClick(OversightRequirementOR.btnSaveDate);
  browser.sleep(4000);
   browser.navigate().back();
   browser.sleep(5000);
   vendorDashboardPage.clickOnOversightRequirementTab();

   //Completed Task
   this.click.buttonClick(OversightRequirementOR.btnAddOversight);
   this.click.buttonClick(OversightRequirementOR.radiobtnVendor);
   this.textbox.setTextValue(OversightRequirementOR.inputOversightLabel, this.generateRandomText());
   this.select.selectElementByText(OversightRequirementOR.selectOversightType,SelectType);
   browser.sleep(2000);
  OversightRequirementOR.lblEnteredOR.getText().then(data=>{
  this.enteredORCmplt =  data.toString().trim();
  console.log("OR entered for complete Task: " +this.enteredORCmplt);
  this.click.buttonClick(OversightRequirementOR.btnAddOversghtSubmit);
    browser.sleep(5000);
    this.textbox.setTextValue(OversightRequirementOR.lblPairDate(this.enteredORCmplt),OversightRequirementData.date);
  this.click.buttonClick(OversightRequirementOR.lblPairOwner(this.enteredORCmplt));
  this.click.buttonClick(OversightRequirementOR.lblPairSelectOwner(this.enteredORCmplt));
  browser.sleep(2000);
   OversightRequirementOR.lblPairOR(this.enteredORCmplt).getText().then(data=>{
    this.cmpltTaskOR = data.toString().trim();
    console.log("OR selected for Completed Task : " +this.cmpltTaskOR);
  this.click.buttonClick(OversightRequirementOR.btnInTaskSubmit(this.cmpltTaskOR));
   browser.sleep(2000);
   this.click.buttonClick(OversightRequirementOR.btnSelectActions(this.cmpltTaskOR));
   browser.sleep(2000);
   this.click.buttonClick(OversightRequirementOR.lblViewTask(this.cmpltTaskOR));
   browser.sleep(15000);
   this.click.buttonClick(OversightRequirementOR.btnCheckBoxOM);
   this.click.buttonClick(OversightRequirementOR.btnCheckRadio);
   this.click.buttonClick(OversightRequirementOR.btnMarkComplete);
   this.click.buttonClick(OversightRequirementOR.btnCompleteSubmit);
   browser.sleep(3000);
   this.click.buttonClick(BasePageOR.profileIcon_old);
   browser.sleep(2000);
   this.click.buttonClick(BasePageOR.adminPanelLink_old);
   browser.sleep(5000);
   userrolespage.clickOnOversightAutomationTab();
   browser.sleep(2000);
   this.click.buttonClick(OversightAutomationOR.btnAddOR);
   this.click.buttonClick(OversightAutomationOR.btnNewOR(this.newTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnNewOR(this.inFlightTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnNewOR(this.dueTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnNewOR(this.postpndTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnNewOR(this.cmpltTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnConfirmOR);
   browser.sleep(3000);
   this.click.buttonClick(OversightAutomationOR.btnUnpairNewOR(this.newTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnUnpairConfirm);
   browser.sleep(2000);
   this.click.buttonClick(OversightAutomationOR.btnUnpairNewOR(this.inFlightTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnUnpairConfirm);
   browser.sleep(2000);
   this.click.buttonClick(OversightAutomationOR.btnUnpairNewOR(this.dueTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnUnpairConfirm);
   browser.sleep(2000);
   this.click.buttonClick(OversightAutomationOR.btnUnpairNewOR(this.postpndTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnUnpairConfirm);
   browser.sleep(2000);
   this.click.buttonClick(OversightAutomationOR.btnUnpairNewOR(this.cmpltTaskOR));
   this.click.buttonClick(OversightAutomationOR.btnUnpairConfirm);
   browser.sleep(2000);
   this.textbox.setTextValue(OversightAutomationOR.lblSearchVendor,this.vendorSelected);
   browser.sleep(6000);
   vendorDashboardPage.clickOnOversightRequirementTab();
   this.click.buttonClick(OversightRequirementOR.btnCheckDisable);
   OversightRequirementOR.checkDisableOR(this.newTaskOR).getText().then(data=>{
     expect(data.toString().trim()).toContains(OversightRequirementData.disableTxt);
     console.log("After Unpairing New Task is disabled.");
     OversightRequirementOR.checkDisableOR(this.inFlightTaskOR).getText().then(data=>{
      expect(data.toString().trim()).toContains(OversightRequirementData.disableTxt);
      console.log("After Unpairing Inflight Task is disabled.");
      OversightRequirementOR.checkDisableOR(this.dueTaskOR).getText().then(data=>{
        expect(data.toString().trim()).toContains(OversightRequirementData.disableTxt);
        console.log("After Unpairing Due Task is disabled.");
       OversightRequirementOR.checkDisableOR(this.postpndTaskOR).getText().then(data=>{
        expect(data.toString().trim()).toContains(OversightRequirementData.disableTxt);
        console.log("After Unpairing Postponed Task is disabled.");
        OversightRequirementOR.checkCompletedOR(this.cmpltTaskOR).getText().then(data=>{
          expect(data.toString().trim()).toContains("Submit");
          console.log("After Unpairing Completed Task is Cancelled.");
              });
             });
            });
           });
          });
         });
        });
       });
      });
     });
    });
  })
})
     })
      })
    })
  }

  // Currently working on it.
  verifyMissingDataText(){
    userrolespage.clickOnOversightAutomationTab();
    browser.sleep(3000);
    oversightAutomationPage.verifyMethodApplied();
    userrolespage.clickOnSystemSettingsTab();
    oversightAutomationPage.verifyOAON();
    this.textbox.setTextValue(BasePageOR.inputVendorSearch_new,this.UserData.noCritical_Vendor);
    this.click.buttonClick(BasePageOR.lblNoCriticalVendor);
    browser.sleep(4000);
    vendorDashboardPage.clickOnProductProfileTab();




    OversightAutomationOR.btnEditOA.isPresent().then(data=>{
      if(data == true){
        console.log("OA is currently On.")
        OversightAutomationOR.lblMethodSelcted.isDisplayed().then(data=>{
          if (data == true){
            console.log("Pairing method is category.");
            OversightAutomationOR.lblORPresent.isPresent().then(data=>{
              if(data == true){
                console.log("OR is linked to category.");

              }
            })
          }
          else{
            console.log("Pairing method is Risk");
          }
        })
      }
      else{
        console.log("OA is Currently Off.");
        userrolespage.clickOnSystemSettingsTab();
         browser.sleep(3000);
        oversightAutomationPage.verifyOAON();
        userrolespage.clickOnOversightAutomationTab();
        browser.sleep(3000);
        OversightAutomationOR.lblMethodSelcted.isDisplayed().then(data=>{
          if (data == true){
            console.log("Pairing method is category.");
          }
          else{
            console.log("Pairing method is Risk");
          }
        })
      }
    })
  }
}