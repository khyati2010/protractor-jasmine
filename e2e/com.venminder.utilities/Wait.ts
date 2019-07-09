import { ElementFinder, browser, protractor } from "protractor";
const until = protractor.ExpectedConditions;

export class Wait {

  public waitForElement(element: ElementFinder) {
    try {
      browser.wait(until.visibilityOf(element), 60000).then(() => {
        element.isDisplayed().then(isDisplay => {
          return isDisplay ? element : null;
        })
      });
    } catch (NoSuchElementException) {
      return null;
    }
  }

  public isElementClickable(element: ElementFinder): boolean {
    try {
      browser.wait(until.elementToBeClickable(element), 20000);
      return true;
    } catch (NoSuchElementException) {
      console.log("Web Element Not Clickable after 20 sec wait : " + NoSuchElementException);
      return false;
    }
  }
}
