export class PageObject {
    /// <reference types="cypress" />

    private myAccountButton = '//*[@id="widget-navbar-217834"]/ul/li[6]/a';
    private emailInput = 'input[id="input-email"]';
    private passwordInput = 'input[id="input-password"]';
    private proceedLoginButton = 'input[type="submit"]';
    private searchBar = 'input[placeholder="Search For Products"]';
    private searchButton = 'button[type="submit"]';

    //to visit url
    visit(url: string) {
        cy.visit(url);
    }

    //go to My Account
    goToMyAccount() {
        cy.xpath(this.myAccountButton)
            .click();
    }

    enterCredentialAndProceedLogin(email: string, password: string) {
        cy.get(this.emailInput)
            .should('exist')
            .and('be.visible')
            .type(email);

        cy.get(this.passwordInput)
            .should('exist')
            .and('be.visible')
            .type(password);

        cy.get(this.proceedLoginButton)
            .should("contain.value", "Login")
            .and('be.visible')
            .click();

    }

    searchByItemAndGoToItemPage(productID: string) {
        return cy.get(this.searchBar)
            .should('exist')
            .and('be.visible')
            .type(productID);

        // cy.get(this.searchButton)
        //     .should("contain.text", "SEARCH")
        //     .and('be.visible')
        //     .click();
    }


}