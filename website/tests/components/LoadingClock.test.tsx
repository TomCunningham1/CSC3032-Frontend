import React from 'react';
import { render } from '@testing-library/react';
import CustomClockLoader from '../../src/components/LoadingClock';

describe('Tests for the login page', () => {
    it(' Should update something', () => {
        const clock = render(<CustomClockLoader loading={true} />);
        expect(clock).toBeTruthy();
    });
});