import { render } from '@testing-library/react';
import { CurrentUserContext, CurrentUserState } from '../../providers';
import { AuthGuard } from './AuthGuard';
import { SIGN_IN } from '../../routes';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

describe('AuthGuard', () => {
    const getWrapper =
        (currentUserState: CurrentUserState) =>
        ({ children }: any) =>
            (
                <CurrentUserContext.Provider value={currentUserState}>
                    {children}
                </CurrentUserContext.Provider>
            );

    it('renders child component when the user is authenticated', () => {
        const currentUserState = {
            currentUser: { email: 'foo@example.com' },
            loading: false,
        };
        const wrapper = getWrapper(currentUserState);

        const { getByTestId } = render(
            <AuthGuard>
                <div data-testid="auth-required"></div>
            </AuthGuard>,
            { wrapper }
        );

        const authRequiredComponent = getByTestId('auth-required');
        expect(authRequiredComponent).toBeInTheDocument();
    });

    it('navigates to the sign in page when the user is not authenticated', () => {
        const currentUserState = {
            currentUser: null,
            loading: false,
        };
        const wrapper = getWrapper(currentUserState);

        render(
            <AuthGuard>
                <div data-testid="auth-required"></div>
            </AuthGuard>,
            { wrapper }
        );

        expect(mockNavigate).toHaveBeenCalledWith(SIGN_IN);
    });
});
