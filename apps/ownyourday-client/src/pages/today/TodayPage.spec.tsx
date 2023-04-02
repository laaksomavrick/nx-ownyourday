import { TodayPage } from './TodayPage';
import { render } from '@testing-library/react';

describe.skip('TodayPage', () => {
    it('renders', () => {
        const { getByTestId } = render(<TodayPage />);
        expect(getByTestId('TodayPage')).toBeInTheDocument();
    });
});
