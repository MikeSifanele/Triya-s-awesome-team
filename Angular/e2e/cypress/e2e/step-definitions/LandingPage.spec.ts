import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import  toh  from '../Page object/toh'

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	cy.url().should('eq', 'http://localhost:4200/dashboard');
});


Given(/^The user is on the dashboard.$/, () => {
	cy.url().should('eq', 'http://localhost:4200/dashboard');
});

Then(/^four heroes should be displayed.$/, () => {
	toh.heroesCount();
});


When(/^user clicks on a Hero tile$/, () => {
	toh.clickHeroButton();
});

Then(/^user should see the heroes details displayed$/, () => {
	toh.verifyHeroDetail();
});


When(/^user navigates to heroes page$/, () => {
	toh.clickHeroesButton();
});

Then(/^user should see nine heroes$/, () => {
	toh.allHeroesCount();
});


Then(/^user clicks on delete button so heroes count should decrease by one$/, () => {
	toh.clickHeroesButton();
	toh.deleteHeroCountDecrease();
});

Then(/^user enters a name in the textbox, clicks the add button heroes and count should increase by one$/, () => {
	toh.clickHeroesButton();

	toh.addNewHero('Johnny Longschlong');
});


When(/^user clicks the add button with no name$/, () => {
	toh.clickHeroesButton();

	toh.addHeroWithNoName();
});

Then(/^count of heroes should stay the same$/, () => {
	toh.checkHeroesCount(9);
});
