import React from 'react';
import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import * as router from 'react-router';
import TitleBarLeaderboardButton from '../../../../src/components/TitleBar/TitleBarButtons/TitleBarLeaderboardButton';

const navigate = jest.fn();
describe('TitleBarLeaderboardButton', () => {

    let output: RenderResult;

    const renderComponent = () => {
        return render (
            <MemoryRouter>
                <TitleBarLeaderboardButton />
            </MemoryRouter>
        )
    }

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    });

    it('Should generate a title bar button component', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-leaderboard')

        expect(button).toBeTruthy()
    })

    
    it('should have the correct className', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-leaderboard')

        expect(button.className).toBe('TitleBarButton')
    })

    it('should contain the button label', () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-leaderboard')

        expect(button.innerHTML).toBe('Leaderboard')
    })

    it('should navigate to the home page if clicked', async () => {
        output = renderComponent();

        const button = output.getByTestId('main-menu-navigation-leaderboard')

        fireEvent.click(button)

        await waitFor(() => {
            expect(output.queryByTestId('leaderboard-popup')).toBeTruthy()
        })

        const closeButton = output.getByTestId('leaderboard-popup-close-button')

        fireEvent.click(closeButton)

        await waitFor(() => {
            expect(output.queryByTestId('leaderboard-popup')).toBeFalsy()
        })
    })
});