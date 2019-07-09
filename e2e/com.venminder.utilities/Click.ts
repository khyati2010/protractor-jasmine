import { ElementFinder, protractor, browser } from "protractor";
import { Wait } from "./Wait";
import { log4jsConfig } from "./log4jsconfig";

export class Click extends Wait {
  public buttonClick(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.click();
      }
    } else {
      console.log("Click Button Web Element Not Located : " + element);
    }
  }

  // public buttonClick(element: ElementFinder, elementName: string) {
  //   if (element != null) {
  //     if (this.isElementClickable(element)) {
  //       element.click().then(
  //         function () {
  //           log4jsConfig.Log().debug(elementName + " is clicked ");
  //         }
  //       )
  //     }
  //   } else {
  //     console.log("Click Button Web Element Not Located : " + element);
  //   }
  // }

  public buttonClickByKey(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element))
        element.sendKeys(protractor.Key.ENTER);
    } else {
      console.log("Click Button Web Element Not Located : " + element);
      throw new Error("Click Button Web Element Not Located : " + element);
    }
  }

  public buttonClickByAction(element: ElementFinder) {
    if (element != null) {
      browser.actions().mouseMove(element);
      if (this.isElementClickable(element)) {
        browser.actions().click().perform();
      }
    } else {
      console.log("Click Button Web Element Not Located : " + element);
      throw new Error("Click Button Web Element Not Located : " + element);
    }
  }


}
