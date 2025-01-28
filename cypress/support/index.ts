import './commands';
import 'cypress-xpath';

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log('Cache cleaned');
});