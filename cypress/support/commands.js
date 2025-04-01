Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('automation', (id) => {
  return cy.get(`[data-automation-id="${id}"]`)
})
