import { TodayPage } from './TodayPage';
import { render } from '@testing-library/react';

describe('TodayPage', () => {
    it('renders', () => {
        const { getByTestId } = render(<TodayPage />);
        expect(getByTestId('TodayPage')).toBeInTheDocument();
    });
});
