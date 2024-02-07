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

        const title = output.getByTestId('main-menu-navigation-help');

        expect(title).toBeTruthy();
    });
});
