describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it.only('test 1', () => {
    //cy.get()
    cy.get('[data-automation-id="step_title"]')

    //cy.contains()
    cy.get('[data-automation-id="subscription_p_select_btn"]').contains(
      'Seleccionar'
    )

    //cy.find()
    cy.get('[data-automation-id="subscription_plans"]').find(
      '[data-automation-id="subscription_p"]'
    )

    //cy.find.eq()
    cy.get('[data-automation-id="subscription_plans"]')
      .find('[data-automation-id="subscription_p"]')
      .eq(0)

    //cy.children()
    cy.get('[data-automation-id="subscription_plans"]')
      .children('div')
      .children('div')
      .children('div')
      .children('div')
      .children('div')

    //cy.parent()
    cy.get('[data-automation-id="subscription_p_name"]')
      .parent('div')
      .parent('div')
      .parent('[data-automation-id="subscription_p"]')

    //cy.parents()
    cy.get('[data-automation-id="subscription_p_name"]').parents(
      '[data-automation-id="subscription_p"]'
    )
  })
})
