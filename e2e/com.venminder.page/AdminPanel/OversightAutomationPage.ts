import { BasePage } from "../shared/BasePage";
import { TextBox } from "../../com.venminder.utilities/TextBox";
import { Click } from "../../com.venminder.utilities/Click";
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { ScrollPage } from "../../com.venminder.utilities/ScrollPage";
import { OversightAutomationOR } from "../../com.venminder.page_object/adminPanel/OversightAutomationOR";
import { browser, protractor, Button } from "protractor";
import { UserRolesPage } from "../../com.venminder.page/AdminPanel/UserRolesPage";
import { userData, AdminPanelData, OversightAutomation,ProductProfileData } from "../../com.venminder.testdata/TestData";
import { BasePageOR } from "../../com.venminder.page_object/shared/BasePageOR";
import { ProductProfileOR } from "../../com.venminder.page_object/dashboard/ProductProfileOR";
import { OversightRequirementOR } from "../../com.venminder.page_object/dashboard/OversightRequirementOR";
import { ProductProfilePage } from "../../com.venminder.page/dashboard/ProductProfilePage";
import { VendorProfilePage } from "../../com.venminder.page/dashboard/VendorProfilePage";
import { OversightRequirementPage } from "../dashboard/OversightRequirementPage";
import { VendorDashboardPage } from "./../../com.venminder.page/dashboard/VendorDashboardPage";
import { ProductCategoriesByCategoryPage } from "../../com.venminder.page/AdminPanel/ProductCategoriesByCategoryPage";
import { ProductCategoriesOR } from "../../com.venminder.page_object/adminPanel/ProductCategoriesOR";

const until = protractor.ExpectedConditions;
//const assert = chai.assert;

let productCategoriesPage = new ProductCategoriesByCategoryPage();
let basepage = new BasePage();
let userrolespage = new UserRolesPage();
let profilepage = new VendorProfilePage();
let vendorDashboardPage = new VendorDashboardPage();
let productProfilePage = new ProductProfilePage();
let oversightRequirementPage = new OversightRequirementPage();

export class OversightAutomationPage extends BasePage {
    textbox = new TextBox();
    click = new Click();
    select = new SelectDropDown();
    scroll = new ScrollPage();
    UserData = new userData();
    userrolespage = new UserRolesPage();
    selectOR: any;
    catSelected: any;
    catSel: any;
    allOR: any;
    unpairedOR: any;
    catUnpaired: any;
    unpaircategory: any;
    catSel1: any;
    selectOR1: any;
    pairdOr: any;
    ORlevel:any;
    riskSelected: any;
    pairMethod: any;
    productCategoriesByCategoryPage = new ProductCategoriesByCategoryPage();

verifyOASoftwareModule(){
    OversightAutomationOR.lblSalesNcontract.isDisplayed().then(data=>{
        this.assertEquals(data,true);
        this.click.buttonClick(OversightAutomationOR.lblSalesNcontract);
        browser.sleep(3000);
    });
    OversightAutomationOR.lblNewClientSale.isDisplayed().then(data=>{
        this.assertEquals(data,true);
        this.click.buttonClick(OversightAutomationOR.lblNewClientSale);
    this.textbox.setTextValue(OversightAutomationOR.txtFiSearch,this.UserData.FI_Name)
    this.click.buttonClick(OversightAutomationOR.btnSearchClient);
    browser.sleep(4000);
			OversightAutomationOR.btnSelectClient.isDisplayed().then(data => {
				this.assertEquals(data, true);
				this.click.buttonClick(OversightAutomationOR.btnSelectClient);
				browser.sleep(3000);
				// OversightAutomationOR.lblOA.isDisplayed().then(data=>{
				//    expect(OversightAutomationOR.lblOA.getAttribute('value')).toContain(this.UserData.Line_Item)
				//    console.log("Oversight Automation Line Item is present.")
				// });
			});
		});
	}

    verifySimplifiedModal(){
        this.click.buttonClick(OversightAutomationOR.btnSimplifiedModal);
        browser.wait(until.visibilityOf(OversightAutomationOR.header), 3000, "Welcome to Oversight Automation label is present");
        browser.wait(until.visibilityOf(OversightAutomationOR.btnCancelIcon), 3000, "Cancel button is present");
        browser.wait(until.visibilityOf(OversightAutomationOR.lblContentModal), 3000, "Modal text is present");
        OversightAutomationOR.lblContentModal.getText().then(text => {
		this.assertEquals(text.toString().trim(), AdminPanelData.lblContentModal);
		});
        this.click.buttonClick(OversightAutomationOR.btnClose);
        browser.sleep(2000);
    }

