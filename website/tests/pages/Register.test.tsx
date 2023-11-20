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

        const emailInput = loginComponent.getByTestId('first-name-input');
        expect(emailInput).toBeTruthy();
        
        const passwordInput = loginComponent.getByTestId('last-name-input');
        expect(passwordInput).toBeTruthy();

        const loginButton = loginComponent.getByTestId('submit-button')
        expect(loginButton).toBeTruthy();
    });
});