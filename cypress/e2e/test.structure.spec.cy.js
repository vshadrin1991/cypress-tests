describe('template spec', () => {
  before(() => {
    cy.log('Before')
  })

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('test 1', () => {
    cy.log('Test 1')
  })

  it.skip('test 2', () => {
    cy.log('Test 2')
  })

  it('test 3', () => {
    cy.log('Test 3')
  })

  afterEach(() => {
    cy.log('After')
  })

  after(() => {
    cy.log('After')
  })
})
