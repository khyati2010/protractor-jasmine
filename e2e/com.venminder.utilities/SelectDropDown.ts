import { Wait } from "./Wait";
import { by, ElementFinder } from "protractor";

export class SelectDropDown extends Wait {

  public selectElementByText(element: ElementFinder, text: string) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.all(by.tagName("option")).then(options => {
          let size = options.length;
          for (let i = 0; i < size; i++) {
            options[i].getText().then(data => {
              if (data.toString().trim() === text) {
                console.log(
                  "Selected Text from Dropdown: " + data.toString().trim()
                );
                options[i].click();
              }
            });
          }
        });
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public selectElementByIndex(element: ElementFinder, index: number) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.all(by.tagName("option")).then(options => {
          for (let i = 0; i < options.length; i++) {
            if (i === index) {
              options[index].click();
              options[index].getText().then(text => {
                console.log("Index Base Selected Text: " + text);
                return text;
              });
              break;
            }
          }
        });
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public selectElementByValue(element: ElementFinder, value: string) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.element(by.css("option[value='" + value + "']")).click();
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public getAllOptions(element: ElementFinder) {
    if (element != null) {
      if (this.isElementClickable(element)) {
        return element.all(by.tagName("option"));
      } else {
        console.error("Select Element not Clickable Exception");
      }
    } else {
      console.error("Select dropDown Web Element Not Located : " + element);
    }
  }

  public selectRandomDropdownReturnText(element: ElementFinder): any {
    if (element != null) {
      if (this.isElementClickable(element)) {
        element.click();
        element.all(by.tagName("option")).then(options => {
          var size = options.length;
          var randomNumber = Math.floor(Math.random() * size);
          console.log("Random Number: " + randomNumber);
          if (randomNumber == 0) {
            randomNumber = randomNumber + 1;
          }
          options[randomNumber].click();
          options[randomNumber].getText().then(text => {
            console.log("Random Selected Text: " + text);
            return text;
          });
        });
      } else {
        console.error("Select dropDown Web Element Not Located : " + element);
      }
    } else {
      console.error("Select Element not Clickable Exception");
    }
  }
}
