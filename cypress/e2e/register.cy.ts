describe('Register', () => {
  it('Register new user in database', () => {
    cy.visit('/login')
    cy.contains('a', 'Register').click()
    cy.url().should('include', '/register')

    cy.get('input[name="username"]').type('firstbornuser')
    cy.get('input[name="email"]').type('user0@example.com')
    cy.get('input[name="password"]').type('Passwort123!!')
    cy.get('button[type="submit"]').click()

  })
})