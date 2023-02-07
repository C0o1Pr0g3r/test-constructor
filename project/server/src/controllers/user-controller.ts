import { ParamsDictionary, Query as ParsedQs, Request, Response, NextFunction } from "express-serve-static-core";
import { validationResult } from "express-validator";

import { userService } from "../services/user-service.js";
import { APIError } from "../exceptions/api-error.js";
import { sessionService } from "../services/session-service.js";
import { User } from "../dtos/app/user.js";

class UserController {
    async getUsers(
        req: Request<ParamsDictionary, User[], unknown, ParsedQs, Record<string, unknown>>,
        res: Response<User[], Record<string, unknown>>,
        next: NextFunction
    ): Promise<void> {
        try {
            const users = await userService.getUsers();
            res.json(users);
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();