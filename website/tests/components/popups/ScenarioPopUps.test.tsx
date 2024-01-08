import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import * as router from 'react-router';
import ScenarioPopUp from '../../../src/components/popups/ScenarioPopUp';

const navigate = jest.fn();

describe('help popups test', () => {

    let output: RenderResult;

    let mockedFunction = jest.fn();

    const renderComponent = () => {
        return render(
            <MemoryRouter>
                <ScenarioPopUp open={true} onClose={mockedFunction} />
            </MemoryRouter>
        );
    }

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    });

    it('Should display the scenario popup with correct instructions', () => {
        output = renderComponent();

        const popup = output.getByTestId('scenario-popup');
        expect(popup).toBeTruthy();

        expect(popup.innerHTML).toContain("Scenario Selection")
        expect(popup.innerHTML).toContain("SQL Injection")
        expect(popup.innerHTML).toContain("Buffer Overflow")
        expect(popup.innerHTML).toContain("Cross Site Scripting")
        expect(popup.innerHTML).toContain("Distributed Denial of Service")
    });

    it('Should display the settings popup', () => {
        output = renderComponent();

        const popup = output.getByTestId('scenario-popup');
        expect(popup).toBeTruthy();

        const popupButton = output.getByTestId('scenario-popup-close-button');
        expect(popupButton).toBeTruthy();

        fireEvent.click(popupButton);

        expect(mockedFunction).toHaveBeenCalled();
    });

    it('navigate to the sql playthrough', () => {
        output = renderComponent();

        const popup = output.getByTestId('scenario-popup');
        expect(popup).toBeTruthy();

        const sqlButton = output.getByTestId('scenario-popup-sql');
        expect(sqlButton).toBeTruthy();

        fireEvent.click(sqlButton);

        expect(navigate).toHaveBeenCalledWith('/play/instructions');
    });
});