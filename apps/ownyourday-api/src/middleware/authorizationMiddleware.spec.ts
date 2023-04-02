import { UnauthorizedError } from '../errors';

const mockVerifyFn = jest.fn();

jest.mock('./tokenVerifier', () => ({
    verify: mockVerifyFn,
}));

import authorizationMiddleware from './authorizationMiddleware';

describe('authorizationMiddleware', () => {
    let req: any = {};
    let res,
        next = jest.fn();

    afterEach(() => {
        req = jest.fn();
        res = jest.fn();
        next = jest.fn();
    });

    it('is unauthorized when auth header is absent', async () => {
        req.headers = {};
        await authorizationMiddleware(req, res, next);
        expect(next).toHaveBeenCalledWith(new UnauthorizedError());
    });

    it('is unauthorized when bearer is malformed', async () => {
        req.headers = {
            Authorization: 'foo',
        };
        await authorizationMiddleware(req, res, next);
        expect(next).toHaveBeenCalledWith(new UnauthorizedError());
    });

    it('is unauthorized when bearer is invalid', async () => {
        mockVerifyFn.mockImplementation(() => {
            throw new Error('Invalid');
        });
        req.headers = {
            Authorization: 'Bearer foo',
        };
        await authorizationMiddleware(req, res, next);
        expect(next).toHaveBeenCalledWith(new UnauthorizedError());
    });

    it('is authorized', async () => {
        mockVerifyFn.mockImplementation(() => Promise.resolve());
        req.headers = {
            Authorization: 'Bearer foo',
        };
        await authorizationMiddleware(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
});
