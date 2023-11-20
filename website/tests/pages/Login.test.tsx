import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../src/pages/Login';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Tests for the login page', () => {
    it(' Should display the login box', () => {
        const loginComponent = render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        const loginBox = loginComponent.getByTestId('auth-form-container');
        expect(loginBox.classList).toContain('auth-form-container');

        const emailInput = loginComponent.getByTestId('email-input');
        expect(emailInput).toBeTruthy();
        
        const passwordInput = loginComponent.getByTestId('password-input');
        expect(passwordInput).toBeTruthy();

        const loginButton = loginComponent.getByTestId('submit-button')
        expect(loginButton).toBeTruthy();
    });
});