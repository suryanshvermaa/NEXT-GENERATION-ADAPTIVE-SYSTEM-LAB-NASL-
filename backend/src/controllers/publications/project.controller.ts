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
			agency,
			role,
			outlay,
			duration,
			pi,
			status,
			fundsReceived,
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
				pi: {
					connect: { id: pi }
				},
				status,
				fundsReceived,
			},
			include: {
				pi: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					}
				}
			}
		});
		if (project.pi && project.pi.profileImage) {
			project.pi.profileImage = await signedUrl(project.pi.profileImage, 3);
		}
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
			agency,
			role,
			outlay,
			duration,
			pi,
			status,
			fundsReceived,
		} = req.body;
		if (
			!id ||
			!title ||
			!agency ||
			!role ||
			!outlay ||
			!duration ||
			!pi ||
			!status
		) {
			throw new AppError(
				"Please provide all required fields: id, title, agency, role, outlay, duration, pi, status",
				400
			);
		}
		const project = await prisma.project.update({
			where: { id: Number(id) },
			data: {
				title,
				agency,
				role,
				outlay,
				duration,
				pi: {
					connect: { id: pi }
				},
				status,
				fundsReceived,
			},
			include: {
				pi: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					}
				}
			}
		});
		if (project.pi && project.pi.profileImage) {
			project.pi.profileImage = await signedUrl(project.pi.profileImage, 3);
		}
		response(res, 200, "Project updated successfully", { project });
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
			orderBy: { createdAt: "desc" },
			include: {
				pi: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					}
				}
			}
		});
		for (let project of projects) {
			if (project.pi && project.pi.profileImage) {
				project.pi.profileImage = await signedUrl(project.pi.profileImage, 3);
			}
		}
		if (!projects || projects.length === 0)
			throw new AppError("No projects found", 404);
		
		for (let project of projects) {
			if (project.pi && project.pi.profileImage) {
				project.pi.profileImage = await signedUrl(project.pi.profileImage, 3);
			}
		}
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
			include: {
				pi: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					}
				}
			}
		});
		if (!project) throw new AppError("Project not found", 404);
		if (project.pi && project.pi.profileImage) {
			project.pi.profileImage = await signedUrl(project.pi.profileImage, 3);
		}
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
		if (!piId) throw new AppError("Please provide piId", 400);
		const projects = await prisma.project.findMany({
			where: {
				pi: { id: Number(piId) },
			},
			orderBy: { createdAt: "desc" },
			include: {
				pi: {
					select: {
						id: true,
						name: true,
						email: true,
						role: true,
						profileImage: true,
						designation: true,
					}
				}
			}
		});
		for (let project of projects) {
			if (project.pi && project.pi.profileImage) {
				project.pi.profileImage = await signedUrl(project.pi.profileImage, 3);
			}
		}
		if (!projects || projects.length === 0)
			throw new AppError("No projects found for this PI", 404);
		if (projects.length === 0) {
			throw new AppError("No projects found for this PI", 404);
		}
		for (let project of projects) {
			if (project.pi && project.pi.profileImage) {
				project.pi.profileImage = await signedUrl(project.pi.profileImage, 3);
			}
		}
		response(res, 200, "Projects fetched successfully", { projects });
	}
);