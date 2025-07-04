import Joi from "joi";
import { title } from "process";

const listingSchema = Joi.object({
    listing : Joi.object({
        title :Joi.string().required(),
        description :Joi.string().required(),
        price : Joi.number().required().min(0),
        location :Joi.string().required(),
        country : Joi.string().required(),
        image : Joi.string().allow("null", "")
    }).required()
})

export default listingSchema