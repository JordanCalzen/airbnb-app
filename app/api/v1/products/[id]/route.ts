import { db } from "@/prisma/db";
import { SingleQueryResponse } from "@/types/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<SingleQueryResponse>> {
	try {
		const { id } = await params;
		const singleProduct = await db.product.findFirst({
			where: {
				id,
			},
			include: { category: true },
		});
		return NextResponse.json(
			{
				message: "Fetched single",
				data: singleProduct,
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
				message: "Failed",
				data: null,
				error: "something went wrong",
			},
			{
				status: 500,
			}
		);
	}
}
