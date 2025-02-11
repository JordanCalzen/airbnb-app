import Image from "next/image";
import Link from "next/link";
import {
	Award,
	Camera,
	ChevronRight,
	Flag,
	Heart,
	MapPin,
	Share,
	Star,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Product } from "@prisma/client";

export default function DetailPage({ property }: { property: Product | null }) {
	return (
		<div className="max-w-6xl p-4 mx-auto lg:px-6 sm:py-8 md:py-10">
			<section className="flex-col hidden gap-4 pb-4 sm:flex sm:flex-row sm:items-center sm:pb-8">
				<h1 className="text-xl font-semibold tracking-tight lg:text-3xl">
					{property?.title}
				</h1>
				<nav className="flex items-center justify-center gap-1 sm:ml-auto">
					<Button
						asChild
						variant="ghost"
						size="sm"
						className="gap-1 underline rounded-md underline-offset-2"
					>
						<a href="#">
							<Share className="w-4 h-4" />
							Share
						</a>
					</Button>
					<Button
						asChild
						variant="ghost"
						size="sm"
						className="gap-1 underline rounded-md underline-offset-2"
					>
						<a href="#">
							<Heart className="w-4 h-4" />
							Save
						</a>
					</Button>
				</nav>
			</section>

			<section className="relative bg-muted">
				<div className="grid grid-cols-1 sm:grid-cols-4 gap-2 aspect-[16/9] sm:aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[3/1]">
					<Link
						href="#"
						className="relative col-span-2 row-span-2 overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl sm:rounded-l-xl"
					>
						<Image
							src={
								(property?.propertyImages[0] as string) ||
								`/my-placeholder.avif`
							}
							width={800}
							height={600}
							alt="Main villa view"
							className="object-cover w-full h-full"
							priority
						/>
					</Link>
					<Link
						href="#"
						className="relative hidden sm:block overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-tr-xl"
					>
						<Image
							src={
								(property?.propertyImages[1] as string) ||
								`/my-placeholder.avif`
							}
							width={400}
							height={300}
							alt="Villa interior"
							className="object-cover w-full h-full"
						/>
					</Link>
					<Link
						href="#"
						className="relative hidden sm:block overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						<Image
							src={
								(property?.propertyImages[2] as string) ||
								`/my-placeholder.avif`
							}
							width={400}
							height={300}
							alt="Pool area"
							className="object-cover w-full h-full"
						/>
					</Link>
					<Link
						href="#"
						className="relative hidden sm:block overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						<Image
							src={
								(property?.propertyImages[0] as string) ||
								`/my-placeholder.avif`
							}
							width={400}
							height={300}
							alt="Bedroom"
							className="object-cover w-full h-full"
						/>
					</Link>
					<Link
						href="#"
						className="relative hidden sm:block overflow-hidden transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-br-xl"
					>
						<Image
							src={
								(property?.propertyImages[1] as string) ||
								`/my-placeholder.avif`
							}
							width={400}
							height={300}
							alt="Bathroom"
							className="object-cover w-full h-full"
						/>
					</Link>
				</div>
				<Button
					variant="secondary"
					size="sm"
					className="absolute gap-1 bottom-4 right-4"
				>
					<Camera className="w-4 h-4" />
					Show all photos
				</Button>
			</section>

			<section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
				<div className="grid gap-8">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-2xl font-semibold">
								{property?.description}
							</h2>
							<p className="text-muted-foreground">
								{property?.maxGuests} guests · {property?.bedrooms} bedrooms ·{" "}
								{property?.bedrooms} beds · {property?.bathrooms} baths
							</p>
						</div>
						<Avatar className="w-14 h-14 border">
							<AvatarImage src="/placeholder-user.jpg" alt="Host" />
							<AvatarFallback>SH</AvatarFallback>
						</Avatar>
					</div>

					<div className="grid gap-6">
						<div className="flex gap-4 p-4 border rounded-lg">
							<Award className="w-8 h-8 mt-1" />
							<div>
								<h3 className="font-semibold">
									{property?.title} is a Superhost
								</h3>
								<p className="text-sm text-muted-foreground">
									Superhosts are experienced, highly rated hosts who are
									committed to providing great stays for guests.
								</p>
							</div>
						</div>
						<div className="flex gap-4 p-4 border rounded-lg">
							<MapPin className="w-8 h-8 mt-1" />
							<div>
								<h3 className="font-semibold">{property?.location}</h3>
								<p className="text-sm text-muted-foreground">
									95% of recent guests gave the location a 5-star rating.
								</p>
							</div>
						</div>
					</div>

					<Separator />

					<div className="prose">
						<p>
							Welcome to our luxurious mountain villa! Nestled in the heart of
							pristine nature, this stunning property offers breathtaking views
							and modern amenities for an unforgettable stay.
						</p>
						<Collapsible>
							<CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
								Show more
								<ChevronRight className="w-4 h-4 transition-all translate-y-px" />
							</CollapsibleTrigger>
							<CollapsibleContent>
								<p>
									The villa features a private infinity pool, fully equipped
									gourmet kitchen, and spacious living areas perfect for
									entertaining. Each bedroom offers stunning mountain views and
									luxury bedding for ultimate comfort.
								</p>
							</CollapsibleContent>
						</Collapsible>
					</div>

					<Separator />

					<div className="grid gap-4">
						<h3 className="text-xl font-semibold">What this place offers</h3>
						<div className="grid gap-4 sm:grid-cols-2">
							{property?.amenities.map((amenity, i) => {
								return <span key={i}>{amenity}</span>;
							})}
						</div>
						<Button variant="outline" className="justify-self-start">
							Show all amenities
						</Button>
					</div>
				</div>

				<div className="grid gap-4">
					<Card className="sticky top-8">
						<CardHeader>
							<CardTitle className="flex items-baseline gap-2">
								<span className="text-2xl font-bold">${property?.price}</span>
								<span className="text-base font-normal text-muted-foreground">
									night
								</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form className="grid gap-4">
								<div className="grid grid-cols-2 gap-2">
									<div className="grid gap-1.5">
										<Label htmlFor="check-in">Check in</Label>
										<input
											type="date"
											id="check-in"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										/>
									</div>
									<div className="grid gap-1.5">
										<Label htmlFor="check-out">Check out</Label>
										<input
											type="date"
											id="check-out"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										/>
									</div>
								</div>
								<div className="grid gap-1.5">
									<Label htmlFor="guests">Guests</Label>
									<Select>
										<SelectTrigger id="guests">
											<SelectValue placeholder="Select number of guests" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1">1 guest</SelectItem>
											<SelectItem value="2">2 guests</SelectItem>
											<SelectItem value="3">3 guests</SelectItem>
											<SelectItem value="4">4 guests</SelectItem>
											<SelectItem value="5">5 guests</SelectItem>
											<SelectItem value="6">6 guests</SelectItem>
											<SelectItem value="7">7 guests</SelectItem>
											<SelectItem value="8">8 guests</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<Button size="lg">Reserve</Button>
								<p className="text-center text-sm text-muted-foreground">
									You won&apos;t be charged yet
								</p>
							</form>

							<Separator className="my-4" />

							<div className="space-y-4">
								<div className="flex justify-between">
									<span className="underline">
										${property?.price} x 5 nights
									</span>
									<span>$2,250</span>
								</div>
								<div className="flex justify-between">
									<span className="underline">Cleaning fee</span>
									<span>${property?.cleaning_fee}</span>
								</div>
								<div className="flex justify-between">
									<span className="underline">Service fee</span>
									<span>$50</span>
								</div>
								<Separator />
								<div className="flex justify-between font-semibold">
									<span>Total before taxes</span>
									<span>$2,740</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<Separator />

			<section className="py-8">
				<div className="flex items-baseline gap-2">
					<h2 className="text-2xl font-semibold">Reviews</h2>
					<div className="flex items-center gap-2">
						<Star className="w-4 h-4 fill-primary" />
						<span className="font-medium">4.96</span>
						<span className="text-muted-foreground">· 124 reviews</span>
					</div>
				</div>

				<div className="grid gap-8 py-8 sm:grid-cols-2">
					<div className="space-y-4">
						<div className="flex items-start gap-4">
							<Avatar>
								<AvatarImage src="/placeholder-user.jpg" alt="@guest" />
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
							<div>
								<h3 className="font-semibold">John Doe</h3>
								<p className="text-sm text-muted-foreground">January 2024</p>
								<p className="mt-2">
									Amazing place with breathtaking views! Can&apos;t wait to come
									back.
								</p>
							</div>
						</div>
					</div>
					{/* Add more reviews as needed */}
				</div>

				<Button variant="outline">Show all 124 reviews</Button>
			</section>

			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline" className="gap-2">
						<Flag className="w-4 h-4" />
						Report this listing
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Report this listing</DialogTitle>
						<DialogDescription>
							What&apos;s wrong with this listing?
						</DialogDescription>
					</DialogHeader>
					<div className="py-6">
						<RadioGroup defaultValue="inaccurate">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="inaccurate" id="inaccurate" />
								<Label htmlFor="inaccurate">Inaccurate information</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="scam" id="scam" />
								<Label htmlFor="scam">Potential scam</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="offensive" id="offensive" />
								<Label htmlFor="offensive">Offensive content</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="other" id="other" />
								<Label htmlFor="other">Other</Label>
							</div>
						</RadioGroup>
					</div>
					<DialogFooter>
						<Button variant="outline">Cancel</Button>
						<Button>Submit report</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
