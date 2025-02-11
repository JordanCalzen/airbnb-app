"use client";

import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ product }: { product: Product }) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<Card className="w-full max-w-xl bg-zinc-900 text-zinc-100">
			<CardContent className="p-0 bg-white">
				<Carousel setApi={setApi} className="w-full">
					<CarouselContent>
						{product.propertyImages.map((image, index) => (
							<CarouselItem key={index}>
								<div className="relative aspect-[4/3]">
									<Image
										alt={product.title}
										className="object-cover w-full h-full rounded-t-lg"
										fill
										src={image}
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-2 text-slate-900" />
					<CarouselNext className="right-2 text-slate-900" />
				</Carousel>
				{/* Navigation Dots */}
				<div className="flex justify-center gap-2 mt-4 pb-4">
					{Array.from({ length: count }).map((_, index) => (
						<button
							key={index}
							className={`w-2 h-2 rounded-full transition-all ${
								index + 1 === current ? "bg-blue-600 w-6" : "bg-zinc-600"
							}`}
							onClick={() => api?.scrollTo(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</CardContent>
			<Link className="cursor-pointer" href={`/detailedpg/${product.id}`}>
				<div className="p-6 bg-white">
					<CardHeader className="p-0 mb-4">
						<div className="flex items-center justify-between">
							<h2 className="text-xl truncate text-black font-semibold">
								{product.title}
							</h2>
							<div className="flex items-center gap-1">
								<Star className="w-5 h-5 fill-current text-yellow-400" />
								<span className="text-black">4.5</span>
							</div>
						</div>
					</CardHeader>
					<div className="space-y-4">
						<p className="text-zinc-400">{product.description}</p>
						<div className="flex items-center justify-between">
							<div className="flex items-baseline gap-1">
								<span className="text-2xl text-black font-bold">
									${product.price}
								</span>
								<span className="text-zinc-400">/ night</span>
							</div>
							<Button className="bg-blue-600 hover:bg-blue-700">
								Book now
							</Button>
						</div>
					</div>
				</div>
			</Link>
		</Card>
	);
}
