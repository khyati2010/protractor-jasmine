import { browser, ElementFinder, protractor } from "protractor";
import { Wait } from "./Wait";
const until = protractor.ExpectedConditions;

export class TextBox extends Wait {

  public setTextValue(element: ElementFinder, data: string) {
    if (element != null) {
      browser.wait(until.visibilityOf(element), 20000);
      element.clear();
      element.sendKeys(data);
    } else {
      throw new Error("Element not Visible Exception");
    }
  }

  public getTextValue(element: ElementFinder) {
    if (element != null) {
      browser.wait(until.visibilityOf(element), 20000);
      element.getText().then(text => {
        return text.toString().trim();
      });
    } else {
      throw new Error("Element not Visible Exception");
    }
  }
}