    verifycategoryDisable(){
        OversightAutomationOR.disableTxt.getText().then(data=>{
            expect(data.toString().trim()).toContain(OversightAutomation.category_disabled);
        });
    }

      verifyCategoryApply(){
        OversightAutomationOR.lblCategoryPaired.isDisplayed().then(data=>{
            this.assertEquals(data,true);
            console.log("Categories column is present.")
        });
      }

      verifyRiskApply(){
        OversightAutomationOR.lblRiskPaired.isDisplayed().then(data=>{
            this.assertEquals(data,true);
            console.log("Risk level column is present.")
        });
        OversightAutomationOR.lblCritGreen.isPresent().then(data=>{
            if(data == true){
            console.log("Criticality is checked.");
            OversightAutomationOR.lblCriticalityPaired.isDisplayed().then(data=>{
            this.assertEquals(data,true);
            console.log("Criticality column is present.")      
             });
         }
          else{
              console.log("Criticality is unchecked");
              OversightAutomationOR.lblCriticalityPaired.isPresent().then(data=>{
                this.assertEquals(data,false);
                console.log("Criticality column is not present.")
              });
             }
             OversightAutomationOR.lblNPIGreen.isPresent().then(data=>{
                if(data == true){
                console.log("NPI Access is checked.");
        OversightAutomationOR.lblNPIPaired.isDisplayed().then(data=>{   
            this.assertEquals(data,true);
            console.log("NPI column is present.");
          });
         }
             else{
        console.log("NPI Access is unchecked");
              OversightAutomationOR.lblNPIPaired.isPresent().then(data=>{
                this.assertEquals(data,false);
                console.log("NPI column is not present.")
              });
             }
        });
       });
      }

      verifyMethodApplied(){
         // browser.sleep(3000);
          OversightAutomationOR.lblApplyRiskTxt.isDisplayed().then(data=>{
              if (data == true){
               // browser.sleep(2000);
                this.click.buttonClick(OversightAutomationOR.btnCatgryMethod);
                this.click.buttonClick(OversightAutomationOR.btnApplyMethod);
                browser.sleep(2000);
                console.log("Pairing selected is Category.")
                this.verifyCategoryApply();
              }
              else{
               // browser.sleep(2000);
                this.click.buttonClick(OversightAutomationOR.btnRiskOn);  
                this.click.buttonClick(OversightAutomationOR.btnCriticality);
                this.click.buttonClick(OversightAutomationOR.btnNPIAccess);
                this.click.buttonClick(OversightAutomationOR.btnApplyMethod);
                browser.sleep(2000);
                console.log("Pairing selected is Risk with criticality and NPI Access.")
                OversightAutomationOR.lblResetPopup.isPresent().then(data=>{
                    if(data == true){
                        this.click.buttonClick(OversightAutomationOR.btnCheckradio);
                        this.click.buttonClick(OversightAutomationOR.btnSubmitReset);
                        browser.sleep(3000);
                    }
                    else{
                        console.log("There's no reset configuration required.")
                    }
                    this.verifyRiskApply();
                })
              }
          })
      }

