describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=item1]').click()
    cy.get('[data-cy=editModalEmail]').should('have.value', 'Sincere@april.biz')
  })
})
