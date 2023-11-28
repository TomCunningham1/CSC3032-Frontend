import { MemoryRouter } from 'react-router-dom';
import Register from '../../src/pages/Register';
import React from 'react';
import { render } from '@testing-library/react';

describe('Tests for the login page', () => {
    it(' Should display the login box', () => {
        const loginComponent = render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        const loginBox = loginComponent.getByTestId('auth-form-container');
        expect(loginBox.classList).toContain('auth-form-container');

        const firstNameInput = loginComponent.getByTestId('first-name-input');
        expect(firstNameInput).toBeTruthy();
        
        const lastNameInput = loginComponent.getByTestId('last-name-input');
        expect(lastNameInput).toBeTruthy();

        const emailInput = loginComponent.getByTestId('email-input');
        expect(emailInput).toBeTruthy();

        const usernameInput = loginComponent.getByTestId('username-input');
        expect(usernameInput).toBeTruthy();

        const passwordInput = loginComponent.getByTestId('password-input');
        expect(passwordInput).toBeTruthy();

    });
});