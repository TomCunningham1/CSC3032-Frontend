import React from 'react';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import TitleBarHelpButton from '../../../../src/components/TitleBar/TitleBarButtons/TitleBarHelpButton';

describe('TitleBarHelpButton', () => {

    let output: RenderResult;

    const renderComponent = () => {
        return render (
            <TitleBarHelpButton />
        )
    }

    it('Should generate a title bar button component', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-help')

        expect(button).toBeTruthy()
    })

    
    it('should have the correct className', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-help')

        expect(button.className).toBe('TitleBarButton')
    })

    it('should contain the button label', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-help')

        expect(button.innerHTML).toBe('Help')
    })

    it('should open the pop up when the button is clicked', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-help')

        fireEvent.click(button)

        const popup = output.getByTestId('help-popup') 
        const popupText = output.getByTestId('help-popup-text') 

        expect(popup).toBeTruthy()
        expect(popupText).toBeTruthy()
    })

    it('should close the pop up when the button is not clicked', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-help')

        const popup = output.queryByTestId('help-popup')

        expect(popup).toBeFalsy()
    })
});

