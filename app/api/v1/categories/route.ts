import { CategoryProps } from "@/components/category-form";
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const data: CategoryProps = await request.json();
		const category = await db.category.create({ data });
		return NextResponse.json(
			{
				message: "created",
				data: category,
				error: null,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "something went wrong",
			},
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const categories = await db.category.findMany({
			include: {
				products: true,
			},
		});
		return NextResponse.json(
			{
				message: "created",
				data: categories,
				error: null,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "something went wrong",
			},
			{ status: 500 }
		);
	}
}
