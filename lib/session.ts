import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { User } from "@prisma/client";
import { cookies } from "next/headers";

export type PayLoadProps = {
	userId: string;
	fullName: string | null;
	email: string | null;
	image: string | null;
	expiresAt: Date;
};
//encoding the secretKey
const secretKey = process.env.SESSION_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

//creating Encryption function
export async function encrypt(payload: PayLoadProps) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("1d")
		.sign(encodedKey);
}

//create Decryption function
export async function decrypt(session: string | undefined = "") {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ["HS256"],
		});
		return payload;
	} catch (error) {
		console.log(error);
	}
}

//create a session create function
export async function createSession(user: User) {
	const expiryTime = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
	const payLoadData = {
		userId: user.id,
		fullName: user.fullName,
		email: user.email,
		image: user.image,
		expiresAt: expiryTime,
	};
	const session = await encrypt(payLoadData);
	const cookieStore = await cookies();
	cookieStore.set("session", session, {
		httpOnly: true,
		secure: true,
		expires: expiryTime,
		path: "/",
		sameSite: "lax",
	});
}

//create a session update function
export async function updateSession() {
	const expiryTime = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
	const cookieStore = await cookies();
	const session = cookieStore.get("session")?.value;
	const payload = await decrypt(session);
	if (!session || !payload) {
		return null;
	}
	cookieStore.set("session", session, {
		httpOnly: true,
		secure: true,
		expires: expiryTime,
		path: "/",
		sameSite: "lax",
	});
}

//create a delete session function

export async function deleteSession() {
	const cookieStore = await cookies();
	cookieStore.delete("session");
}
