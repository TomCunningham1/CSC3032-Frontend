/// <reference types="cypress" />
import { ADMIN_LOGIN, SCREEN_SIZE } from "../../../config/constants"
import environment from "../../../config/environment"

const usernameInputId = '#username-input'
const passwordInputId = '#password-input'
const submitButtonId = '#admin-login-submit-button'
const adminMenuTextareaId = '#admin-menu-json-editor'
const scenarioSelectDropDownId = '#scenario-select'
const confirmationInputId = '#confirmation-input'

describe('Admin Login page', () => {
    beforeEach(()=> {
        cy.visit(environment.frontendURL)
        cy.viewport(SCREEN_SIZE.width, SCREEN_SIZE.height)
        cy.contains('Admin Login').click()
        cy.get(usernameInputId).type(ADMIN_LOGIN.email)
        cy.get(passwordInputId).type(ADMIN_LOGIN.password)
        cy.get(submitButtonId).click()
        cy.contains('View Scenario').click()
    })

    describe('Verify popup contents', () => {
        it('Should contain the popup title', () => {
            cy.contains('Delete Scenario')
        })

        it('Should contain a prompt for the user to use the dropdown to select a scenario', () => {
            cy.contains('Enter the title of the scenario which you want to delete.*')
        })

        it('Should contain the drop down options', () => {
            cy.get(scenarioSelectDropDownId)
        })

        it('Should contain the confirmation text input', () => {
            cy.get(confirmationInputId)
        })

        it('Should contain prompt to enter the confirmation text', () => {
            cy.contains('To confirm enter permanently delete into the below text box.')
        })

        it('Should contain the permanently delete warning', () => {
            cy.contains('*Deleting is permenant and cannot be undone')
        })

        it('Should contain the proceed button', () => {
            cy.contains('Proceed')
        })

        it('Should contain backend', () => {
            cy.contains('Back')
        })
    })
})