describe('Login Feature', () => {

  beforeEach(() => {
    // Ruft den db:seed Task auf, um die Datenbank zu befüllen
    cy.task('db:seed');
    cy.visit('/login');
  });

  it('should log in a seeded user successfully', () => {
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('Passwort123!');
    cy.get('button[type="submit"]').click();
    
    // Prüft, ob der Login erfolgreich war
    cy.url().should('include', '/dashboard');
  });

});