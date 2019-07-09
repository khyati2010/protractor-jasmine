import { browser, protractor, ElementFinder } from "protractor";
import { Wait } from "./Wait";

export class MouseAction extends Wait {
  public elementMouseHover(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        browser
          .actions()
          .mouseMove(element)
          .perform();
      } else {
        console.log("elementMouseHover not Clickable Exception ");
        throw new Error(
          "Element not Clickable Exception after wait for 20 sec "
        );
      }
    } else {
      console.log("Mouse Hover Web Element Not Located : " + element);
      throw new Error("Mouse Hover Web Element Not Located : " + element);
    }
  }

  public mouseDragAndDrop(start: ElementFinder, end: ElementFinder) {
    if (start != null && end != null) {
      browser
        .actions()
        .dragAndDrop(start, end)
        .perform();
    } else {
      console.log("Mouse DragAndDrop Web Element Not Located : ");
      throw new Error("Mouse DragAndDrop Web Element Not Located : ");
    }
  }

  public doubleClick(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        browser
          .actions()
          .doubleClick(element)
          .perform();
      }
    } else {
      console.log("Mouse Hover Web Element Not Located : " + element);
      throw new Error("Mouse Hover Web Element Not Located : " + element);
    }
  }

  public rightClick(element: ElementFinder) {
    if (element != null) {
      browser
        .actions()
        .mouseMove(element)
        .perform();
      if (this.isElementClickable(element)) {
        browser
          .actions()
          .click(protractor.Button.RIGHT)
          .perform();
      } else {
        console.log("Mouse Hover Web Element Not Located : " + element);
        throw new Error("Mouse Hover Web Element Not Located : " + element);
      }
    }
  }
}
