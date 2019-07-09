import { AddVendorPage } from "../../com.venminder.page/dashboard/AddVendorPage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";

describe("Search a Vendor and navigate to Vendor Dashboard page", function () {
  let addvendor = new AddVendorPage();
  let dashboardpage = new VendorDashboardPage();

  it("Delete a Vendor", function () {
    addvendor.createNewVendor();
    dashboardpage.clickOnDeleteVendor(addvendor.vendorName);
  });
  //TODO: Add specs  for this case

  it("click on sales and contracting tab", function () { });
  //TODO: Add specs  for this case

  it("select existing client for onboarding software request", function () { });
  //TODO: Add specs  for this case
});
