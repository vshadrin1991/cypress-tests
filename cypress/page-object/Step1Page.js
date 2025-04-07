class Step1Page {
  _getPlan(index) {
    return cy.automation('subscription_p').eq(index)
  }

  _getPlanName(index) {
    return this._getPlan(index).find(
      '[data-automation-id="subscription_p_name"]'
    )
  }

  getPlanName(index, alice) {
    this._getPlanName(index).invoke('text').as(alice)
    return cy
  }
}

export default new Step1Page()
