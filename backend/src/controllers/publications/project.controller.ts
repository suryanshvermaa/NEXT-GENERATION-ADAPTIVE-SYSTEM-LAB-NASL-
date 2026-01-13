import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";
import { signedUrl } from "../../s3";

/**
 * @description creating project
 * @route POST /api/project/create
 * @access Private
 * @param req
 * @param res
 */
export const createProject = asyncHandler(
	async (req: Request, res: Response) => {
		const {
			title,
			agency = null,
			role = null,
			outlay = null,
			duration = null,
			pi,
			status = null,
			fundsReceived = null,
			piInstitute = null,
		} = req.body;
		if (
			!title ||
			!agency ||
			!role ||
			!outlay ||
			!duration ||
			!pi ||
			!status
		) {
			throw new AppError(
				"Please provide all required fields: title, agency, role, outlay, duration, pi, status",
				400
			);
		}
		const project = await prisma.project.create({
			data: {
				title,
				agency,
				role,
				outlay,
				duration,
				pi,
				status,
				fundsReceived,
				piInstitute,
				CreatedBy: req.user?.userId as number,
			},
		});
		response(res, 201, "Project created successfully", { project });
	}
);

/**
 * @description updating a project by ID
 * @route PUT /api/project/update/:id
 * @access Private
 * @param req
 * @param res
 */
export const updateProject = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const {
			title,
			agency = null,
			role = null,
			outlay = null,
			duration = null,
			status = null,
			fundsReceived = null,
		} = req.body;
		if (!id || !title) {
			throw new AppError(
				"Please provide all required fields: id, title, agency, role, outlay, duration, pi, status",
				400
			);
		}
		const existingProject = await prisma.project.findUnique({
			where: { id: Number(id) },
		});
		if (!existingProject)
			throw new AppError("Project not found with the given id", 404);
		if(req.user?.role !== 'ADMIN' && existingProject.CreatedBy !== req.user?.userId) {
			throw new AppError("You are not authorized to update this project", 403);
		}
		const project = await prisma.project.update({
			where: { id: Number(id) },
			data: {
				title,
				agency,
				role,
				outlay,
				duration,
				status,
				fundsReceived,
			},
		});
		response(res, 200, "Project updated successfully", { project });
	}
);

/**
 * @description fetching all projects
 * @route GET /api/project/get-all?page=&limit=
 * @access Public
 * @param req
 * @param res
 */
export const getAllProjects = asyncHandler(
	async (req: Request, res: Response) => {
		const { page = "1", limit = "10" } = req.query;
		const pageNumber = parseInt(page as string);
		const limitNumber = parseInt(limit as string);
		const skip = (pageNumber - 1) * limitNumber;
		const projects = await prisma.project.findMany({
			orderBy: { createdAt: "desc" },
			skip,
			take: limitNumber
		});
		response(res, 200, "Projects fetched successfully", { projects });
	}
);

/**
 * @description fetching a single project by ID
 * @route GET /api/project/:id
 * @access Public
 * @param req
 * @param res
 */
export const getProjectById = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of project", 400);
		const project = await prisma.project.findUnique({
			where: { id: Number(id) },
		});
		if (!project) throw new AppError("Project not found", 404);
		response(res, 200, "Project fetched successfully", { project });
	}
);

/**
 * @description deleting a project by ID
 * @route DELETE /api/project/:id
 * @access Private
 * @param req
 * @param res
 */
export const deleteProject = asyncHandler(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		if (!id) throw new AppError("Please provide id of project", 400);
		const existingProject = await prisma.project.findUnique({
			where: { id: Number(id) },
		});
		if (!existingProject)
			throw new AppError("Project with given id does not exist", 404);
		if(req.user?.role !== 'ADMIN' && existingProject.CreatedBy !== req.user?.userId) {
			throw new AppError("You are not authorized to delete this project", 403);
		}
		const project = await prisma.project.delete({
			where: { id: Number(id) },
		});
		response(res, 200, "Project deleted successfully", { project });
	}
);

/**
 * @description fetching all projects by user id
 * @route GET /api/project/get-all-by-user-id/:userId ?page=&limit=
 * @access Public
 * @param req
 * @param res
 */
export const getAllProjectsByUserId = asyncHandler(
	async (req: Request, res: Response) => {
		const { userId } = req.params;
		const { page = "1", limit = "10" } = req.query;
		const pageNumber = parseInt(page as string);
		const limitNumber = parseInt(limit as string);
		const skip = (pageNumber - 1) * limitNumber;
		if (!userId) throw new AppError("Please provide userId", 400);
		const projects = await prisma.project.findMany({
			where: {
				CreatedBy: Number(userId),
			},
			orderBy: { createdAt: "desc" },
			skip: skip,
			take: Number(limit),
		});
		response(res, 200, "Projects fetched successfully", { projects });
	}
);
