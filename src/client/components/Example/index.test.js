import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Example } from '.';

describe('Example', () => {
    
    it('should render the component without crashing', () => {
        const { getByText } = render(<Example />);
        expect(getByText('Currently: 0 clicks')).toBeInTheDocument();
    });

    it('should increase the click counter', () => {
        const { getByText, getByTestId } = render(<Example />);
        const button = getByTestId('button');
        fireEvent.click(button);
        expect(getByText('Currently: 1 clicks')).toBeInTheDocument();
    });
});
