describe('actions spec', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('test then', () => {
    cy.automation('subscription_p')
      .eq(0)
      .find('[data-automation-id="subscription_p_name"]')
      .then(($el) => {
        expect($el.text()).to.eq('Lyubov Test')
        cy.log($el.text())
      })

    cy.get('[data-automation-id="subscription_p"]')
      .eq(0)
      .find('[data-automation-id="subscription_p_name"]')
      .invoke('text')
      .then(($text) => {
        cy.get('[data-automation-id="subscription_p"]').eq(0)
        cy.then(() => {
          expect($text).to.eq('Lyubov Test')
        })
      })

    cy.get('[data-automation-id="subscription_p"]')
      .eq(0)
      .find('[data-automation-id="subscription_p_name"]')
      .should('have.text', 'Lyubov Test')

    cy.get('[data-automation-id="subscription_p"]')
      .eq(0)
      .find('[data-automation-id="subscription_p_name"]')
      .then(($el) => {
        cy.wrap($el.text()).as('cart_name')
        cy.writeFile('text', $el.text())
      })

    cy.get('[data-automation-id="subscription_p_select_btn"]').eq(0).click()
    cy.get('[data-automation-id="step_btn_1"]').click()

    cy.readFile('text').then((t) => {
      cy.log(t)
    })

    cy.get('@cart_name').then((text) => {
      cy.get('[data-automation-id="subscription_p"]')
        .eq(0)
        .find('[data-automation-id="subscription_p_name"]')
        .should('have.text', text)
        .and('exist')
    })
  })
})
