export class PageObject {
    /// <reference types="cypress" />

    private myAccountButton = '//*[@id="widget-navbar-217834"]/ul/li[6]/a';
    private emailInput = 'input[id="input-email"]';
    private passwordInput = 'input[id="input-password"]';

    //to visit url
    visit(url: string) {
        cy.visit(url);
    }

    //go to My Account
    goToMyAccount() {
        cy.xpath(this.myAccountButton)
            .click()
    }

    //enter the login credentials
    enterEmailLogin(email: string) {
        return cy.get(this.emailInput)
            .should('exist')
            .and('be.visible')
            .type(email)
    }

    enterPasswordLogin(password: string) {
        cy.get(this.passwordInput)
            .should('exist')
            .and('be.visible')
            .type(password);
    }


}