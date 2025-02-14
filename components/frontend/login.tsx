/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "../formInputs";
import SubmitButton from "../submitBtn";
import CustomCarousel from "../customcarousel";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

export type RegisterInputProps = {
	email: string;
	password: string;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState("");
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterInputProps>();
	const router = useRouter();
	async function onSubmit(data: RegisterInputProps) {
		try {
			setIsLoading(true);
			const response = await fetch(`${baseUrl}/api/v1/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.status === 403) {
				setErr("Wrong credentials");
				toast.error("Wrong credentials");
				setIsLoading(false);
				reset();
			} else if (response.status === 201) {
				setIsLoading(false);
				toast.success("Logged in successfully");
				router.push("/");
				router.refresh();
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}
	return (
		<div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<Link href={`/`} className="absolute top-5 left-5">
						<ArrowLeft />
					</Link>
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">Login your Account</h1>
					</div>
					<form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
						<TextInput
							label="Email Address"
							register={register}
							name="email"
							type="email"
							errors={errors}
							placeholder="Eg. johndoe@gmail.com"
						/>

						<TextInput
							label="Password"
							register={register}
							name="password"
							type="password"
							errors={errors}
							placeholder="******"
						/>
						{err && <span className="text-xs text-red-700">{err}</span>}

						<SubmitButton
							title="Login"
							loading={isLoading}
							loadingTitle="Login please wait..."
						/>
					</form>
					<div className="mt-4 text-center text-sm">
						Don{"'"}t have an account?{" "}
						<Link href="/signup" className="underline">
							Register
						</Link>
					</div>
				</div>
			</div>
			<div className="hidden bg-muted lg:block relative">
				<CustomCarousel />
			</div>
		</div>
	);
}
