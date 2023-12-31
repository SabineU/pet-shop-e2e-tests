
describe('Sign Up to PetShop-UserApp', () => {
    it('should allow sign up with valid data', () => {
        cy.intercept('POST', '/api/v1/user/create').as('Customer');
        cy.navigateTo('/');
        cy.openLoginPopupModal();

        cy.generateRandomUser().then((randomUser) => {
            const user = randomUser;
            cy.fixture('locators.json').then((locators) => { 
                cy.signUp(locators.signUpFormField, locators.signUpFormButton, user);
            });

            cy.wait('@Customer').then((customer)=>{
                expect(customer.response.body.data.first_name).to.eq(user.first_name);
                expect(customer.response.body.data.last_name).to.eq(user.last_name);
                expect(customer.response.body.data.email).to.eq(user.email);
            });
        });
       
    });
});