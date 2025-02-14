/* eslint-disable no-console, no-unused-vars */
import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		const { fullName, email, password, phone, image } = data;
		const existingUser = await db.user.findFirst({
			where: {
				email,
			},
		});
		if (existingUser) {
			return NextResponse.json(
				{
					data: null,
					error: "User already exists",
				},
				{ status: 409 }
			);
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await db.user.create({
			data: { fullName, email, password: hashedPassword, phone, image },
		});
		const { password: detachPassword, ...others } = newUser;
		return NextResponse.json(
			{
				data: others,
				error: null,
				message: "sucessful",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{
				data: null,
				error: "Something went wrong",
			},
			{ status: 500 }
		);
	}
}
