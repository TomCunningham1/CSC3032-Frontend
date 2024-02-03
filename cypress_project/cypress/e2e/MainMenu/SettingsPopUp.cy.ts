/// <reference types="cypress" />
import environment from "../../../config/environment"

describe('Test Settings Pop Up', () => {

    beforeEach(() => {
      cy.visit(environment.frontendURL)
      cy.contains('Settings').click()
    })
  
    it('Should contain the Settings title', () => {
      cy.contains('Settings')
    })
  
    it('Should contain an option for the user to change font size', () => {
      cy.contains("Pick Text Size")
    })

    it('Drop down for text sizes should contain options', () => {
      cy.contains("Pick Text Size").click()
      cy.contains("Small")
      cy.contains("Medium")
      cy.contains("Large")
    })

    it('Should contain an option for the user to select text to speech', () => {
      cy.contains("Text to Speech")
    })
  
    it('Should contain the X button to close the pop-up', () => {
      cy.contains('X')
    })
  
    it('Should click the X button and check that the pop-up is closed', () => {
      cy.contains('X').click()
  
      cy.get('popup').should('not.exist')
    })
  })