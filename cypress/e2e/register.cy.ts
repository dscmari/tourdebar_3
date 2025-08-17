describe('Register', () => {
  it('Register in database', () => {
    cy.visit('/')
    cy.contains('button', 'Register')
  })
})