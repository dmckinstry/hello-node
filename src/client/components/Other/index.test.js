import React from 'react';
import { render } from '@testing-library/react';
import { Other } from '.';

describe('Other', () => {
    it('should render the passed props', () => {
        const { getByText } = render(<Other name="passed name" title="test title" />);
        expect(getByText(/passed name/)).toBeInTheDocument();
        expect(getByText('test title'));
    });
})