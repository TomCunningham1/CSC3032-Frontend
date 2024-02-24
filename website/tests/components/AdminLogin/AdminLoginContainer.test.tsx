import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import AdminLogin from '../../../src/components/AdminLogin/AdminLoginContainer';

describe('admin login container tests', () => {

    let output: RenderResult;

    let mockedFunction = jest.fn();

    const renderComponent = () => {
        return render(
            <MemoryRouter>
                <AdminLogin />
            </MemoryRouter>
        );
    }

    describe('verify UI features', () => {
        
        it('should contain the admin login title', () => {
            output = renderComponent()
            
            const title = output.getByTestId('admin-login-title')

            expect(title.innerHTML).toBe('Admin Users')
        })

        it('should contain the username input and prompt', () => {
            output = renderComponent()

            const prompt = output.getByTestId('username-prompt')

            const usernameInput = output.getByTestId('username-input')

            expect(prompt.innerHTML).toBe('Username')
            expect(usernameInput).toBeTruthy()
        })

        it('should contain the password input and prompt', () => {
            output = renderComponent()

            const prompt = output.getByTestId('password-prompt')

            const passwordInput = output.getByTestId('password-input')

            expect(prompt.innerHTML).toBe('Password')

            expect(passwordInput).toBeTruthy()
        })

        it('should contain the login button', () => {
            output = renderComponent()

            const loginButton = output.getByTestId('admin-login-submit-button')

            expect(loginButton).toBeTruthy()
            expect(loginButton.innerHTML).toBe('Login')
            expect(loginButton.className).toBe('admin-login-menu-submit-button')
        })
    })

    describe('verify validation functionality', () => {
        it('login button should be disabled when both input fields are empty', () => {
            output = renderComponent()

            const loginButton = output.getByTestId('admin-login-submit-button')

            expect(loginButton).toBeTruthy()
        })

        it('login button should be enabled when both input fields are filled', () => {
            output = renderComponent()

            const usernameInput = output.getByTestId('username-input')
            console.log(usernameInput)
            fireEvent.change(usernameInput,{ target: { value: "new value" }})
            console.log(usernameInput.innerHTML)
            const passwordInput = output.getByTestId('password-input')
            fireEvent.change(passwordInput, { target: { value: "new value" }})

            const loginButton = output.getByTestId('admin-login-submit-button')
            expect(loginButton).toBeTruthy()
            expect(loginButton.getAttribute('disabled')).toBe("")
        })
    })
});