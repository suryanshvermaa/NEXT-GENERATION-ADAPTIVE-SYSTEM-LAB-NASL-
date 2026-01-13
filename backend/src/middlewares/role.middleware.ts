import { ROLE_ACCESS } from "../config/roles";
import { Request,Response,NextFunction } from "express";
import asyncHandler from "../utils/asyncHandler";
import { AppError } from "../utils/error";

/**
 * 
 * @param permission - Permission to be checked for the user's role 
 * @returns - Returns a middleware function that checks for a permission for the user's role
 * @throws {AppError} - Throws an error if the user does not have the required permission
 * @description - This middleware function checks if the user's role has the required permission to access a resource. If the user has the permission, it calls the next middleware. If not, it throws an AppError with a 403 status code.
 */
export const  authorizePermission = (permission: string) => {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const role = req.user?.role;
        if (!role) throw new AppError("Forbidden: You don't have enough permission to access this resource", 403);
        const allowedPermissions = ROLE_ACCESS[role as keyof typeof ROLE_ACCESS] || [];
        const isAllowed = allowedPermissions.includes(permission);
        console.log(role,permission,isAllowed);
        if (!isAllowed) throw new AppError("Forbidden: You don't have enough permission to access this resource", 403);
        next();
    }
  )
};
