import { validationResult } from "express-validator";
import { responseHandler } from "./responseHandler";
import Model from "../server/models";

export const titleCase = async (account_name) => {
    return account_name?.toLowerCase()?.split(' ').map(function (text) {
        return (text?.charAt(0).toUpperCase() + text?.slice(1));

    }).join(' ');
}

export const checkAllowedFields = async(payload, fields) => {
    payload = Array.isArray(payload) ? payload : [payload];

    payload.forEach((item) => {
        const allowed = Object.keys(item).every(field => fields.includes(field));
        fields = typeof fields === 'string' ? fields : fields.join(', ');

        if(!allowed){
            throw new Error(`Wrong fields passed. Allowed fields are: ${ fields }`);
        }
    });
    return true;
}

export const validationHandler = (values = []) => {
    return async (req, res , next) => {
        await Promise.all(values.map((value) => value.run(req)));

        const errors = validationResult(req)
        if(errors.isEmpty()){
            return next();

        }

        const _errors = errors.array();
        let message = "Invalid Parameters:";

        _errors.forEach((v) => {
            message += `${ v.param },`;
        });
        responseHandler(res, 422, false, { errors: errors.array() });
    };
}

 export const accountVerification = async(account_no) => {
    const account = await Model.User.findOne({where: { account_no }});
    if(account){
        throw new Error("Account Number already exist.");
    }
        return true;

 }