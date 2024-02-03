/// <reference types="cypress" />
import environment from "../../../config/environment"

describe('Test Scenario Pop Up', () => {

  beforeEach(() => {
    cy.visit(environment.frontendURL)
    cy.contains('Scenario').click()
  })

  it('Should contain the Scenarios title', () => {
    cy.contains('Scenarios')
  })

  it('Should contain the SQL Injection playthrough', () => {
    cy.contains('SQL Injection')
  })

  it('Should contain the DDOS Playthrough', () => {
    cy.contains('Distributed Denial Of Service')
  })

  it('SHould contain the Buffer Overflow playthrough', () => {
    cy.contains('Buffer Overflow')
  })

  it('Should contain the Cross Site Scripting Playthrough', () => {
    cy.contains('Cross Site Scripting')
  })

  it('Should contain the X button to close the pop-up', () => {
    cy.contains('X')
  })

  it('Should click the X button and check that the pop-up is closed', () => {
    cy.contains('X').click()

    cy.get('popup').should('not.exist')
  })
})