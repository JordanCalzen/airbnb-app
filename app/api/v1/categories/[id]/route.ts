import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;
		const singleCategory = await db.category.findFirst({
			where: {
				id,
			},
			include: {
				products: true,
			},
		});
		return NextResponse.json(
			{
				message: "Fetched single",
				data: singleCategory,
				error: null,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "something went wrong",
			},
			{
				status: 500,
			}
		);
	}
}
