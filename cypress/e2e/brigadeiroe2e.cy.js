describe('Practicing e2e', () => {
    let credentials;
    const productID = "Product 15";

    before(() => {
        cy.fixture('testdata').then((data) => {
            credentials = data;
        });
    });
    it('Should login to the website, search for a product and add to cart', () => {
        cy.login(credentials.email, credentials.password);
        cy.productToCard(productID)
    });
})