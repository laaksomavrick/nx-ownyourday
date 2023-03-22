import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { render } from '@testing-library/react';
import { InitialEntry } from '@remix-run/router';
import { SIGN_IN, TODAY } from '../../routes';
import { CurrentUserContext, CurrentUserState } from '../../providers';

describe('AppRoutes', () => {
    const getWrapper =
        ({
            initialEntries,
            currentUserValue,
        }: {
            initialEntries: InitialEntry[] | undefined;
            currentUserValue: CurrentUserState;
        }) =>
        ({ children }: any) =>
            (
                <MemoryRouter initialEntries={initialEntries}>
                    <CurrentUserContext.Provider value={currentUserValue}>
                        {children}
                    </CurrentUserContext.Provider>
                </MemoryRouter>
            );

    it('shows a loading mask when current user retrieval is loading', () => {
        const wrapper = getWrapper({
            initialEntries: undefined,
            currentUserValue: { currentUser: null, loading: true },
        });

        const { getByTestId } = render(<AppRoutes />, { wrapper });

        expect(getByTestId('LoadingMask')).toBeInTheDocument();
    });

    it('can route to the today page', () => {
        const wrapper = getWrapper({
            initialEntries: [TODAY],
            currentUserValue: {
                currentUser: {
                    email: 'foo@example.com',
                },
                loading: false,
            },
        });

        const { getByTestId } = render(<AppRoutes />, { wrapper });

        expect(getByTestId('TodayPage')).toBeInTheDocument();
    });

    it('can route to the sign-in page', () => {
        const wrapper = getWrapper({
            initialEntries: [SIGN_IN],
            currentUserValue: { currentUser: null, loading: false },
        });

        const { getByTestId } = render(<AppRoutes />, { wrapper });

        expect(getByTestId('SignInPage')).toBeInTheDocument();
    });
});
