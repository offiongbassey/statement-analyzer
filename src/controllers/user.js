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