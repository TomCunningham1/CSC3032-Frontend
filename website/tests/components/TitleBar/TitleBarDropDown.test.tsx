import React from 'react';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import TitleBarDropDown from '../../../src/components/TitleBar/TitleBar';
import { MemoryRouter } from 'react-router-dom';
import * as router from 'react-router'

const navigate = jest.fn();

describe('Tests for the TitleBar', () => {

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    });

    let output: RenderResult;

    const renderComponent = () => {
        return render (
            <MemoryRouter>
                <TitleBarDropDown />
            </MemoryRouter>
        )
    }

    it(' Should display the login box', () => {
        output = renderComponent();

        const title = output.getByTestId('titlebar-title');

        expect(title).toBeTruthy();
    });

    it('Should output the drop down menu when clicked', () => {
        output = renderComponent();

        const menuIcon = output.getByTestId('titlebar-menu-button');

        fireEvent.click(menuIcon);

        const menuOptionSettings = output.getByTestId('titlebar-menu-button-Settings');

        expect(menuOptionSettings).toBeTruthy();

        fireEvent.click(menuOptionSettings);

        expect(navigate).toHaveBeenCalledWith('/settings');

        const menuOptionHelp = output.getByTestId('titlebar-menu-button-Help');

        expect(menuOptionHelp).toBeTruthy();

        fireEvent.click(menuOptionHelp);

        expect(navigate).toHaveBeenCalledWith('/help');


        const menuOptionLogOut = output.getByTestId('titlebar-menu-button-Home');

        expect(menuOptionLogOut).toBeTruthy();

        fireEvent.click(menuOptionLogOut);

        expect(navigate).toHaveBeenCalledWith('/');
    });
});
