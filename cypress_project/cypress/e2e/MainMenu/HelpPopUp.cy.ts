/// <reference types="cypress" />
import environment from "../../../config/environment"

describe('Test Help Pop Up', () => {

  beforeEach(() => {
    cy.visit(environment.frontendURL)
    cy.contains('Help').click()
  })

  it('Should contain the Help title', () => {
    cy.contains('Help')
  })

  it('Should containg message to help the user understand how to use the page', () => {
    cy.contains("To pick a game scenario, click scenario")
    cy.contains("To change your settings, click settings")
    cy.contains("To logout, click logout")
    cy.contains("To close pop ups, click the x")
  })

  it('Should contain the X button to close the pop-up', () => {
    cy.contains('X')
  })

  it('Should click the X button and check that the pop-up is closed', () => {
    cy.contains('X').click()

    cy.get('popup').should('not.exist')
  })
})