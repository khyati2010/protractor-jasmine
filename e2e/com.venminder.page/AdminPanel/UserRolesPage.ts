import { browser, protractor } from 'protractor';
import { BasePage } from '../shared/BasePage';
import { Click } from '../../com.venminder.utilities/Click';
import { AdminPanelData } from '../../com.venminder.testdata/TestData';
import { UserRolesOR } from '../../com.venminder.page_object/AdminPanel/UserRolesOR';
import { OversightRequirementsOR } from '../../com.venminder.page_object/AdminPanel/OversightRequirementsOR';
import { BasePageOR } from '../../com.venminder.page_object/shared/BasePageOR';
const until = protractor.ExpectedConditions;

export class UserRolesPage extends BasePage {
    click = new Click();

    clickOnUserRolesTab() {
        browser.wait(until.visibilityOf(UserRolesOR.userRolesTab), 2000, "User Roles Tab is not Visible");
        this.click.buttonClick(UserRolesOR.userRolesTab);
        browser.wait(until.visibilityOf(UserRolesOR.headerUserRoles), 3000, "User Roles label is not Present");
        UserRolesOR.headerUserRoles.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.label_User_Roles)
        });
    }

    clickOnProductCategoriesTab() {
        browser.wait(until.visibilityOf(UserRolesOR.productCategoryTab), 1000, "Product Categories Tab is not Visible");
        this.click.buttonClick(UserRolesOR.productCategoryTab);
        browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 3000, "Loading indicator is still showing");
        OversightRequirementsOR.btnGotIt.isPresent().then(isPresent => {
            if (isPresent) {
                this.click.buttonClick(OversightRequirementsOR.btnGotIt);
            }
        });
        browser.wait(until.visibilityOf(UserRolesOR.headerProductCategories), 3000, "Product Categories label is not Present");
        UserRolesOR.headerProductCategories.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.label_Product_Categories)
        });
    }

    clickOnOversightRequirementsTab() {
        browser.wait(until.visibilityOf(UserRolesOR.oversightRequirementTab), 1000, "Oversight Requirements Tab is not Visible");
        this.click.buttonClick(UserRolesOR.oversightRequirementTab);
        browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 30000, "Loading indicator is still showing");
        OversightRequirementsOR.btnGotIt.isPresent().then(isPresent => {
            if (isPresent) {
                this.click.buttonClick(OversightRequirementsOR.btnGotIt);
                browser.sleep(2000);
            }
        });
        browser.wait(until.visibilityOf(UserRolesOR.headerOversightrequirements), 30000, "Oversight Requirements label is not Present");
        UserRolesOR.headerOversightrequirements.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.label_Oversight_Requirements)
        });
    }

    clickOnSystemSettingsTab() {
        browser.wait(until.visibilityOf(UserRolesOR.systemSettingTab), 1000, "System Settings Tab is not Visible");
        this.click.buttonClick(UserRolesOR.systemSettingTab);
        browser.wait(until.invisibilityOf(BasePageOR.loadingCircleIndicator), 3000, "Loading indicator is still showing");
        browser.wait(until.visibilityOf(UserRolesOR.headerSystemSettings), 3000, "System Settings label is not Present");
        UserRolesOR.headerSystemSettings.getText().then(text => {
            this.assertEquals(text.toString().trim(), AdminPanelData.label_System_Settings)
        });
    }
}

