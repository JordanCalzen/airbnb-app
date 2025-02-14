/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "./formInputs";
import SubmitButton from "./submitBtn";
import CustomCarousel from "./customcarousel";
import { ArrowLeft } from "lucide-react";
import ImageInput from "./uploader";
import toast from "react-hot-toast";
export type RegisterInputProps = {
	fullName: string;
	email: string;
	password: string;
	phone: string;
	image: string;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default function Signup() {
	const initialImage = "/my-placeholder.avif";
	const [imageUrl, setImageUrl] = useState(initialImage);
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterInputProps>();
	const router = useRouter();
	async function onSubmit(data: RegisterInputProps) {
		setIsLoading(true);
		data.image = imageUrl;
		try {
			const response = await fetch(`${baseUrl}/api/v1/users`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response) {
				setIsLoading(false);
				reset();
			}
			if (response.status === 201) {
				setIsLoading(false);
				toast.success("created successfully");
				router.push("/login");
				router.refresh();
			} else if (response.status === 409) {
				setIsLoading(false);
				toast.error("User Already exists");
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}
	return (
		<div className="min-h-screen lg:grid lg:grid-cols-2">
			<div className="flex items-center  justify-center p-4 lg:p-8">
				<div className="w-full   max-w-[35rem]">
					<Link href="/" className="absolute top-4 left-4 lg:top-8 lg:left-8">
						<ArrowLeft className="h-6 w-6" />
					</Link>
					<div className="text-center mb-6">
						<h1 className="text-2xl lg:text-3xl font-bold">
							Create an Account
						</h1>
					</div>
					<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-4 sm:col-span-2 md:col-span-1">
								<TextInput
									label="Full Name"
									register={register}
									name="fullName"
									errors={errors}
									placeholder="eg John Doe"
								/>
								<TextInput
									label="Email Address"
									register={register}
									name="email"
									type="email"
									errors={errors}
									placeholder="Eg. johndoe@gmail.com"
								/>
								<TextInput
									label="Phone Number"
									register={register}
									name="phone"
									type="tel"
									errors={errors}
									placeholder=""
								/>
								<TextInput
									label="Password"
									register={register}
									name="password"
									type="password"
									errors={errors}
									placeholder="******"
								/>
							</div>
							<div className="sm:col-span-2 md:col-span-1">
								<ImageInput
									title="Profile photo"
									imageUrl={imageUrl}
									setImageUrl={setImageUrl}
									endpoint="categoryImage"
								/>
							</div>
						</div>
						<SubmitButton
							title="Sign Up"
							loading={isLoading}
							loadingTitle="Creating Account please wait..."
						/>
					</form>
				</div>
			</div>
			<div className="hidden lg:block bg-muted">
				<CustomCarousel />
			</div>
		</div>
	);
}
