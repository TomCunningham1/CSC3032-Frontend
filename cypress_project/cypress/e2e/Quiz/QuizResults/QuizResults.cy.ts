/// <reference types="cypress" />
import environment from "../../../../config/environment"

describe('Quiz Instructions Page', () => {

  describe('SQL Injection', () => {

    beforeEach(() => {
        cy.visit(`${environment.frontendURL}`)
        cy.contains('Cross Site Scripting').click()
        cy.contains('Start the quiz').click()
        
        cy.get('.option').should('exist').then((buttons: any) => {
          buttons[0].click()
        })
        cy.get('.option').should('exist').then((buttons: any) => {
          buttons[0].click()
        })
        cy.get('.option').should('exist').then((buttons: any) => {
          buttons[0].click()
        })
        cy.get('.option').should('exist').then((buttons: any) => {
          buttons[0].click()
        })
        cy.get('.option').should('exist').then((buttons: any) => {
          buttons[0].click()
        })
        cy.get('.option').should('exist').then((buttons: any) => {
          buttons[0].click()
        })
        cy.get('.option').should('exist').then((buttons: any) => {
          buttons[0].click()
        })
    })
    
    describe('display user results', () => {
      it('Should be true', () => {
        cy.contains('Score')
      })
  
      it('should display the total number of questions', () => {
        cy.contains('Number of Questions')
      })
  
      it('Should display the total number of attempted questions', () => {
        cy.contains('Number of Answered Questions:')
      })
  
      it('Should display the total number of correct answers', () => {
        cy.contains('Correct Answers:')
      })
  
      it('Should display the number of Wrong Answers', () => {
        cy.contains('Wrong Answers:')
      })
  
      it('Should display the number of hints used', () => {
        cy.contains('Hints Used')
      })
  
      it('Should contain the number of 50-50 Used', () => {
        cy.contains('50/50 Used:')
      })

      it('Should contain the Time taken', () => {
        cy.contains('Time Taken:')
      })
    })

    describe('testing email button', () => {
      it('should contain the email button', () => {
        cy.contains('Send Email')
      })
  
      it('should contain a text box to enter the email', () => {
        cy.get('input')
      })
  
      it('should send email results to the user', () => {
        cy.get('[data-testid="send-email-text-input"]').type('tom.c22@hotmail.co.uk')
  
        cy.contains('Send Email').click()
      })
    })

    describe('test navigation buttons', () => {
      it('should contain the Play Again button', () => {
        cy.contains('Play Again')
      })
  
      it('should contain the back to home button', () => {
        cy.contains('Back to Home')
      })

      it('play again button should send the user back to the first question', () => {
        cy.contains('Play Again').click()

        cy.contains('Quiz Mode')
      })

      it('back home button should send the user back to the main menu page', () =>  {
        cy.contains('Back to Home').click()

        cy.contains('Hack Attack')
      })
    })
  })
})
