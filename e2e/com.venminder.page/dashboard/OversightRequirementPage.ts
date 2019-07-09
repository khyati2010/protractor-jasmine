import { BasePage } from '../shared/BasePage';
import { TextBox } from "./../../com.venminder.utilities/TextBox";
import { browser, protractor } from 'protractor';
import { SelectDropDown } from "../../com.venminder.utilities/SelectDropDown";
import { ScrollPage } from "../../com.venminder.utilities/ScrollPage";
import { Click } from '../../com.venminder.utilities/Click';
import { BasePageOR } from '../../com.venminder.page_object/shared/BasePageOR';
import { OversightRequirementOR } from '../../com.venminder.page_object/dashboard/OversightRequirementOR';
const until = protractor.ExpectedConditions;

export class OversightRequirementPage extends BasePage {
    textbox = new TextBox();
    click = new Click();
    select = new SelectDropDown();
    scrollpage = new ScrollPage();

    clickOnAddOversightRequirementButton() {
        this.scrollpage.scrollToElement(OversightRequirementOR.btnAddOversightItem);
        this.click.buttonClick(OversightRequirementOR.btnAddOversightItem);
        browser.sleep(2000);
        browser.wait(until.visibilityOf(OversightRequirementOR.headerAddOversightItem), 30000, "Add Oversight Requirement modal is not displayed");
    }

    addCustomOversightRequirement(questionLabel: string, selectOversightType: string | number) {
        this.textbox.setTextValue(OversightRequirementOR.inputOversightLabel, questionLabel);
        console.log("Entered Custom Oversight Question Label : " + questionLabel);
        if (typeof selectOversightType === "string")
            this.select.selectElementByText(OversightRequirementOR.selectOversightType, selectOversightType);
        if (typeof selectOversightType === "number")
            this.select.selectElementByIndex(OversightRequirementOR.selectOversightType, selectOversightType);
        console.log("Select Oversight Requirement Type : " + selectOversightType);
        browser.sleep(1000);
    }

    clickOnSubmitOversightItem() {
        OversightRequirementOR.btnSubmitOversightItem.isEnabled().then(isEnabled => {
            if (isEnabled)
                this.click.buttonClick(OversightRequirementOR.btnSubmitOversightItem);
        });
        browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 20000);
        browser.wait(until.visibilityOf(OversightRequirementOR.labelOversightRequirement), 20000);
    }

    clickOnCancelOversightItem() {
        OversightRequirementOR.btnCancelOversightItem.isEnabled().then(isEnabled => {
            if (isEnabled)
                this.click.buttonClick(OversightRequirementOR.btnCancelOversightItem);
        });
        browser.wait(until.visibilityOf(OversightRequirementOR.labelOversightRequirement), 20000);
    }

}