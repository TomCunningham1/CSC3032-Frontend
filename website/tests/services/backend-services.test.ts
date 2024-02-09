import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as router from 'react-router';
import axios from 'axios';
import React from 'react';
import Home from '../../src/pages/Home';
import BackendService from '../../src/services/backend-service';

// const mockedAxios = axios as jest.Mocked<typeof axios>;
// jest.mock('axios');
// const navigate = jest.fn();

describe('backend-services', () => {

    let mockPost = jest.fn();
    let mockGet = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks()
        jest.spyOn(axios, 'post').mockImplementation(mockPost)
        jest.spyOn(axios, 'get').mockImplementation(mockGet)
    });

    it('getHealth', async () => {
        mockGet.mockResolvedValue({
            status: 200,
            data: 'UP'
        })
        
        const result = await BackendService.getHealth();

        expect(result.status).toBe(200)
        expect(result.data).toBe('UP')
    });

    it('emailResults', async () => {
        mockPost.mockResolvedValue({
            status: 200,
            data: 'Message Sent Successfully'
        })

        const result = await BackendService.emailResults(
            'test@test.co.uk',
            23,
            12,
            34,
            53,
            12,
            4,
            12
        )

        expect(result.status).toBe(200)
        expect(result.data).toBe('Message Sent Successfully')
    })
});