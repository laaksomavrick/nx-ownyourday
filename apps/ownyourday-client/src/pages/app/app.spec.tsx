import { render } from '@testing-library/react';

import AppPage from './AppPage';

describe('AppPage', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AppPage />);
        expect(baseElement).toBeTruthy();
    });

    it('should have a greeting as the title', () => {
        const { getByText } = render(<AppPage />);
        expect(getByText(/Welcome ownyourday-client/gi)).toBeTruthy();
    });
});
