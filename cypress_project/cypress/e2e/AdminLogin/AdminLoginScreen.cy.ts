/// <reference types="cypress" />
import { ADMIN_LOGIN, SCREEN_SIZE } from "../../../config/constants"
import environment from "../../../config/environment"

describe('Admin Login page', () => {
    beforeEach(()=> {
        cy.visit(environment.frontendURL)
        cy.viewport(SCREEN_SIZE.width, SCREEN_SIZE.height)
        cy.contains('Admin Login').click()
    })

    describe('Verify Page Content', () => {
        it('Should contain the container title', () => {
            cy.contains('Admin Users');
        })

        it('Should contain the username prompt', () => {
            cy.contains('Username');
        })

        it('Should contain the username input', () => {
            cy.get('#username-input')
        })

        it('Should contain the password prompt', () => {
            cy.contains('Password')
        })

        it('Should contain the password input', () => {
            cy.get('#password-input')
        })

        it('Should contain the button for logging in', () => {
            cy.contains('Login')
        })
    })

    describe('Verify validation', () => {
        it('Login button should be disabled until the user has typed in a username and password', () => {
            cy.get('#admin-login-submit-button').should('be.disabled')
        })

        it('login button should be disabled if the user has only typed in a password', () => {
            cy.get('#username-input').type(ADMIN_LOGIN.email)
            cy.get('#admin-login-submit-button').should('be.disabled')
        })

        it('login button should be disabled if the user has only typed in a password', () => {
            cy.get('#password-input').type(ADMIN_LOGIN.password)
            cy.get('#admin-login-submit-button')
        })

        it('login button should be enabled when the user has entered a username and password', () => {
            cy.get('#username-input').type(ADMIN_LOGIN.email)
            cy.get('#password-input').type(ADMIN_LOGIN.password)
            cy.get('#admin-login-submit-button').should('be.enabled')
        })
    })

    describe('User authentication', () => {
        it('Should block a user with valid password but invalid username', () => {

        })
    })
})