describe('Tester Application Burgerito' , () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    });

    it ('Verifier la disponibilité de formulaire de login', () => {
        cy.get('input[name="email"]').should("exist");
        cy.get('input[name="password"]').should("exist");
        cy.get('button[type="submit"]').should("exist");



    }) 

    it ('Verifier la connexion ' , () => {
    cy.get('input[name="email"]').type("exemple@gmail.com");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click()
    cy.contains('Mon profil').click();
    cy.contains('exemple').should('exist');



    })
})