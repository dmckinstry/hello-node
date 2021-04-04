import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '.';

describe('Footer', () => {
    const { getByText } = render(<Header />);
    it('should render the "Home" and "Other" link', () => {
        expect(getByText('Home')).toBeInTheDocument();
        expect(getByText('Other')).toBeInTheDocument();
    });
});
