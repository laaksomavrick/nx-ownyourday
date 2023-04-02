const errorHandlingMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Oops! Something went wrong';
    res.status(statusCode).send(message);
};

export default errorHandlingMiddleware;
