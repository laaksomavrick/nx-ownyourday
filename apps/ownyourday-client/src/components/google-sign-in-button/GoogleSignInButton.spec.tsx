const mockFederatedSignIn = vi.fn();

import { fireEvent, render } from '@testing-library/react';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/src/types/Auth';
import { GoogleSignInButton } from './GoogleSignInButton';

vi.mock('../../lib', () => ({
    federatedSignIn: mockFederatedSignIn,
}));

describe('GoogleSignInButton', () => {
    it('renders', () => {
        const { getByText } = render(<GoogleSignInButton />);

        expect(getByText('Sign in with Google')).toBeInTheDocument();
    });

    it('initiates google sign in flow on click', () => {
        const { getByRole } = render(<GoogleSignInButton />);

        fireEvent.click(getByRole('button', { name: 'GoogleSignInButton' }));

        expect(mockFederatedSignIn).toHaveBeenCalledWith(
            CognitoHostedUIIdentityProvider.Google
        );
    });
});
