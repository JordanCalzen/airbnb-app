/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultipleImageInput from "./multiple-uploader";
import { Card, CardContent } from "./ui/card";
import FormSelectInput from "./select-input";
import { Category } from "@prisma/client";

export type FormValues = {
	title: string;
	description: string;
	propertyType: string;
	bedrooms: number;
	bathrooms: number;
	amenities: string[];
	location: string;
	availableFrom: Date;
	availableTo: Date | undefined;
	price: number;
	cleaning_fee: number;
	maxGuests: string;
	houseRules: string[];
	propertyImages: string[];
	categoryId: string;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function AirbnbListingForm({
	category,
}: {
	category: Category[];
}) {
	const initialImages = [
		"/my-placeholder.avif",
		"/my-placeholder.avif",
		"/my-placeholder.avif",
	];
	const [productImages, setProductImages] = useState(initialImages);

	const [selector, setSelector] = useState<any>("");
	const selectCategory = category.map((item) => ({
		value: item.id,
		label: item.name,
	}));

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			title: "",
			description: "",
			propertyType: "entire_place",
			bedrooms: 1,
			bathrooms: 1,
			amenities: [],
			location: "",
			availableFrom: new Date(),
			availableTo: undefined,
			price: 0,
			cleaning_fee: 0,
			maxGuests: "1",
			houseRules: [],
		},
	});

	async function formSubmit(data: FormValues) {
		data.price = Number(data.price);
		data.propertyImages = productImages;
		data.bedrooms = Number(data.bedrooms);
		data.categoryId = selector.value;
		data.bathrooms = Number(data.bathrooms);
		data.cleaning_fee = Number(data.cleaning_fee);
		console.log(data);
		try {
			const res = await fetch(`${baseUrl}/api/v1/products`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			console.log(data);
			if (res) {
				reset();
			}
		} catch (error) {
			console.log(error);
		}
	}

	const amenities = [
		"Wifi",
		"Kitchen",
		"Washer",
		"Dryer",
		"Air conditioning",
		"Heating",
		"Dedicated workspace",
		"TV",
		"Hair dryer",
		"Iron",
	];

	const houseRules = ["No smoking", "No parties or events", "No pets"];

	return (
		<div className="flex items-center justify-center my-4">
			<div className="w-full max-w-2xl rounded-lg shadow-lg">
				<form
					onSubmit={handleSubmit(formSubmit)}
					className="space-y-8 max-w-2xl mx-auto p-6"
				>
					<div>
						<h1 className="text-2xl font-bold">Create Your Airbnb Listing</h1>
						<p className="text-gray-500">
							Fill in the details to list your property
						</p>
					</div>
					<div className="space-y-4">
						<Label htmlFor="title">Listing Title</Label>
						<Input
							id="title"
							placeholder="e.g. Cozy Cabin in the Woods"
							{...register("title", { required: true })}
						/>
						{errors.title && (
							<p className="text-sm text-red-500">Title is required</p>
						)}
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-4">
							<Label>Available From</Label>
							<Controller
								control={control}
								name="availableFrom"
								render={({ field }) => (
									<DatePicker
										selected={field.value}
										onChange={field.onChange}
										dateFormat="yyyy-MM-dd"
										className="w-full border p-2 rounded"
										placeholderText="Select a start date"
									/>
								)}
							/>
						</div>

						<div className="space-y-4">
							<Label>Available To</Label>
							<Controller
								control={control}
								name="availableTo"
								render={({ field }) => (
									<DatePicker
										selected={field.value}
										onChange={field.onChange}
										dateFormat="yyyy-MM-dd"
										className="w-full border p-2 rounded"
										placeholderText="Select an end date"
									/>
								)}
							/>
						</div>
					</div>
					<div className="space-y-4">
						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							placeholder="Describe your property..."
							{...register("description", { required: true })}
						/>
						{errors.description && (
							<p className="text-sm text-red-500">Description is required</p>
						)}
					</div>
					<div className="space-y-4">
						<Card>
							<CardContent>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
									<FormSelectInput
										label=" Categories"
										options={selectCategory}
										option={selector}
										setOption={setSelector}
										toolTipText="Add New Main Category"
										href="/dashboard/inventory/main-categories/new"
									/>
								</div>
							</CardContent>
						</Card>
					</div>
					<div className="space-y-4">
						<MultipleImageInput
							title="Property Images"
							imageUrls={productImages}
							setImageUrls={setProductImages}
							endpoint="imageUploader"
						/>
					</div>
					<div className="space-y-4">
						<Label>Property Type</Label>
						<Controller
							name="propertyType"
							control={control}
							render={({ field }) => (
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="entire_place" id="entire_place" />
										<Label htmlFor="entire_place">Entire place</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="private_room" id="private_room" />
										<Label htmlFor="private_room">Private room</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="shared_room" id="shared_room" />
										<Label htmlFor="shared_room">Shared room</Label>
									</div>
								</RadioGroup>
							)}
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="bedrooms">Bedrooms</Label>
							<Input
								type="number"
								id="bedrooms"
								min="1"
								{...register("bedrooms", { required: true, min: 1 })}
							/>
							{errors.bedrooms && (
								<p className="text-sm text-red-500">
									Valid number of bedrooms required
								</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="bathrooms">Bathrooms</Label>
							<Input
								type="number"
								id="bathrooms"
								min="1"
								{...register("bathrooms", { required: true, min: 1 })}
							/>
							{errors.bathrooms && (
								<p className="text-sm text-red-500">
									Valid number of bathrooms required
								</p>
							)}
						</div>
					</div>
					<div className="space-y-4">
						<Label>Amenities</Label>
						<div className="grid grid-cols-2 gap-4">
							{amenities.map((amenity) => (
								<div className="flex items-center space-x-2" key={amenity}>
									<Controller
										name="amenities"
										control={control}
										render={({ field }) => (
											<Checkbox
												id={amenity.toLowerCase().replace(" ", "_")}
												checked={field.value?.includes(amenity)}
												onCheckedChange={(checked) => {
													const currentValue = field.value || [];
													const newValue = checked
														? [...currentValue, amenity]
														: currentValue.filter((value) => value !== amenity);
													field.onChange(newValue);
												}}
											/>
										)}
									/>
									<Label htmlFor={amenity.toLowerCase().replace(" ", "_")}>
										{amenity}
									</Label>
								</div>
							))}
						</div>
					</div>
					<div className="space-y-4">
						<Label htmlFor="location">Location</Label>
						<Input
							id="location"
							placeholder="Enter the property's location"
							{...register("location", { required: true })}
						/>
						{errors.location && (
							<p className="text-sm text-red-500">Location is required</p>
						)}
					</div>
					{/* <div className="space-y-4">
						<Label>Availability</Label>
						<Controller
							name="maxGuests"
							control={control}
							rules={{ required: "Maximum number of guests is required" }}
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger>
										<SelectValue placeholder="Select max guests" />
									</SelectTrigger>
									<SelectContent>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
											<SelectItem key={num} value={num.toString()}>
												{num}
											</SelectItem>
										))}
										<SelectItem value="11+">11+</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					</div> */}
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="price">Price per night ($)</Label>
							<Input
								type="number"
								id="price"
								min="1"
								{...register("price", { required: true, min: 1 })}
							/>
							{errors.price && (
								<p className="text-sm text-red-500">Valid price is required</p>
							)}
						</div>
						<div className="space-y-2">
							<Label htmlFor="cleaning_fee">Cleaning fee ($)</Label>
							<Input
								type="number"
								id="cleaning_fee"
								min="0"
								{...register("cleaning_fee", { required: true, min: 0 })}
							/>
							{errors.cleaning_fee && (
								<p className="text-sm text-red-500">
									Valid cleaning fee is required
								</p>
							)}
						</div>
					</div>
					<div className="space-y-4">
						<Label htmlFor="maxGuests">Maximum number of guests</Label>
						<Controller
							name="maxGuests"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select onValueChange={field.onChange} value={field.value}>
									<SelectTrigger>
										<SelectValue placeholder="Select max guests" />
									</SelectTrigger>
									<SelectContent>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
											<SelectItem key={num} value={num.toString()}>
												{num}
											</SelectItem>
										))}
										<SelectItem value="11+">11+</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
						{errors.maxGuests && (
							<p className="text-sm text-red-500">
								Please select maximum number of guests
							</p>
						)}
					</div>
					<div className="space-y-4">
						<Label>House Rules</Label>
						<div className="space-y-2">
							{houseRules.map((rule) => (
								<div className="flex items-center space-x-2" key={rule}>
									<Controller
										name="houseRules"
										control={control}
										render={({ field }) => (
											<Checkbox
												id={rule.toLowerCase().replace(" ", "_")}
												checked={field.value?.includes(rule)}
												onCheckedChange={(checked) => {
													const currentValue = field.value || [];
													const newValue = checked
														? [...currentValue, rule]
														: currentValue.filter((value) => value !== rule);
													field.onChange(newValue);
												}}
											/>
										)}
									/>
									<Label htmlFor={rule.toLowerCase().replace(" ", "_")}>
										{rule}
									</Label>
								</div>
							))}
						</div>
					</div>
					<Button type="submit" className="w-full">
						Create Listing
					</Button>
				</form>
			</div>
		</div>
	);
}
