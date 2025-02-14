"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ImageInput from "./uploader";
export type CategoryProps = {
	name: string;
	image: string;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function CategoryForm() {
	const initialImage = "/my-placeholder.avif";
	const [imageUrl, setImageUrl] = useState(initialImage);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CategoryProps>();

	async function formSubmit(data: CategoryProps) {
		data.image = imageUrl;
		try {
			const res = await fetch(`${baseUrl}/api/v1/categories`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (res) {
				reset();
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className="pt-[3rem] flex items-center justify-center">
			<Card className="w-full  max-w-2xl">
				<CardHeader>
					<CardTitle>Add New Category</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
						<div className="space-y-2">
							<Label htmlFor="categoryName">Category Name</Label>
							<Input
								id="productName"
								placeholder="Enter Category name"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<span className="text-red-700">This field is required</span>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="image">Category Image</Label>

							<ImageInput
								title="Category Image"
								imageUrl={imageUrl}
								setImageUrl={setImageUrl}
								endpoint="categoryImage"
							/>
						</div>

						<Button type="submit" className="w-full">
							Add Category
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
