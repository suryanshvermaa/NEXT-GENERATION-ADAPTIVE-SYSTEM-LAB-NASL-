import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../../utils/error";
import prisma from "../../config/db";
import response from "../../utils/response";

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
			agency,
			role,
			outlay,
			duration,
			piInstitute,
			status,
			fundsReceived,
		} = req.body;

		if (
			!title ||
			!agency ||
			!role ||
			!outlay ||
			!duration ||
			!piInstitute ||
			!status
		) {
			throw new AppError("Please provide all required fields", 400);
		}

		const project = await prisma.project.create({
			data: {
				title,
				agency,
				role,
				outlay,
				duration,
				piInstitute,
				status,
				fundsReceived,
			},
		});

		response(res, 201, "Project created successfully", { project });
	}
);

/**
 * @description fetching all projects
 * @route GET /api/project/get-all
 * @access Public
 * @param req
 * @param res
 */
export const getAllProjects = asyncHandler(
	async (req: Request, res: Response) => {
		const projects = await prisma.project.findMany({
			include: {
				pi: true,
			},
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
		const project = await prisma.project.findUnique({
			where: { id: Number(id) },
			include: {
				pi: true,
			},
		});

		if (!project) {
			throw new AppError("Project not found", 404);
		}

		response(res, 200, "Project fetched successfully", { project });
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
			agency,
			role,
			outlay,
			duration,
			piInstitute,
			status,
			fundsReceived,
		} = req.body;

		const project = await prisma.project.update({
			where: { id: Number(id) },
			data: {
				title,
				agency,
				role,
				outlay,
				duration,
				piInstitute,
				status,
				fundsReceived,
			},
		});

		response(res, 200, "Project updated successfully", { project });
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

		const project = await prisma.project.delete({
			where: { id: Number(id) },
		});

		response(res, 200, "Project deleted successfully", { project });
	}
);

/**
 * @description fetching all projects by PI ID
 * @route GET /api/project/get-all-by-pi/:piId
 * @access Private
 * @param req
 * @param res
 */
export const getAllProjectsByPiId = asyncHandler(
	async (req: Request, res: Response) => {
		const { piId } = req.params;

		const projects = await prisma.project.findMany({
			where: {
				piInstitute: Number(piId),
			},
			include: {
				pi: true,
			},
			orderBy: { createdAt: "desc" },
		});

		if (!projects || projects.length === 0) {
			throw new AppError("No projects found for this PI", 404);
		}

		response(res, 200, "Projects fetched successfully", { projects });
	}
);
