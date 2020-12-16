describe('my first test', function(){
  it('visits the example.cypress.io site', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Finds an element', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })

  it('click an element', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  })

  it('makes an assertion', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url()
      .should('include','/commands/actions')
  })

  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url()
      .should('include','/commands/actions')
    cy.get('.action-email').type('fake@email.com').should('have.value','fake@email.com')
  })


})