/// <reference types="cypress" />
import environment from "../../../../config/environment"

describe('Quiz Instructions Page', () => {

  describe('SQL Injection', () => {

    beforeEach(() => {
      cy.visit(environment.frontendURL)
      cy.contains('SQL Injection').click()
    })

    it('Should contain the page title', () => {
      cy.contains('How to play')
      cy.contains('SQL Injection')
    })

    it('Should contain instructions for the game', () => {
      cy.contains('The scenerio has a duration of 6 minutes and ends as soon the time ends.')
      cy.contains('Each game consists of 5 questions.')
      cy.contains('Each question has 4 options.')
      cy.contains('Select the option which you believe answers the question most accurately by clicking on it.')
      cy.contains('Each game has 2 lifelines:')
      cy.contains('1 50/50 Chance')
      cy.contains('2 Hints')
      cy.contains('Select a 50/50 lifeline by clicking on the iconwill leave 2 answers for you, one right and one wrong')
      cy.contains('Select a hint by clicking on the iconwill remove on wrong answer and leave three answers for you')
      cy.contains('Feel free to quit the scenerio at anytime. You will be given a score at the end')
      cy.contains('The timer starts as soon as the game loads.')
    })

    it('Should contain a back button', () => {
      cy.contains('Back to main menu')
    })

    it('Back button should take the user back to the main menu page', () => {
      cy.contains('Back to main menu').click()
      cy.contains('Leaderboard')
    })

    it('Should contain a Play Quiz button', () => {
      cy.contains('Start the quiz')
    })

    it('Play button should take the user to the first question of the game', () => {
      cy.contains('Start the quiz').click()
      cy.contains('SQL Injection')
    })

  })
})
