import React from 'react';
import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import Login from '../../src/pages/Login';
import { MemoryRouter } from 'react-router-dom';
import * as router from 'react-router';
import axios from 'axios';


const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');
const navigate = jest.fn();

describe('Tests for the login page', () => {

    let output: RenderResult;

    const renderComponent = () => {
        return render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
    }

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
 
    });

    it(' Should display the login box', () => {
        output = renderComponent();

        const loginBox = output.getByTestId('auth-form-container');
        expect(loginBox.classList).toContain('auth-form-container');

        const emailInput = output.getByTestId('email-input');
        expect(emailInput).toBeTruthy();
        
        const passwordInput = output.getByTestId('password-input');
        expect(passwordInput).toBeTruthy();

        const loginButton = output.getByTestId('submit-button')
        expect(loginButton).toBeTruthy();
    });

    it('should transfer to register page', () => {
        output = renderComponent();

        const registerButton = output.getByTestId("nav-register");

        expect(registerButton.innerHTML).toEqual("First time? Register here.");

        fireEvent.click(registerButton);

        expect(navigate).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith("/register");
    });

    
    it('enter login details', () => {
        mockedAxios.get.mockResolvedValue({
            data: {
                username: "test",
                password: "test"
            }
        })

        output = renderComponent();

        const emailInput = output.getByTestId('email-input');
        expect(emailInput).toBeTruthy();
        
        const passwordInput = output.getByTestId('password-input');
        expect(passwordInput).toBeTruthy();

        fireEvent.change(emailInput, { target: { value: 'email@email '}});
        fireEvent.change(passwordInput, { target: { value: 'pass'}});

        const loginButton = output.getByTestId('submit-button')
        expect(loginButton).toBeTruthy();

        fireEvent.click(loginButton);

        waitFor(() => {
            expect(navigate).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith("/home");
        })
    });
});