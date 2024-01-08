import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import HelpPopUp from '../../../src/components/popups/HelpPopUp';
import LogoutPopUp from '../../../src/components/popups/LogoutPopUp';
import * as router from 'react-router';

const navigate = jest.fn();


describe('help popups test', () => {

    let output: RenderResult;

    let mockedFunction = jest.fn();

    const renderComponent = () => {
        return render(
            <MemoryRouter>
                <LogoutPopUp open={true} onClose={mockedFunction} />
            </MemoryRouter>
        );
    }

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    });

    it('Should display the help popup with correct instructions', () => {
        output = renderComponent();

        const popup = output.getByTestId('logout-popup');
        expect(popup).toBeTruthy();

        expect(popup.innerHTML).toContain("Logout")
        expect(popup.innerHTML).toContain("Are you sure you want to log out?")

        const acceptButton = output.getByTestId('logout-popup-logout-button');
        expect(acceptButton).toBeTruthy();

        fireEvent.click(acceptButton)

        expect(navigate).toHaveBeenCalledWith('/');
    });

    it('Should display the help popup', () => {
        output = renderComponent();

        const popup = output.getByTestId('logout-popup');
        expect(popup).toBeTruthy();

        const popupButton = output.getByTestId('logout-popup-close-button');
        expect(popupButton).toBeTruthy();

        fireEvent.click(popupButton);

        expect(mockedFunction).toHaveBeenCalled();
    });

    it('should close the popup', () => {
        output = renderComponent();

        const popup = output.getByTestId('logout-popup');
        expect(popup).toBeTruthy();

        expect(popup.innerHTML).toContain("Logout")
        expect(popup.innerHTML).toContain("Are you sure you want to log out?")

        const closeButton = output.getByTestId('logout-popup-close-button');
        expect(closeButton).toBeTruthy();

        fireEvent.click(closeButton)

        expect(mockedFunction).toHaveBeenCalled();
    });
});