import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as router from 'react-router';
import axios from 'axios';
import React from 'react';
import Home from '../../src/pages/Home';
import ScenarioPopUp from '../../src/components/popups/ScenarioPopUp';


const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');
const navigate = jest.fn();

describe('Tests for the login page', () => {

    let output: RenderResult;

    const renderComponent = () => {
        return render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
    }

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    });

    it('Wrapper is present and contains correct class', () => {
        output = renderComponent();

        const comp = output.getByTestId('app-wrapper');

        expect(comp).toBeTruthy();
        expect(comp.className).toBe("background")
    });

    it('Form exists', () => {
        output = renderComponent();

        const comp = output.getByTestId('main-menu-wrapper');

        expect(comp).toBeTruthy();
        expect(comp.className).toBe('menu-container');
    });

    it('Scenarios Button should open pop up on click', () => {
        output = renderComponent();

        const scenariosButton = output.getByTestId('scenarios-button');

        expect(scenariosButton).toBeTruthy();
        expect(scenariosButton.className).toBe('home-btn');

        fireEvent.click(scenariosButton);
        
        const scenarioPopup = output.getByTestId('scenario-popup');
        expect(scenarioPopup).toBeTruthy();

        const scenarioCloseButton = output.getByTestId('scenario-popup-close-button');
        expect(scenarioCloseButton).toBeTruthy();

        fireEvent.click(scenarioCloseButton);

        expect(output.queryByTestId('scenario-popup')).toBeNull();
    });

    it('Help Button should open pop up on click', () => {
        output = renderComponent();

        const scenariosButton = output.getByTestId('help-button');

        expect(scenariosButton).toBeTruthy();
        expect(scenariosButton.className).toBe('home-btn');

        fireEvent.click(scenariosButton);

        
        const scenarioPopup = output.getByTestId('help-popup');
        expect(scenarioPopup).toBeTruthy();

        const helpCloseButton = output.getByTestId('help-popup-close-button');
        expect(helpCloseButton).toBeTruthy();

        fireEvent.click(helpCloseButton);

        expect(output.queryByTestId('help-popup')).toBeNull();
    });

    it('Logout button should open popup on click', () => {
        output = renderComponent();

        const scenariosButton = output.getByTestId('logout-button');

        expect(scenariosButton).toBeTruthy();
        expect(scenariosButton.className).toBe('home-btn');

        fireEvent.click(scenariosButton);

        
        const scenarioPopup = output.getByTestId('logout-popup');
        expect(scenarioPopup).toBeTruthy();

        const logoutCloseButton = output.getByTestId('logout-popup-close-button');
        expect(logoutCloseButton).toBeTruthy();

        fireEvent.click(logoutCloseButton);

        expect(output.queryByTestId('logout-popup')).toBeNull();
    });

    it('Settings button should open logout popup', () => {
        output = renderComponent();

        const scenariosButton = output.getByTestId('settings-button');

        expect(scenariosButton).toBeTruthy();
        expect(scenariosButton.className).toBe('home-btn');

        fireEvent.click(scenariosButton);
        
        const scenarioPopup = output.getByTestId('settings-popup');
        expect(scenarioPopup).toBeTruthy();

        const settingsCloseButton = output.getByTestId('settings-popup-close-button');
        expect(settingsCloseButton).toBeTruthy();

        fireEvent.click(settingsCloseButton)

        expect(output.queryByTestId('settings-popup')).toBeNull();
    });
});