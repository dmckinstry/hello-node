import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '.';

describe('Footer', () => {
    const {getByText} = render(<Footer />);
    it('should show the "Contact us!" link', () => {
        expect(getByText('Contact us!')).toBeInTheDocument();
    });
});
