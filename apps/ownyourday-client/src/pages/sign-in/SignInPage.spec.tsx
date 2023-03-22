import { CurrentUserContext } from '../../providers';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { SignInPage } from './SignInPage';

describe('SignInPage', () => {
    const getWrapper =
        ({ initialEntries, currentUserValue }: any) =>
        ({ children }: any) =>
            (
                <MemoryRouter initialEntries={initialEntries}>
                    <CurrentUserContext.Provider value={currentUserValue}>
                        {children}
                    </CurrentUserContext.Provider>
                </MemoryRouter>
            );

    it('renders', () => {
        const wrapper = getWrapper({
            currentUserValue: {
                currentUser: null,
                loading: false,
            },
        });
        const { getByTestId } = render(<SignInPage />, { wrapper });
        expect(getByTestId('SignInPage')).toBeInTheDocument();
    });
});
