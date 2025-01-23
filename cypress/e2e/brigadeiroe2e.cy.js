describe('Practicing e2e', () => {
    let credentials;

    before(()=>{
        cy.fixture('testdata').then((data)=>{
            credentials = data;
        });
    });
    it('Should login to the website, search for a product and add to cart', () => {
        cy.login(credentials.email, credentials.password);
    });
})