/// <reference types="cypress" />
import environment from "../../../../config/environment"

describe('Quiz Instructions Page', () => {

  describe('SQL Injection', () => {

    beforeEach(() => {
      cy.visit(environment.frontendURL)
      cy.contains('SQL Injection').click()
      cy.contains('Play Quiz').click()
    })

    it('Should contain the page title', () => {
        cy.contains('Quiz Mode')
    })

    it('Should contain a previous button', () => {
        cy.contains('Previous')
    })

    it('Should contain a Next page button', () => {
        cy.contains('Next')
    })

    it('Should have a quit button', () => {
        cy.contains('Quit')
    })

    it('Should contain 4 options', () => {
        cy.get('.option').should('exist').then((buttons) => {
            if (buttons.length == 4) {
                expect(true).to.be.true
            } else {
                expect(true).to.be.false
            }
        })
    })
  })
})
