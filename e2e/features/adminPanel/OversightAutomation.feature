Feature: OversightAutomation test flows in Admin Panel

@OversightAutomationScenario
    Scenario: Protractor Google
    Given I am on admin panel page with title contains "Admin Panel"
    When I click on "OversightAutomation Tab"
    Then I click search button
    Then I clear search textbox
