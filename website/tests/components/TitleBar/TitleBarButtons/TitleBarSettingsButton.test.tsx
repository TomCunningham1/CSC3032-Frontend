import React from 'react';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import TitleBarSettingsButton from '../../../../src/components/TitleBar/TitleBarButtons/TitleBarSettingsButton';

describe('TitleBarHelpButton', () => {

    let output: RenderResult;

    const renderComponent = () => {
        return render (
            <TitleBarSettingsButton />
        )
    }

    it('Should generate a title bar button component', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-settings')

        expect(button).toBeTruthy()
    })

    
    it('should have the correct className', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-settings')

        expect(button.className).toBe('TitleBarButton')
    })

    it('should contain the button label', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-settings')

        expect(button.innerHTML).toBe('Settings')
    })

    it('should open the pop up when the button is clicked', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-settings')

        fireEvent.click(button)

        const popup = output.getByTestId('settings-popup') 
        const popupText = output.getByTestId('settings-popup-text') 

        expect(popup).toBeTruthy()
        expect(popupText).toBeTruthy()
    })

    it('should close the pop up when the button is not clicked', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-settings')

        const popup = output.queryByTestId('settings-popup')

        expect(popup).toBeFalsy()
    })
});

