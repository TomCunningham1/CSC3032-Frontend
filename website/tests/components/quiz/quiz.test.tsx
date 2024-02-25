import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import * as router from 'react-router';
import { MemoryRouter } from 'react-router';
import Play from '../../../src/components/quiz/Play'

const testData = {
    score: 12,
    numberOfQuestions: 32,
    numberOfAnsweredQuestions: 12,
    correctAnswers: 12,
    wrongAnswers: 11,
    hintsUsed: 12,
    fiftyFiftyUsed: 5
}

jest.mock('../../assets/audio/correct-answer.mp3');
jest.mock('../../assets/audio/wrong-answer.mp3');
jest.mock('../../assets/audio/button-sound.mp3');

describe('Tests for the quiz page', () => {

    const mockPost = jest.fn()
    const mockSuccess = jest.fn().mockResolvedValue({})
    const mockError = jest.fn()
    const mockNavigate = jest.fn()
    const mockLocation = jest.fn().mockReturnValue({
        state: {
            title: 'Test',
            questions: [{
                optionA: 'optionA',
                optionB: 'optionB',
                optionC: 'optionC',
                optionD: 'optionD',
                answer: 'answer',
                question: 'question',
                stage: "test"
            }]
        }
    })

    let output: RenderResult;

    beforeEach(() => {
        jest.spyOn(axios, 'post').mockImplementation(mockPost)
        jest.spyOn(toast, 'success').mockImplementation(mockSuccess)
        jest.spyOn(toast, 'error').mockImplementation(mockError)
        jest.spyOn(router, 'useNavigate').mockImplementation(mockNavigate)
        jest.spyOn(router, 'useLocation').mockImplementation(mockLocation)
    });

    const renderComponent = () => {
        return render (
            <MemoryRouter>
                <Play />
            </MemoryRouter>
        )
    }

    it('should verify that the component renders', () => {
        output = renderComponent();

        // const title = output.getByTestId('main-menu-navigation-help');

        expect(output).toBeTruthy();
    });
});
