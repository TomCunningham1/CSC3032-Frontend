import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import HelpPopUp from '../../../src/components/popups/HelpPopUp';

describe('help popups test', () => {

    let output: RenderResult;

    let mockedFunction = jest.fn();

    const renderComponent = () => {
        return render(
            <MemoryRouter>
                <HelpPopUp open={true} onClose={mockedFunction} />
            </MemoryRouter>
        );
    }

    it('Should display the help popup with correct instructions', () => {
        output = renderComponent();

        const popup = output.getByTestId('help-popup');
        expect(popup).toBeTruthy();

        expect(popup.innerHTML).toContain("To pick a game scenario, click scenario")
        expect(popup.innerHTML).toContain("To change your settings, click settings")
        expect(popup.innerHTML).toContain("To logout, click logout")
        expect(popup.innerHTML).toContain("To close pop ups, click the x")
    });

    it('Should display the help popup', () => {
        output = renderComponent();

        const popup = output.getByTestId('help-popup');
        expect(popup).toBeTruthy();

        const popupButton = output.getByTestId('help-popup-close-button');
        expect(popupButton).toBeTruthy();

        fireEvent.click(popupButton);

        expect(mockedFunction).toHaveBeenCalled();
    });
});