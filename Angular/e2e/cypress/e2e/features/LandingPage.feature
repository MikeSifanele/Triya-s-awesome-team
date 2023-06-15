Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard

    Scenario: As a TOH user, I want to navigate to dashboard in order to see top 4 Heroes displayed.
        Given The user is on the dashboard.
        Then four heroes should be displayed.

    Scenario: As a TOH user, I want to select a hero from the dashboard in order to see the heroes details displayed
        When user clicks on a Hero tile
        Then user should see the heroes details displayed

    Scenario: As a TOH user, I want to navigate to heroes page in order to see 9
        When user navigates to heroes page
        Then user should see nine heroes
    
    Scenario: As a TOH user, I want to remove a hero in order to see the hero list decrease
        Then user clicks on delete button so heroes count should decrease by one

    Scenario: As a TOH user, I want to add a hero in order to see the hero list increase
        Then user enters a name in the textbox, clicks the add button heroes and count should increase by one

    Scenario: As a TOH user, I want to add a hero without a name in order to see the hero list remain the same
         When user clicks the add button with no name
         Then count of heroes should stay the same