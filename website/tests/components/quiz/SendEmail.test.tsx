import { RenderResult, fireEvent, render } from '@testing-library/react';
import SendEmail from '../../../src/components/quiz/SendEmail';
import axios from 'axios';
import React from 'react';

const testData = {
    score: 12,
    numberOfQuestions: 32,
    numberOfAnsweredQuestions: 12,
    correctAnswers: 12,
    wrongAnswers: 11,
    hintsUsed: 12,
    fiftyFiftyUsed: 5
}

const mockPost = jest.fn()
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios');

describe('Tests for the login page', () => {

    let output: RenderResult;

    beforeEach(() => {
        jest.spyOn(mockedAxios, 'post').mockImplementation(mockPost)
    });

    const renderComponent = () => {
        return render(<SendEmail 
            score={testData.score}
            numberOfQuestions={testData.numberOfQuestions}
            numberOfAnsweredQuestions={testData.numberOfAnsweredQuestions}
            correctAnswers={testData.correctAnswers}
            wrongAnswers={testData.wrongAnswers}
            hintsUsed={testData.hintsUsed}
            fiftyFiftyUsed={testData.fiftyFiftyUsed}
            />)
    }


    it('should render the email component', () => {
        output = renderComponent();

        const container = output.getByTestId('send-email-container');

        expect(container).toBeTruthy()
    })

    // it('should call the backend service when an email is sent', () => {
    //     output = renderComponent();

    //     const container = output.getByTestId('send-email-container');

    //     expect(container).toBeTruthy()

    //     const textEntry = output.getByTestId('send-email-text-input');
    //     fireEvent.change(textEntry, { target: { value: 'pass'}});

    //     expect(textEntry.innerHTML).toBe('pass')

    //     const emailButton = output.getByTestId('send-email-button')
    //     fireEvent.click(emailButton)
    // })

    // it('should allow the user to update text', () => {
    //     output = renderComponent();

    //     const container = output.getByTestId('send-email-container');

    //     expect(container).toBeTruthy()

    //     const textEntry = output.getByTestId('send-email-text-input');
    //     fireEvent.change(textEntry, { target: { value: 'pass'}});

    //     expect(textEntry.innerHTML).toBe('pass')
    // })
});