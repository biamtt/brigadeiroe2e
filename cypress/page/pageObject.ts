export class PageObject {
    /// <reference types="cypress" />

    private myAccountButton = '//*[@id="widget-navbar-217834"]/ul/li[6]/a';
    private emailInput = 'input[id="input-email"]';
    private passwordInput = 'input[id="input-password"]';
    private proceedLoginButton = 'input[type="submit"]';
    private searchInput = 'input[name="search"]';
    private searchButton = 'button[type="submit"]';
    private productList = '[data-list="product-layout product-list col-12"]';
    private addToCartButton = 'button[title="Add to Cart"]';
    private goToCartButton = '//*[@id="notification-box-top"]/div/div[2]/div[2]/div[1]/a';


    //to visit url
    visit(url: string) {
        cy.visit(url);
    }

    //go to My Account
    goToMyAccount() {
        cy.xpath(this.myAccountButton)
            .click();
    }

    //to enter the credentials and proceed the login
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

    //search product by product code
    searchProduct(productCode: string) {
        cy.get(this.searchInput)
            .eq(0)
            .scrollIntoView()
            .should('exist')
            .and('be.visible')
            .clear()
            .type(productCode)
            .should('have.value', productCode);

        cy.get(this.searchButton)
            .eq(0)
            .should('contain.text', "Search")
            .and('be.visible')
            .click({force: true});

    }

    //look for product list and add to card the first one
    lookForProductListAndGoToProductPage() {
        cy.get(this.productList).then(($items) => {
            if ($items.length > 0) {
                const firstItem = cy.wrap($items).first();

                firstItem.click()
                cy.log("Product found")
            } else {
                cy.log("Not found");
            }
        })
    }

    AddToCart() {
        cy.get(this.addToCartButton)
            .eq(0)
            .click({force: true});
    }

    goToCart(){
        cy.xpath(this.goToCartButton)
            .should('contain.text', 'View Cart')
            .click();
    }


}