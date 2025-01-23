declare namespace Cypress{
    // @ts-ignore
    interface Chainable{
        login(email: string, password: string): Chainable<any>;
    }
}