import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import * as router from 'react-router';
import SettingsPopUp from '../../../src/components/popups/SettingsPopUp';

const navigate = jest.fn();

describe('help popups test', () => {

    let output: RenderResult;

    let mockedFunction = jest.fn();

    const renderComponent = () => {
        return render(
            <MemoryRouter>
                <SettingsPopUp open={true} onClose={mockedFunction} />
            </MemoryRouter>
        );
    }

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    });

    it('Should display the settings popup with correct instructions', () => {
        output = renderComponent();

        const popup = output.getByTestId('settings-popup');
        expect(popup).toBeTruthy();

        expect(popup.innerHTML).toContain("Settings")
        expect(popup.innerHTML).toContain("Pick Text Size")
    });

    it('Should display the settings popup', () => {
        output = renderComponent();

        const popup = output.getByTestId('settings-popup');
        expect(popup).toBeTruthy();

        const popupButton = output.getByTestId('settings-popup-close-button');
        expect(popupButton).toBeTruthy();

        fireEvent.click(popupButton);

        expect(mockedFunction).toHaveBeenCalled();
    });
});