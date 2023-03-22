import { LoadingMask } from './LoadingMask';
import { render } from '@testing-library/react';

describe('LoadingMask', () => {
    it('renders', () => {
        const { getByTestId } = render(<LoadingMask />);
        expect(getByTestId('LoadingMask')).toBeInTheDocument();
    });
});
