/// <reference types="cypress" />
import environment from "../../../config/environment"

describe('Test Main Menu', () => {

  beforeEach(() => {
    cy.visit(environment.frontendURL)
  })

  it('Should visit page and check the title is valid', () => {
    cy.visit(environment.frontendURL)
    cy.title().should('eq','React App')
  })

  it('Should contain a button for the scenario page', () => {
    cy.contains('Scenario')
  });

  it('Should contain a button for help', () => {
    cy.contains('Help')
  })

  it('Should contain a button for Leaderboard', () => {
    cy.contains('Leaderboard')
  })

  it('Should contain a button for settings', () => {
    cy.contains('Settings')
  })

  it('Should contain the game title in the title bar', () => {
    cy.contains('Hack-Attack')
  })
})