const errorHandler = (error, _, res, __) => {
    const status = error.statusCode || 500;
    res.status(status).json({ message: error.message });
};
export default errorHandler;
