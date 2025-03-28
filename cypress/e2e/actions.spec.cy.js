describe('actions spec', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('actions', () => {
    cy.get('[class="home-list"]')
      .find('[href="/commands/querying"]')
      .filter('a:contains("get")')
      .click()

    cy.get('[id="inputName"]').type('usename')
    cy.get('[id="inputName"]').clear()

    cy.scrollTo(0, 1500)

    cy.scrollTo('top')

    //cy.get().trigger('mouseover')
    //cy.get().trigger('mousedown', { button: 0 })
  })
})
