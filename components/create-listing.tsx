"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerWithRange } from "./date-range-picker";

interface FormData {
	title: string;
	description: string;
	propertyType: string;
	location: string;
	price: number;
	images: FileList | null;
	amenities: string[];
	houseRules: string[];
	availability: {
		from: Date;
		to: Date;
	};
}

export default function CreateListing() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		title: "",
		description: "",
		propertyType: "entire_place",
		location: "",
		price: 0,
		images: null,
		amenities: [],
		houseRules: [],
		availability: {
			from: new Date(),
			to: new Date(),
		},
	});

	const totalSteps = 4;

	const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
	const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFormData((prev) => ({
				...prev,
				images: e.target.files,
			}));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="max-w-3xl mx-auto p-6">
			<form onSubmit={handleSubmit}>
				<Card>
					<CardHeader>
						<CardTitle>Create a New Listing</CardTitle>
						<CardDescription>
							Step {step} of {totalSteps}
						</CardDescription>
					</CardHeader>

					<CardContent className="space-y-6">
						{step === 1 && (
							<div className="space-y-6">
								<div>
									<Label htmlFor="images">Property Photos</Label>
									<div className="mt-2 grid grid-cols-2 gap-4">
										<div className="col-span-2 aspect-[3/2] rounded-lg border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center text-center">
											<Upload className="h-8 w-8 text-gray-400" />
											<div className="mt-2">
												<Label
													htmlFor="images"
													className="cursor-pointer text-primary hover:text-primary/80"
												>
													Upload main photo
												</Label>
												<Input
													id="images"
													type="file"
													accept="image/*"
													multiple
													className="hidden"
													onChange={handleImageChange}
												/>
											</div>
											<p className="text-sm text-gray-500 mt-2">
												or drag and drop
											</p>
										</div>
										{[1, 2, 3, 4].map((n) => (
											<div
												key={n}
												className="aspect-square rounded-lg border-2 border-dashed border-gray-300 p-4 flex items-center justify-center"
											>
												<Label
													htmlFor={`image-${n}`}
													className="cursor-pointer text-primary hover:text-primary/80"
												>
													+ Add photo
												</Label>
												<Input
													id={`image-${n}`}
													type="file"
													accept="image/*"
													className="hidden"
													onChange={handleImageChange}
												/>
											</div>
										))}
									</div>
								</div>
							</div>
						)}

						{step === 2 && (
							<div className="space-y-6">
								<div>
									<Label htmlFor="title">Listing Title</Label>
									<Input
										id="title"
										value={formData.title}
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												title: e.target.value,
											}))
										}
										placeholder="e.g., Cozy Mountain Retreat with Hot Tub"
										className="mt-2"
									/>
								</div>

								<div>
									<Label htmlFor="description">Description</Label>
									<Textarea
										id="description"
										value={formData.description}
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												description: e.target.value,
											}))
										}
										placeholder="Describe your place..."
										className="mt-2"
										rows={6}
									/>
								</div>

								<div>
									<Label>Property Type</Label>
									<RadioGroup
										value={formData.propertyType}
										onValueChange={(value) =>
											setFormData((prev) => ({ ...prev, propertyType: value }))
										}
										className="mt-2"
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
								</div>
							</div>
						)}

						{step === 3 && (
							<div className="space-y-6">
								<div>
									<Label>Amenities</Label>
									<div className="grid grid-cols-2 gap-4 mt-2">
										{[
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
											"Pool",
											"Hot tub",
											"Free parking",
											"EV charger",
											"Gym",
										].map((amenity) => (
											<div
												className="flex items-center space-x-2"
												key={amenity}
											>
												<Checkbox
													id={amenity}
													checked={formData.amenities.includes(amenity)}
													onCheckedChange={(checked) => {
														if (checked) {
															setFormData((prev) => ({
																...prev,
																amenities: [...prev.amenities, amenity],
															}));
														} else {
															setFormData((prev) => ({
																...prev,
																amenities: prev.amenities.filter(
																	(a) => a !== amenity
																),
															}));
														}
													}}
												/>
												<Label htmlFor={amenity}>{amenity}</Label>
											</div>
										))}
									</div>
								</div>

								<div>
									<Label>House Rules</Label>
									<div className="space-y-2 mt-2">
										{[
											"No smoking",
											"No pets",
											"No parties or events",
											"No unregistered guests",
											"Quiet hours 10 PM - 7 AM",
										].map((rule) => (
											<div className="flex items-center space-x-2" key={rule}>
												<Checkbox
													id={rule}
													checked={formData.houseRules.includes(rule)}
													onCheckedChange={(checked) => {
														if (checked) {
															setFormData((prev) => ({
																...prev,
																houseRules: [...prev.houseRules, rule],
															}));
														} else {
															setFormData((prev) => ({
																...prev,
																houseRules: prev.houseRules.filter(
																	(r) => r !== rule
																),
															}));
														}
													}}
												/>
												<Label htmlFor={rule}>{rule}</Label>
											</div>
										))}
									</div>
								</div>
							</div>
						)}

						{step === 4 && (
							<div className="space-y-6">
								<div>
									<Label htmlFor="location">Location</Label>
									<Input
										id="location"
										value={formData.location}
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												location: e.target.value,
											}))
										}
										placeholder="Enter your address"
										className="mt-2"
									/>
								</div>

								<div>
									<Label htmlFor="price">Price per night ($)</Label>
									<Input
										id="price"
										type="number"
										value={formData.price}
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												price: Number.parseFloat(e.target.value),
											}))
										}
										min={0}
										className="mt-2"
									/>
								</div>

								<div>
									<Label>Availability</Label>
									<div className="mt-2">
										<DatePickerWithRange
											date={{
												from: formData.availability.from,
												to: formData.availability.to,
											}}
											setDate={(range) =>
												setFormData((prev) => ({
													...prev,
													availability: {
														from: range?.from || new Date(),
														to: range?.to || new Date(),
													},
												}))
											}
										/>
									</div>
								</div>
							</div>
						)}
					</CardContent>

					<CardFooter className="flex justify-between">
						<Button
							type="button"
							variant="outline"
							onClick={prevStep}
							disabled={step === 1}
						>
							<ChevronLeft className="w-4 h-4 mr-2" />
							Previous
						</Button>

						{step < totalSteps ? (
							<Button type="button" onClick={nextStep}>
								Next
								<ChevronRight className="w-4 h-4 ml-2" />
							</Button>
						) : (
							<Button type="submit">Create Listing</Button>
						)}
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
