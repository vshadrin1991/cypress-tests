import header from '../page-object/HeaderPage'
import step1 from '../page-object/Step1Page'

describe('page object', () => {
  beforeEach(() => {
    cy.visit('https://by-portal-shopping-cart-new.spnode.net/external/')
  })

  it('Step 1', () => {
    header
      .verifyStepName(1, 'Paso 1')
      .verifyStepName(2, 'Paso 2')
      .verifyStepName(3, 'Paso 3')
      .verifyStepName(4, 'Paso 4')
      .selectLanguage('English')
      .verifyStepName(1, 'Step 1')
      .verifyStepName(2, 'Step 2')
      .verifyStepName(3, 'Step 3')
      .verifyStepName(4, 'Step 4')

    step1
      .getPlanName(1, 'name')
      .get('@name')
      .then((name) => {
        cy.log(name)
      })
  })
})
