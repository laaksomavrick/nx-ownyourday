export default class ApiError extends Error {
    public statusCode = 500;
    public message = 'Oops! Something went wrong';

    constructor(props) {
        super(props);
        this.statusCode = props.statusCode;
        this.message = props.message;
    }
}
