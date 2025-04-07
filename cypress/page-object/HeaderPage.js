class HeaderPage {
  // locators
  get _selectLang() {
    return cy.automation('select_lang')
  }

  get _lang() {
    return cy.automation('lang')
  }

  _getStepBtn(index) {
    return cy.automation(`step_btn_${index}`)
  }

  // actions

  selectLanguage(lang) {
    this._selectLang.click()
    this._lang.contains(lang).click()
    return this
  }

  verifyStepName(index, text) {
    this._getStepBtn(index).then(($el) => {
      expect($el.prop('innerText')).to.be.eq(text)
    })
    return this
  }

  clickByStep(index) {
    this._getStepBtn(index).click()
  }
}

export default new HeaderPage()
