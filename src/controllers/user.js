import { errorHandler } from "../helpers/errorHandler";
import { responseHandler } from "../helpers/responseHandler";
import Model from "../server/models";

export const createUser = async(req, res) => {
    try {
        const user = await Model.User.create(req.body);

        return responseHandler(res, 201, true, "Account created successfully", user);
    } catch (error) {
        await errorHandler(error);
        return responseHandler(res, 500, false, "An error occured, please try again later");
    }
}

export const viewUsers = async(req, res) => {
    try {
        const users = await Model.User.findAll();
        if(users.length > 0){
        return responseHandler(res, 200, true, "Users found", users);
        }
        return responseHandler(res, 404, false, "No User Available");

    } catch (error) {
        await errorHandler(error);
        return responseHandler(res, 500, false, "An error occured, please try again later");
    }
}

export const viewUser = async(req, res) => {
    try {
        const user = await Model.User.findOne({ where: { id: req.params.user_id } });
        if(user){
            return responseHandler(res, 200, true, "User found", user);
        }
            return responseHandler(res, 404, false, "User not found");
            
    } catch (error) {
        await errorHandler(error);
        return responseHandler(res, 500, false, "An error occured, please try again later");
    }
}