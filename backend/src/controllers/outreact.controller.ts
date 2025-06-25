import asyncHandler from "../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../utils/error";
import prisma from "../config/db";
import response from "../utils/response";

/**
 * @description creating outreachorcourses
 * @route POST /api/outreachorcourses/create
 * @access Private
 * @param req
 * @param res
 */
export const createoutreachorcourses = asyncHandler(
    async (req: Request, res: Response) => {
        const { title, content, type } = req.body;
        if (!title|| !content || !type) {
            throw new AppError("Please provide all required fields!", 400);
        }
        const outreachOrCourses = await prisma.outreachOrCourses.create({
            data: {
                title,
                type,
                content,
            },
        });
        response(res, 201, "Publication created successfully", { outreachOrCourses });
    }
);

/**
 * @description updating a publication by ID
 * @route PUT /api/outreachorcourses/:id
 * @access Private
 * @param req
 * @param res
 */
export const updateoutreachOrCourses = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, content } = req.body;
        if (!id || !title ) {
            throw new AppError("Please provide all required fields!", 400);
        }
        const outreachOrCourse = await prisma.outreachOrCourses.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
            },
        });
        response(res, 200, "Project updated successfully", { outreachOrCourse });
    }
);

/**
 * @description fetching all publication
 * @route GET /api/outreachorcourses/get-all?type=type
 * @access Public
 * @param req
 * @param res
 */
export const getoutreachorcourses = asyncHandler(
    async (req: Request, res: Response) => {
        const type = req.query.type;
        const outreachorcourses = await prisma.outreachOrCourses.findMany({
            where: {
                type: type as string,
            },
            orderBy: { createdAt: "desc" }
        });
        response(res, 200, "publications fetched successfully", { outreachorcourses });
    }
);

/**
 * @description fetching a single project by ID
 * @route GET /api/outreachorcourses/:id
 * @access Public
 * @param req
 * @param res
 */
export const getoutreachorcoursesById = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) throw new AppError("Please provide id of project", 400);
        const outreachorcourse = await prisma.outreachOrCourses.findUnique({
            where: { id: Number(id) },
        });
        response(res, 200, "Project fetched successfully", { outreachorcourse });
    }
);

/**
 * @description deleting a publication by ID
 * @route DELETE /api/outreachorcourses/:id
 * @access Private
 * @param req
 * @param res
 */
export const deleteoutreachorcourses = asyncHandler(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        if (!id) throw new AppError("Please provide id of project", 400);
        const outreachorcourse = await prisma.outreachOrCourses.delete({
            where: { id: Number(id) },
        });
        response(res, 200, "Project deleted successfully", { outreachorcourse });
    }
);

