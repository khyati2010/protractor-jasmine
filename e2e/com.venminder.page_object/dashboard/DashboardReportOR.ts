import { element, by } from "protractor";

export class VendorDashboardOR {
  static btnDownload = element(
    by.xpath("button[@click.delegate='downloadReportPDF()']")
  );

  static lblVendorName = element(by.xpath("div.banner-title.white.p-sm"));


}
