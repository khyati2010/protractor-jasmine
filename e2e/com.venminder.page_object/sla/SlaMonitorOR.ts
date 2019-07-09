import { browser, element, by, protractor } from 'protractor';

export class SlaMonitorOR {


	static monitorYesButton = element(by.id("rdSlaMonitoringYes"));
	static selectManager = element(by.xpath("//span[contains(text(),'Select Manager')]"));
	static managerSelected = element.all(by.xpath("//span[contains(text(),'Testy Tester')]"));
	static monitorSla = element.all(by.xpath("//span[contains(text(),'Venminder SLA')]"));
	static selectMonitor = element(by.xpath("//span[contains(text(),'Select Monitor')]"));
	static selectEsclation = element(by.xpath("//span[contains(text(),'Select esclation point(s)')]"));
	static manageEsclation = element(by.id("multiEscalationPoint-list-item-1--text"));
	static dailyButton = element(by.buttonText("Daily"));
	static datePicker = element(by.className("form-control datetimepicker au-target"));
	static deliverableReviewedNo = element(by.id("deliverableReviewedNo"));
	static successfulPerformanceRange = element(by.id("txtASuccessfulPerformanceRange"));
	static improvementNeededRange = element(by.id("txtAImprovementNeededRange"));
	static inputRangeUnacceptablePerformance = element(by.id("inputRangeCT3"));
	static txtASuccessfulPerformancePenalty = element(by.id("txtASuccessfulPerformancePenalty"));
	static txtAImprovementNeededPenalty = element(by.id("txtAImprovementNeededPenalty"));
	static selUnacceptablePerformanceCurePeriod = element(by.id("selUnacceptablePerformanceCurePeriod"));
	static selImprovementNeededCurePeriod = element(by.id("selImprovementNeededCurePeriod"));
	static inputRangeCT1 = element(by.id("inputRangeCT1"));
	static selSuccessfulPerformanceCurePeriod = element(by.id("selSuccessfulPerformanceCurePeriod"));
	static days = element.all(by.cssContainingText('option', "30 Days"));
	static days1 = element(by.css('option[value="30"]'));
	static days2 = element(by.css('option[value="45"]'));
	static saveSlaButton = element(by.id("btnSaveSla"));
	static validationError = element.all(by.className("help-block validation-message"));
	static slaHome = element(by.buttonText("SLA Home"));
	static editButton = element(by.buttonText("Edit"));
	static addAnotherSla = element(by.buttonText("Add another SLA"));


}