'use strict';
const fs = require('fs');
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  params: {
    login: {
      url: 'default',
    }
  },
  allScriptsTimeout: 360000,

  specs: ["./e2e/com.venminder.specs/AdminPanel/ProductCategoriesTests.ts"],

  exclude: [],
  multiCapabilities: [{
    browserName: "chrome",
    platform: "ANY",
    chromeOptions: {
      args: ["--disable-extensions", "disable-infobars"]
    }
  }],
  directConnect: true,
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000
  },
  // Spec patterns are relative to the location of the spec file. They may include glob patterns.
  suites: {
    sla: "e2e/com.venminder.specs/sla/*.ts",
    dashboard: "e2e/com.venminder.specs/dashboard/*.ts",
    onboarding: "e2e/com.venminder.specs/onboarding/*.ts",
    user_roles: ""
  },
  beforeLaunch: () => {
    require("ts-node").register({
      project: "e2e"
    });
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().pageLoadTimeout(90000);
    browser.manage().timeouts().implicitlyWait(60000);
    var HtmlReporter = require('protractor-beautiful-reporter');
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'Reports/AutomationReport',
      screenshotsSubfolder: 'Screenshots',
      takeScreenShotsOnlyForFailedSpecs: false,
      docTitle: 'Onboarding Automation Report',
      preserveDirectory: false,
      jsonsSubfolder: 'jsons'
    }).getJasmine2Reporter());

    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'all'
    }));
    //Log
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'all'
    }));
    //Report
    var AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: "allure-results"
    }));
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment(
          "Screenshot",
          function () {
            return new Buffer(png, "base64");
          },
          "image/png"
        )();
        done();
      });
    });
    //Login Function
    browser.get(browser.params.login.url);
    element(by.id("Username")).sendKeys("testy.tester@entclient1.com");
    console.log("Enter Email Id :- testy.tester@entclient1.com");
    element(by.id("Password")).sendKeys("Digital123");
    console.log("Enter Password :- Digital123");
    element(by.css("button[value='login']")).click();
    console.log("Click on Login button");
    browser.sleep(1000);
  }
};