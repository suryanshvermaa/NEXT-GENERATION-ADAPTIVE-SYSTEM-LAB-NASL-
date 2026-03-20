import "dotenv/config";

import prisma from "../src/config/db";
import { getObjectKey } from "../src/s3";

const isLikelyUrl = (value: string | null | undefined): value is string => {
	return typeof value === "string" && /^https?:\/\//i.test(value);
};

async function migrateModelField<T extends { id: number | string }>(opts: {
	name: string;
	fetch: () => Promise<Array<T & Record<string, any>>>;
	getId: (row: T) => number | string;
	getValue: (row: any) => string | null | undefined;
	update: (id: number | string, newValue: string) => Promise<unknown>;
}) {
	const rows = await opts.fetch();
	let updated = 0;

	for (const row of rows) {
		const current = opts.getValue(row);
		if (!isLikelyUrl(current)) continue;

		const normalized = getObjectKey(current);
		if (!normalized || normalized === current) continue;

		await opts.update(opts.getId(row), normalized);
		updated++;
	}

	console.log(`[${opts.name}] scanned=${rows.length} updated=${updated}`);
	return updated;
}

async function main() {
	console.log("Starting storage URL -> key migration...");

	await migrateModelField({
		name: "User.profileImage",
		fetch: () =>
			prisma.user.findMany({
				where: {
					profileImage: { startsWith: "http" },
				},
				select: { id: true, profileImage: true },
			}),
		getId: (row) => row.id,
		getValue: (row) => row.profileImage,
		update: (id, newValue) =>
			prisma.user.update({
				where: { id: Number(id) },
				data: { profileImage: newValue },
			}),
	});

	await migrateModelField({
		name: "Social.iconURL",
		fetch: () =>
			prisma.social.findMany({
				where: {
					iconURL: { startsWith: "http" },
				},
				select: { id: true, iconURL: true },
			}),
		getId: (row) => row.id,
		getValue: (row) => row.iconURL,
		update: (id, newValue) =>
			prisma.social.update({
				where: { id: Number(id) },
				data: { iconURL: newValue },
			}),
	});

	await migrateModelField({
		name: "Event.imageURL",
		fetch: () =>
			prisma.event.findMany({
				where: {
					imageURL: { startsWith: "http" },
				},
				select: { id: true, imageURL: true },
			}),
		getId: (row) => row.id,
		getValue: (row) => row.imageURL,
		update: (id, newValue) =>
			prisma.event.update({
				where: { id: Number(id) },
				data: { imageURL: newValue },
			}),
	});

	await migrateModelField({
		name: "ResearchArea.imageURL",
		fetch: () =>
			prisma.researchArea.findMany({
				where: {
					imageURL: { startsWith: "http" },
				},
				select: { id: true, imageURL: true },
			}),
		getId: (row) => row.id,
		getValue: (row) => row.imageURL,
		update: (id, newValue) =>
			prisma.researchArea.update({
				where: { id: Number(id) },
				data: { imageURL: newValue },
			}),
	});

	await migrateModelField({
		name: "ResearchFacility.imageURL",
		fetch: () =>
			prisma.researchFacility.findMany({
				where: {
					imageURL: { startsWith: "http" },
				},
				select: { id: true, imageURL: true },
			}),
		getId: (row) => row.id,
		getValue: (row) => row.imageURL,
		update: (id, newValue) =>
			prisma.researchFacility.update({
				where: { id: Number(id) },
				data: { imageURL: newValue },
			}),
	});

	await migrateModelField({
		name: "PhotoGallery.imageURL",
		fetch: () =>
			prisma.photoGallery.findMany({
				where: {
					imageURL: { startsWith: "http" },
				},
				select: { id: true, imageURL: true },
			}),
		getId: (row) => row.id,
		getValue: (row) => row.imageURL,
		update: (id, newValue) =>
			prisma.photoGallery.update({
				where: { id: Number(id) },
				data: { imageURL: newValue },
			}),
	});

	console.log("Done.");
}

main()
	.catch((err) => {
		console.error(err);
		process.exitCode = 1;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
