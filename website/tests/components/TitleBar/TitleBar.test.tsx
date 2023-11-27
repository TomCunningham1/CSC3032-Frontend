import React from 'react';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import TitleBar from '../../../src/components/TitleBar/TitleBar';
import { MemoryRouter } from 'react-router-dom';

describe('Tests for the TitleBar', () => {

    let output: RenderResult;

    const renderComponent = () => {
        return render (
            <MemoryRouter>
                <TitleBar />
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

        const menuOption = output.getByTestId('titlebar-menu-item-Settings');

        expect(menuOption).toBeTruthy();
    });
});
