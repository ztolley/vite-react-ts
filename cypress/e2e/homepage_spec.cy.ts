describe('Homepage spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Displays a welcome message', () => {
    cy.get('h1').should('contain', 'Vite + React')
  })

  it('Allows the user to navigate to the detail page', () => {
    cy.get('a').contains('Goto Detail').click()
    cy.get('h1').should('contain', 'Detail')
  })
})
