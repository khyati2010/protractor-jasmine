import { AddVendorPage } from "../../com.venminder.page/dashboard/AddVendorPage";
import { VendorDashboardPage } from "../../com.venminder.page/dashboard/VendorDashboardPage";

describe("Search a Vendor and navigate to Vendor Dashboard page", function () {
  let addvendor = new AddVendorPage();
  let dashboardpage = new VendorDashboardPage();

  it("Delete a Vendor", function () {
    addvendor.createNewVendor("existing");
    dashboardpage.clickOnDeleteVendor(addvendor.vendorName);
  });
});
