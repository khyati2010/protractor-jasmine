import { element, by } from "protractor";
import { LoginPageOR } from "../shared/LoginPageOR";

export class OnboardingHomePageOR extends LoginPageOR {
  vendorOnboardingSidebar = element(
    by.xpath("//*[contains(text(),'Vendor OnBoarding')]")
  );
  vendorOnbaordingDisabledSidebar = element(
    by.xpath(
      "//*[@class='text-primary' and contains(text(),'Vendor OnBoarding')]"
    )
  );
  settingTile = element(
    by.xpath("//router-view/div[1]/div/div/div/div[2]/div/div/div/div[1]")
  );
  settingTileEditBtn = element(by.id("vo-settings_edit-btn"));
  newRequestTile = element(
    by.xpath("//router-view/div[1]/div/div/div/div[2]/div/div/div/div[2]")
  );
  pendingRequestTile = element(
    by.xpath("//router-view/div[1]/div/div/div/div[2]/div/div/div/div[3]")
  );
  softwareRequestPopup = element(
    by.xpath("//*[@id='software-upgrade']/div/div")
  );
  softwareSendRequestBtn = element(
    by.xpath("//*[@id='software-upgrade']/div/div/div[3]/div/button[1]")
  );
  requestSentPopup = element(
    by.xpath("//*[@id='software-upgrade-confirm']/div/div")
  );
  requestCheckBox = element(by.id("EnableDisableSendCheckbox"));
  requestClosePopup = element(
    by.xpath("//*[@id='software-upgrade-confirm']/div/div/div[3]/button")
  );
}
