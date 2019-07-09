import { AddVendorPage } from "../../com.venminder.page/dashboard/AddVendorPage";

describe("Add Vendor Functionality", function () {
  let addvendor = new AddVendorPage();

  it("Adding a New Vendor and go to Vendor Dashboard page", function () {
    addvendor.createNewVendor();
  });
});
