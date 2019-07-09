import { protractor, browser } from "protractor";
const until = protractor.ExpectedConditions;

export class AlertPopUp {
  public acceptAlert() {
    try {
      browser.wait(until.alertIsPresent(), 5000).then(function () {
        browser
          .switchTo()
          .alert()
          .then(function (alert) {
            alert.accept();
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
  }

  public dismissAlert() {
    try {
      browser.wait(until.alertIsPresent(), 5000).then(function () {
        browser
          .switchTo()
          .alert()
          .then(function (alert) {
            alert.dismiss();
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
  }

  public getTextOnAlert() {
    let data = null;
    try {
      browser.wait(until.alertIsPresent(), 5000).then(function () {
        browser
          .switchTo()
          .alert()
          .then(function (alert) {
            alert.getText().then(function (text) {
              data = text;
            });
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
    return data;
  }

  public setTextOnAlert(data: string) {
    try {
      browser.wait(until.alertIsPresent(), 5000).then(function () {
        browser
          .switchTo()
          .alert()
          .then(function (alert) {
            alert.sendKeys(data);
          });
      });
    } catch (error) {
      console.log("Alert Not Present Exception : " + error);
    }
  }
}
