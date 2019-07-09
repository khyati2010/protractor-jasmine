import { browser, ElementFinder } from "protractor";

export class ScrollPage {
  public scrollUp() {
    try {
      browser.executeScript("window.scrollTo(0,-450);");
    } catch (error) {
      console.error("Scroll Up is not working" + error);
    }
  }
  public scrollDown() {
    try {
      browser.executeScript("window.scrollTo(0,450);");
    } catch (error) {
      console.error("Scroll Down is not working" + error);
    }
  }

  public scrollToElement(element: ElementFinder) {
    try {
      if (element != null) {
        browser.executeScript(
          "arguments[0].scrollIntoView();",
          element.getWebElement()
        );
      } else {
        console.log("Click Button Web Element Not Located : " + element);
      }
    } catch (error) {
      console.error("Scroll to element is not working" + error);
    }
  }
}
