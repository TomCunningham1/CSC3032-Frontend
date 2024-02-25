import React, { useContext, useEffect, useState } from 'react';
import { render, fireEvent, waitFor, RenderResult, act } from '@testing-library/react';
import { Account, AccountContext } from '../../src/auth/Account'
import * as AWS from 'amazon-cognito-identity-js'

const testData = {
    score: 12,
    numberOfQuestions: 32,
    numberOfAnsweredQuestions: 12,
    correctAnswers: 12,
    wrongAnswers: 11,
    hintsUsed: 12,
    fiftyFiftyUsed: 5
}

const Test = () => {

    const { authenticate, getSession } = useContext(AccountContext)

    const authenticateButtonHandler = async () => {
        const res = await authenticate('test_user', 'test_account')
    }

    const getSessionHandler = async () => {
        await getSession()
    }

    return (
        <>
            <button data-testid={'authenticate-button'} onClick={authenticateButtonHandler} ></button>
            <button data-testid={'get-session-button'} onClick={getSessionHandler} ></button>
        </>
    )
}

describe('tests for account context', () => {

    let output: RenderResult;

    const mockUser = jest.fn()
    const mockUserPool = jest.fn()
    const mockGetSession = jest.fn()
    const mockGetCurrentUser = jest.fn()

    mockUserPool.mockReturnValue({
        getCurrentUser: mockGetCurrentUser
    })
    const authenticateUser = jest.fn().mockImplementation((auth: any, callback: any) => {
        callback.onSuccess({data: 'Test'})
    })

    mockUser.mockReturnValue({
        authenticateUser: authenticateUser
    })

    const renderComponent = () => {
        return render(<Account>
            <Test />
        </Account>)
    }

    beforeEach(() => {
        jest.spyOn(AWS, 'CognitoUserPool').mockImplementation(mockUserPool)
        jest.spyOn(AWS, 'CognitoUser').mockImplementation(mockUser)
    })

    it('verifies account is authenticated', async () => {
        output = renderComponent()

        const button = output.getByTestId('authenticate-button')

        act(() => {
            fireEvent.click(button)
        })

        await waitFor(() => {
            expect(authenticateUser).toHaveBeenCalled()
        })
    })

    // it('test get session function', async () => {
    //     output = renderComponent()

    //     const button = output.getByTestId('get-session-button')

    //     act(() => {
    //         fireEvent.click(button)
    //     })

    //     await waitFor(() => {
    //         expect(mockGetCurrentUser).toHaveBeenCalled()
    //     })
    // })
});