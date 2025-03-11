export const validator = (schema, property) => {
    return async (req, _, next) => {
        try {
            req[property] = await schema.validateAsync(req[property]);
            next();
        }
        catch (e) {
            e.statusCode = 422;
            next(e);
        }
    };
};
