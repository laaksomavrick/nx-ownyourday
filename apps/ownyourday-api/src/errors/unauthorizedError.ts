import ApiError from './apiError';

export default class UnauthorizedError extends ApiError {
    constructor(props = {}) {
        super(props);
        this.statusCode = 401;
        this.message = 'Unauthorized.';
    }
}
