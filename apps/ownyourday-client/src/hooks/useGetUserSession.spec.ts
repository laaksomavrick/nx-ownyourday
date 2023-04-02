const mockUseGetCognitoUser = vi.fn();

vi.mock('./index', () => ({
    useGetCognitoUser: mockUseGetCognitoUser,
}));

// eslint-disable-next-line import/first
import { renderHook } from '@testing-library/react';
// eslint-disable-next-line import/first
import useGetUserSession from './useGetUserSession';

describe('useGetUserSession', () => {
    afterEach(() => {
        vi.resetAllMocks();
    });

    it('retrieves the current user session', () => {
        mockUseGetCognitoUser.mockReturnValue({ email: 'foo@example.com' });
        const { result } = renderHook(() => useGetUserSession(), {
            initialProps: {
                value: {},
            },
        });

        expect(result.current.loading).toBeFalsy();
        expect(result.current.currentUser).toEqual(
            expect.objectContaining({
                email: 'foo@example.com',
            })
        );
    });
});