      verifyPairCategory(action:string,productSelection:string){
            this.click.buttonClick(OversightAutomationOR.btnAddOR);
        OversightAutomationOR.lblPairingSelected.getText().then(data => {
            this.catSel = data.toString().trim();
            console.log("Category selected for pairing : " + this.catSel);
            this.click.buttonClick(OversightAutomationOR.btnCheckbx);
            OversightAutomationOR.lblORselected.getText().then(data => {
                this.selectOR = data.toString().trim();
                console.log("OR selected : " + this.selectOR);
            OversightAutomationOR.lblLevelSelectedOR(this.selectOR).getText().then(data=>{
              this.ORlevel = data.toString().trim();
              console.log("OR selected for : " +this.ORlevel);
                OversightAutomationOR.lblReviewPeriodFreq.isPresent().then(data=>{
                    if(data == true){
                   this.select.selectElementByText(OversightAutomationOR.lblSelectFrequency,OversightAutomation.select_frequency[2]);
                   this.click.buttonClick(OversightAutomationOR.btnConfirmOR);
                   browser.sleep(2000);
                   OversightAutomationOR.lblBeforePairOR.getText().then(data => {
                    this.pairdOr = data.toString().trim();
                    console.log("After saving OR presents are : " + this.pairdOr);
                   });
                }
                    else{
                        this.click.buttonClick(OversightAutomationOR.btnConfirmOR);
                        browser.sleep(2000);
                        OversightAutomationOR.btnSaveChng.isDisplayed().then(data=>{
                            if(data == true){
                                OversightAutomationOR.lblAllOR(this.catSel).getText().then(data => {
                                this.allOR = data.toString().trim();
                                console.log("Before saving OR presents are : " + this.allOR)
                                OversightAutomationOR.pairedFrequency(this.catSel).isEnabled().then(data => {
                                    if (data == true) 
                                    {
                                    this.select.selectElementByText(OversightAutomationOR.pairedFrequency(this.catSel), OversightAutomation.select_frequency[2]);
                                    console.log("Frequency is selected for paired category.")
                                    }
                                    else
                                    {
                                    console.log("Frequency is disabled.")
                                    }
                                  })
                                })
                                        if (action.includes(OversightAutomation.save_cancelPair[1])) {
                                        this.click.buttonClick(OversightAutomationOR.btnSaveChng);
                                        browser.sleep(3000);
                                        OversightAutomationOR.lblSavedTxt.getText().then(data => {
                                        var saveTxt = data.toString().trim();
                                        expect(saveTxt).toContain(OversightAutomation.msgLastSaved);
                                        })
                                        OversightAutomationOR.lblBeforePairOR.getText().then(data => {
                                        this.pairdOr = data.toString().trim();
                                        console.log("After saving OR presents are : " + this.pairdOr);
                                             if (this.pairdOr == this.allOR) {
                                            console.log("Pairing OR working fine.")
                                             }
                                             else {
                                            console.log("pairing OR not working.")
                                              }
                                            })
                                         }
                                        else {
                                        this.click.buttonClick(OversightAutomationOR.btnCancelChng);
                                        OversightAutomationOR.comparePairedOR(this.catSel, this.selectOR).getText().then(data =>      {
                                                if (data.toString() == this.selectOR) {
                                                console.log("Cancel functionality is not working fine.")
                                                }
                                                else {
                                                console.log("Cancel functionality is working fine.")
                                                    }
                                                });
                                            }
                            }
                               else{
                                console.log("Frequency is already set for this category.")
                            }
                        })
                    }
                    basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_new, BasePageOR.vendorNameSearchList_new);
                    vendorDashboardPage.clickOnProductProfileTab();
                    if(productSelection.includes(OversightAutomation.select_Product[1])){
                        this.click.buttonClick(OversightRequirementOR.btnAddNewPrdct);
                        browser.sleep(3000);
                        this.click.buttonClick(OversightRequirementOR.btnNewProduct);
                        browser.sleep(3000);
                        var rndm = this.generateRandomText();
                        let rndm1 = this.textbox.setTextValue(OversightRequirementOR.txtProductfield, rndm);
                        browser.sleep(3000);
                        console.log("New Product Added :" + rndm1);
                        this.textbox.setTextValue(OversightRequirementOR.txtProductType, this.generateRandomText());
                        this.select.selectElementByIndex(OversightRequirementOR.drpdwncategry,this.catSel)
                            this.click.buttonClick(OversightRequirementOR.btnSubmit);
                        browser.sleep(8000);
                            this.click.buttonClick(OversightRequirementOR.btnGotoVendrDashbrd);
                            browser.sleep(8000);
                            vendorDashboardPage.clickOnProductProfileTab();
                            browser.sleep(2000);
                            this.click.buttonClick(OversightRequirementOR.lblNewProduct(rndm1));
                            browser.sleep(3000);
                    }
                    else{
                    productProfilePage.clickOnEditProductInformationIcon();
            this.select.selectElementByText(ProductProfileOR.btnSelectCategory,this.catSel)
         productProfilePage.clickSaveOrCancelButton("save");
                    }
         vendorDashboardPage.clickOnOversightRequirementTab();
         oversightRequirementPage.verifyProductValues();
         OversightRequirementOR.checkOR(this.selectOR).isDisplayed().then(data=>{
          this.assertEquals(data,true);
          console.log("Paired OR is present and enabled in oversight Dashboard");
         });
                });
                    });
                });
            })
    }

    verifyPairRisk(action:string,productSelection:string){
        this.click.buttonClick(OversightAutomationOR.btnAddRiskOR);
               OversightAutomationOR.lblPairingSelected.getText().then(data => {
                   this.riskSelected = data.toString().trim();
                   console.log("Risk selected for pairing : " + this.riskSelected);
                   this.click.buttonClick(OversightAutomationOR.btnCheckbx);
              OversightAutomationOR.lblORselected.getText().then(data => {
                  this.selectOR = data.toString().trim();
                  console.log("OR selected : " + this.selectOR);
              OversightAutomationOR.lblLevelSelectedOR(this.selectOR).getText().then(data=>{
                this.ORlevel = data.toString().trim();
                console.log("OR selected for : " +this.ORlevel);
                OversightAutomationOR.lblReviewPeriodFreq.isPresent().then(data=>{
                    if(data == true){
                   this.textbox.setTextValue(OversightAutomationOR.lblSelectFrequency,OversightAutomation.select_frequency[2]);
                   this.click.buttonClick(OversightAutomationOR.btnConfirmOR);
                   browser.sleep(2000);    
                   OversightAutomationOR.lblBeforePairOR.getText().then(data => {
                    this.pairdOr = data.toString().trim();
                    console.log("After saving OR presents are : " + this.pairdOr);
                   });
                }
                else{
                 //   console.log("Select Frequency option is not present as OA is Off.")
                    this.click.buttonClick(OversightAutomationOR.btnConfirmOR);
                    browser.sleep(2000);
                    OversightAutomationOR.btnSaveChng.isDisplayed().then(data=>{
                        if(data == true){
                            OversightAutomationOR.lblFreqencySelected.isEnabled().then(data=>{
                                if (data == true) {
                                    this.select.selectElementByText(OversightAutomationOR.lblFreqencySelected, 
                                  OversightAutomation.select_frequency[2]);
                                    console.log("Frequency is selected for paired risk.")
                                }
                                else {
                                    console.log("Frequency is disabled.")
                                }
                        OversightAutomationOR.lblBeforePairOR.getText().then(data => {
                            this.allOR = data.toString().trim();
                            console.log("Before saving OR presents are : " + this.allOR)
                            });
                        });
                 if (action.includes(OversightAutomation.save_cancelPair[1])) {
                                     this.click.buttonClick(OversightAutomationOR.btnSaveChng);
                                     browser.sleep(3000);
                                     OversightAutomationOR.lblSavedTxt.getText().then(data => {
                                         var saveTxt = data.toString().trim();
                                         expect(OversightAutomation.msgLastSaved).toContain(saveTxt);
                                     })
                                     OversightAutomationOR.lblBeforePairOR.getText().then(data => {
                                         this.pairdOr = data.toString().trim();
                                         console.log("After saving OR presents are : " + this.pairdOr);
                                         if (this.pairdOr == this.allOR) {
                                             console.log("Pairing OR working fine.")
                                         }
                                         else {
                                             console.log("pairing OR not working.")
                                         }
                                     })
                                 }
                                 else {
                                     this.click.buttonClick(OversightAutomationOR.btnCancelChng);
                                     OversightAutomationOR.comparePairedOR(this.catSel, this.selectOR).getText().then(data => {
                                         if (data.toString() == this.selectOR) {
                                             console.log("Cancel functionality is not working fine.")
                                         }
                                         else {
                                             console.log("Cancel functionality is working fine.")
                                         }
                                     });
                                 }
                        }
                        else{
                            console.log("Frequency is already set for this category.")
                        }
                            });
                        }
                        basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_new, BasePageOR.vendorNameSearchList_new);
                        userrolespage.clickOnProductCategoriesTab();
                        if(productSelection.includes(OversightAutomation.select_Product[1])){
                            this.click.buttonClick(OversightRequirementOR.btnAddNewPrdct);
                            browser.sleep(3000);
                            this.click.buttonClick(OversightRequirementOR.btnNewProduct);
                            browser.sleep(3000);
                            var rndm = this.generateRandomText();
                            let rndm1 = this.textbox.setTextValue(OversightRequirementOR.txtProductfield, rndm);
                            browser.sleep(3000);
                            console.log("New Product Added :" + rndm1);
                            this.textbox.setTextValue(OversightRequirementOR.txtProductType, this.generateRandomText());
                            this.select.selectElementByIndex(OversightRequirementOR.drpdwncategry,this.catSel)
                                this.click.buttonClick(OversightRequirementOR.btnSubmit);
                            browser.sleep(8000);
                                this.click.buttonClick(OversightRequirementOR.btnGotoVendrDashbrd);
                                browser.sleep(8000);
                                vendorDashboardPage.clickOnProductProfileTab();
                                browser.sleep(2000);
                                this.click.buttonClick(OversightRequirementOR.lblNewProduct(rndm1));
                                browser.sleep(3000);
                         }
                        else{
                            console.log("Verifying for Existing product only.")
                        }
                        this.click.buttonClick(ProductProfileOR.btnEditRisk);
                        this.textbox.setTextValue(ProductProfileOR.btnSelectRisk,this.riskSelected);
                        this.click.buttonClick(ProductProfileOR.btnSubmitRisk);
                        vendorDashboardPage.clickOnOversightRequirementTab();
                        oversightRequirementPage.verifyProductValues();
                        OversightRequirementOR.checkOR(this.selectOR).getText().then(data=>{
                          this.assertEquals(data.toString().trim(),true);
                          console.log("Paired OR is present and enabled in oversight Dashboard");
                         });
                        });
                    });
                });
            });
        }
            
      verifyPairOR(action: string, productSelection: string) {
            OversightAutomationOR.lblRiskPaired.isPresent().then(riskPaired => {
            if (riskPaired == false) {
                OversightAutomationOR.btnAddOR.isPresent().then(data => {
                    if (data == true) { 
                this.verifyPairCategory(action,productSelection);
                 }
                 else {
                    console.log("There are no add OR icon, hence unpairing.")
                    this.click.buttonClick(OversightAutomationOR.btnUnpair);
                    this.click.buttonClick(OversightAutomationOR.btnSaveChng);
                    browser.sleep(2000);
                    this.verifyPairCategory(action,productSelection);
                  }
                })
               }
                  else {
                this.verifyPairRisk(action,productSelection);
                   }
            });
        }

    verifyUnpairCategory(){
                     OversightAutomationOR.lblunpairOR.getText().then(data=>{
                       this.unpairedOR = data.toString().trim();
                       console.log("Unpairing OR : " +this.unpairedOR);
                   OversightAutomationOR.unpairCat(this.unpairedOR).getText().then(data=>{
                       this.catUnpaired = data.toString().trim();
                       console.log("Category which is unpaired : " +this.catUnpaired);
                   
                   this.click.buttonClick(OversightAutomationOR.btnUnPairOR(this.catUnpaired,this.unpairedOR));
                   this.click.buttonClick(OversightAutomationOR.btnSaveChng);
                   browser.sleep(2000);
                   OversightAutomationOR.unpairOR(this.catUnpaired,this.unpairedOR).isPresent().then(data=>{
                       if(data == true){
                           console.log("Unpairing is not working.");
                       }
                       else{
                           console.log("Unpairing working fine.")
                       }
                   });
                   });
                  });
                }

    verifyUnpairRisk(){
                    OversightAutomationOR.lblUnpairRiskOR.getText().then(data=>{
                       this.unpairedOR = data.toString().trim();
                       console.log("Unpairing OR : " +this.unpairedOR);
                   this.click.buttonClick(OversightAutomationOR.btnUnpairRiskX);
                   this.click.buttonClick(OversightAutomationOR.btnSaveChng);
                   browser.sleep(2000);
                   OversightAutomationOR.unpairRisk(this.unpairedOR).isPresent().then(data=>{
                       if(data == true){
                           console.log("Unpairing is not working.");
                       }
                       else{
                           console.log("Unpairing working fine.")
                       }
                   })
               })
               }

      verifyUnpairOR(){
          OversightAutomationOR.lblRiskPaired.isPresent().then(riskPaired => {
            if (riskPaired == false) {
        OversightAutomationOR.btnUnpair.isPresent().then(data=>{
            if(data == true){
                this.verifyUnpairCategory();
            }
            else{
                this.click.buttonClick(OversightAutomationOR.btnAddOR);
                this.click.buttonClick(OversightAutomationOR.btnCheckbx);
                this.click.buttonClick(OversightAutomationOR.btnConfirmOR);
                browser.sleep(2000);
                this.verifyUnpairCategory();
                }
          }) 
      }
      else{
        OversightAutomationOR.btnUnpairRiskX.isPresent().then(data=>{
            if(data == true){
                this.verifyUnpairRisk();
               }
               else{
            this.click.buttonClick(OversightAutomationOR.btnAddRiskOR);
            this.click.buttonClick(OversightAutomationOR.btnCheckbx);
            this.click.buttonClick(OversightAutomationOR.btnConfirmOR);
            browser.sleep(2000); 
            this.verifyUnpairRisk();
                }
           })
          }
        })
    }


      verifyShowFilter(){
                    OversightAutomationOR.lblShowFilter.getText().then(data=>{
                        expect(data.toString().trim()).toContain(OversightAutomation.lblDefault_filter);
                        this.click.buttonClick(OversightAutomationOR.lblShowFilter);
                        OversightAutomationOR.lblVendorLevel.getText().then(data=>{ 
                    expect(data.toString().trim()).toContain(OversightAutomation.lblVendorLevel);
                     OversightAutomationOR.lblProductLevel.getText().then(data=>{
                    expect(data.toString().trim()).toContain(OversightAutomation.lblProductLevel);
                    this.click.buttonClick(OversightAutomationOR.btnSelectAllFilter);
                    browser.sleep(2000);
                        this.click.buttonClick(OversightAutomationOR.btnDeSelectAllFilter);
                        this.textbox.setTextValue(OversightAutomationOR.btnSearchFilter,this.pairdOr);
                        browser.sleep(2000);
                        if(this.ORlevel == 'Vendor level'){
                        this.click.buttonClick(OversightAutomationOR.lblVendorORFilter);
                        }
                        else{
                            this.click.buttonClick(OversightAutomationOR.lblProductORFilter);
                        }
                        OversightAutomationOR.lblShowFilter.getText().then(data=>{
                            expect(data.toString().trim()).toContain(this.pairdOr);
                            console.log("OR selected from filter : " +this.pairdOr);
                            this.click.buttonClick(OversightAutomationOR.lblShowFilter);
                            OversightAutomationOR.verifyFilter(this.pairdOr).getCssValue('background-color').then((value)=>{
                                var a1 = value;
                                console.log("Value after filter : " +a1);
                                var a2 = "rgba(93, 186, 191, 1)";
                                expect(a1.toString()).toContain(a2.toString());
                                console.log("Selected OR is coloured, hence filter option is working fine.")
                        });
                      });
                    });
                });
            });
          }


          verifyEditOA() {
              browser.sleep(2000);
            OversightAutomationOR.btnEditOA.isPresent().then(data => {
                if (data == true) {
                    OversightAutomationOR.lblPairingMethod.getText().then(data => {
                        var lblPairingMethod = data.toString().trim();
                        console.log("Selected pairing method is " +lblPairingMethod);
                    })
                    browser.sleep(3000);
                    this.click.buttonClick(OversightAutomationOR.btnEditOA);
                    OversightAutomationOR.lblApplyRiskTxt.isDisplayed().then(data=>{
                        if (data == true){
                            this.click.buttonClick(OversightAutomationOR.checkCriticality);
                            this.click.buttonClick(OversightAutomationOR.checkNPI);
                        }
                        else{
                            browser.sleep(2000);
                            this.click.buttonClick(OversightAutomationOR.btnRiskOn)
                            browser.sleep(2000);
                            this.click.buttonClick(OversightAutomationOR.checkCriticality);
                            this.click.buttonClick(OversightAutomationOR.checkNPI);
                        }
                    })
                    this.click.buttonClick(OversightAutomationOR.checkConfirm);
                    browser.sleep(2000);
                    this.click.buttonClick(OversightAutomationOR.btnProceed);
                    browser.sleep(3000);
                }
             });
      }

    verifySystemSettings(action: string, categoryAction: string, productSelection:string) {
       // browser.sleep(2000);
        OversightAutomationOR.lblOAstatusOff.isPresent().then(data => {
            if (data == true)
            {
                console.log("Oversight Automation is Off")
                OversightAutomationOR.lblOROn.isPresent().then(data => {
                if(data == true)
                {  
                    console.log("Oversight Requirement is On")
                    OversightAutomationOR.lblCatMangmtDisable.isPresent().then(data => {
                        if(data == true)
                        { 
                             console.log("Category Management is On")
                             this.userrolespage.clickOnOversightAutomationTab();
                             this.verifyMethodApplied();
                             this.verifyPairOR(action,productSelection);
                             basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                             userrolespage.clickOnOversightAutomationTab();
                             this.verifyShowFilter();
                            this.verifyUnpairOR();
                        }
                        else
                        { 
                            OversightAutomationOR.lblCatstatusOff.isDisplayed().then(data => {
                            if(data == true)
                            {
                            console.log("Category Management is Off")
                            this.userrolespage.clickOnOversightAutomationTab();
                            this.verifycategoryDisable();
                            this.verifyRiskApply();
                            this.verifyPairOR(action,productSelection)
                            basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                             userrolespage.clickOnOversightAutomationTab();
                            this.verifyShowFilter();
                             this.verifyUnpairOR()
                            }
                            else
                            {
                            console.log("Category Management is On")
                            this.userrolespage.clickOnOversightAutomationTab();
                            this.verifyMethodApplied();
                            this.verifyPairOR(action,productSelection);
                            basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                             userrolespage.clickOnOversightAutomationTab();
                            this.verifyShowFilter();
                            this.verifyUnpairOR()
                            }
                          })
                        }  
                    });
                }
                else
                {
                    console.log("Oversight Requirement is Off")
                    OversightAutomationOR.lblCatMangmtDisable.isPresent().then(data => {
                        if(data == true)
                        { 
                             console.log("Category Management is On")
                             this.userrolespage.clickOnOversightAutomationTab();
                             this.verifyMethodApplied();
                             this.verifyPairOR(action,productSelection);
                             basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                             userrolespage.clickOnOversightAutomationTab();
                             this.verifyShowFilter();
                             this.verifyUnpairOR()
                        }
                        else
                        { 
                            OversightAutomationOR.lblCatstatusOff.isDisplayed().then(data => {
                            if(data == true)
                            {
                            console.log("Category Management is Off")
                            this.userrolespage.clickOnOversightAutomationTab();
                            this.verifycategoryDisable();
                            this.verifyRiskApply();
                            this.verifyPairOR(action,productSelection);
                            basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                             userrolespage.clickOnOversightAutomationTab();
                            this.verifyShowFilter();
                            this.verifyUnpairOR()
                            }
                            else
                            {
                             console.log("Category Management is On")
                            this.userrolespage.clickOnOversightAutomationTab();
                            this.verifyMethodApplied();
                            this.verifyPairOR(action,productSelection);
                            basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                             userrolespage.clickOnOversightAutomationTab();
                            this.verifyShowFilter();
                            this.verifyUnpairOR() }
                          })
                        }  
                    });
                }
              })
            }
            else
            {
                console.log("Oversight Automation is On and hence Oversight Requirement is also On")
                OversightAutomationOR.lblCatMangmtDisable.isPresent().then(data => {
                    if(data == true)
                    { 
                        console.log("Category Management is On")
                         this.userrolespage.clickOnOversightAutomationTab();
                         this.verifyEditOA();
                         OversightAutomationOR.lblRiskPaired.getText().then(data=>{
                            var a = data.toString().trim()
                        if (a == OversightAutomation.lblRiskSelected){
                            this.verifyRiskApply();
                        }
                        else{
                            this.verifyCategoryApply();
                        }
                         })
                         this.verifyPairOR(action,productSelection);
                         basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                         userrolespage.clickOnOversightAutomationTab();
                         this.verifyShowFilter();
                         this.verifyUnpairOR()
                    }
                    else
                    { 
                        OversightAutomationOR.lblCatstatusOff.isDisplayed().then(data => {
                        if(data == true)
                        {
                        console.log("Category Management is Off")
                        this.userrolespage.clickOnOversightAutomationTab();
                        this.verifyEditOA();
                        this.verifyRiskApply();
                        this.verifyPairOR(action,productSelection);
                        basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                        userrolespage.clickOnOversightAutomationTab();
                        this.verifyShowFilter();
                        this.verifyUnpairOR()
                        }
                        else
                        { 
                            console.log("Category Management is On")
                            this.userrolespage.clickOnProductCategoriesTab();
                          productCategoriesPage.clickOnAddNewCategory();
                          let categoryName =AdminPanelData.categoryName + basepage.generateRandomText();
                            productCategoriesPage.addNewCategory(categoryName,"NON-EXEMPT");
                            this.productCategoriesByCategoryPage.verifyMsgOApairingCategory();
                            productCategoriesPage.clickOnSubmitNewCategory();
                            productCategoriesPage.clickOnEditDeleteCategorytButton(categoryName,"EDIT");
                            this.userrolespage.clickOnOversightAutomationTab();
                            this.verifyEditOA();
                            this.verifyCategoryApply();
                            this.verifyPairOR(action,productSelection);
                            basepage.goToAdminPanelPage(BasePageOR.profileIcon_new,BasePageOR.adminPanelLink_new);
                            userrolespage.clickOnOversightAutomationTab();
                            this.verifyShowFilter();
                            this.verifyUnpairOR();
                            if (categoryAction == "add") {
                            userrolespage.clickOnProductCategoriesTab();
                            productCategoriesPage.clickOnAddNewCategory();
                            productCategoriesPage.verifyInfoMessageWhenOAisON("add");
                            let categoryName = basepage.generateRandomText() + AdminPanelData.categoryNameMaxChar;
                            productCategoriesPage.enterNewCategory(categoryName);
                            productCategoriesPage.checkExemptOption();
                            productCategoriesPage.clickOnSubmitNewCategory();    
                            productCategoriesPage.verifyEditExemptCategory(categoryName);
                            productCategoriesPage.checkExemptOption();
                                productCategoriesPage.verifyInfoMessageWhenOAisON("edit");  
                            basepage.searchVendorAndGoToDashboardPage(BasePageOR.inputVendorSearch_old, BasePageOR.vendorNameSearchList_old);
                            vendorDashboardPage.clickOnProductProfileTab();
                            productProfilePage.clickOnEditProductInformationIcon();
                            productProfilePage.selectCategory("new");
                            productCategoriesPage.verifyInfoMessageWhenOAisON("add"); 
                            }
                            else if (categoryAction = "delete") {
                                productCategoriesPage.verifyDeleteAndReassignCategory;
                               productCategoriesPage.verifyInfoMessageWhenOAisON("delete"); 
                            }
							}
						});
					}
				});
			}
		});
	}

    verifyShowPrompt() {
        OversightAutomationOR.lblHeader.isPresent().then(data => {
            if (data == true) {
                browser.wait(
                    until.visibilityOf(OversightAutomationOR.btnDailogProceed),
                    3000
                );
                browser.wait(
                    until.visibilityOf(OversightAutomationOR.btnDailogCancel),
                    3000
                );
                this.click.buttonClick(OversightAutomationOR.btnDailogProceed);
            }
        });
    }
    
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
               // browser.sleep(2000);
                this.click.buttonClick(OversightAutomationOR.btnOATurnOn);
                this.click.buttonClick(OversightAutomationOR.btnOASaveChanges);
               // browser.sleep(2000);
                console.log("Oversight Automation is now Turned On.")
               }
               else{
                this.click.buttonClick(OversightAutomationOR.btnOATurnOn);
                this.click.buttonClick(OversightAutomationOR.btnOASaveChanges);
               // browser.sleep(2000);
                console.log("Oversight Automation is now Turned On.")
               }
            });
          }
        });
      }

      verifyCMOff(){
          OversightAutomationOR.lblTurnOffMsg.isPresent().then(data=>{
              if(data == true){
                OversightAutomationOR.lblOAstatusOff.isPresent().then(data=>{
                    if(data == true){
                    userrolespage.clickOnOversightAutomationTab();
                    browser.sleep(3000);
                    this.click.buttonClick(OversightAutomationOR.btnRiskOn);
                    this.click.buttonClick(OversightAutomationOR.btnApplyMethod);
                    userrolespage.clickOnSystemSettingsTab();
                    browser.sleep(3000);
                    this.click.buttonClick(OversightAutomationOR.btnTurnoffCat);
                    this.click.buttonClick(OversightAutomationOR.btnSaveChanges);
                    browser.sleep(2000);
                    console.log("Category Management is now Off.")
                    }
                    else{
                        userrolespage.clickOnOversightAutomationTab();
                        browser.sleep(3000);
                        this.click.buttonClick(OversightAutomationOR.btnEditOA);
                        this.click.buttonClick(OversightAutomationOR.btnRiskOn);
                        this.click.buttonClick(OversightAutomationOR.checkConfirm);
                        this.click.buttonClick(OversightAutomationOR.btnProceed);
                        browser.sleep(2000);
                        userrolespage.clickOnSystemSettingsTab();
                    browser.sleep(3000);
                    this.click.buttonClick(OversightAutomationOR.btnTurnoffCat);
                    this.click.buttonClick(OversightAutomationOR.btnSaveChanges);
                    browser.sleep(2000);
                    console.log("Category Management is now Off.")
                    }
                })
              }
              else{
                  OversightAutomationOR.lblTurningOn.isPresent().then(data=>{
                      if(data == true){
                          console.log("Category Management is already Off.")
                      }
                      else{
                        this.click.buttonClick(OversightAutomationOR.btnTurnoffCat);
                        this.click.buttonClick(OversightAutomationOR.btnSaveChanges);
                        browser.sleep(2000);
                        console.log("Category Management is now Off.")
                      }
                  })
              }
          })
      }
  

    verifyDataMissingMessage() {
        //No category ==> pre condition ==> CM = On , OA= ON(verifyOAON)==> OR Dashboard= check messgae (Admin)
        
        //step 1 - CM=OFF, add new vendor(no cat, no criticality)-store vendor name, product name
//step 2 - sys setting- CM=ON, OA=ON--go to OR dashbaord
        //step 3 -OR dashbaord- message against the product - radio button selection
        //No Risk ==> pre condition ==> CM = On(verifyCMON) , OA= ON(verifyOAON)==> OR Dashboard= check messgae (Admin)
        //Non admin log in(OA=ON)
        
        //step 1 sys setting- Risk=ON, OA=ON--go to OR dashbaord
//step 2 - go to OR dashbaor- OR dashbaord- message against the product - radio button selection
  //Non admin log in(OA=ON)
        
        //No NPI ==> pre condition ==> CM = On , OA= ON(verifyOAON)==> OR Dashboard= check messgae (Admin)        
        //step 1 sys setting- Risk=ON, OA=ON--go to OR dashbaord
//step 2 - go to OR dashbaor- OR dashbaord- message against the product - radio button selection
        //Non admin log in(OA=ON)
        
        //No criticality ==> pre condition ==> Risk = On , OA= ON(verifyOAON)==> OR Dashboard= check messgae (Admin)       
        //step 1 sys setting- Risk=ON, OA=ON--go to OR dashbaord- message against the product - radio button selection
       
        
        //Non admin log in(OA=ON)
    }

}