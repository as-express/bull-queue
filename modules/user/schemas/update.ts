import Joi from 'joi'

export const updateSchema = Joi.object({
    username: Joi.string(),
    email: Joi.string(),
    telegram: Joi.string(),
    phone: Joi.string()
})
