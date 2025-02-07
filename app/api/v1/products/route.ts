import { FormValues } from "@/components/airbnb-listing-form";
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const data: FormValues = await request.json();

	try {
		const product = await db.product.create({
			data,
		});
		return NextResponse.json(
			{
				message: "created",
				data: product,
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
		const createdProducts = await db.product.findMany();
		return NextResponse.json(
			{
				message: "fetched",
				data: createdProducts,
				error: null,
			},
			{ status: 200 }
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
