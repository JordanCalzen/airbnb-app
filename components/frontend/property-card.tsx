"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

export function PropertyCard({ product }: { product: Product }) {
	return (
		<div className="group relative flex flex-col gap-2">
			<div className="relative aspect-square overflow-hidden rounded-xl">
				<Image
					src={product.propertyImages[0] || "/placeholder.svg"}
					alt={product.title}
					width={400}
					height={400}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<button
					// onClick={() => setIsFavorited(!isFavorited)}
					className="absolute right-3 top-3 z-10"
				>
					<Heart className={cn("h-6 w-6 text-pink-500 fill-pink-500")} />
				</button>
				{
					<div className="absolute left-3 top-3 rounded-lg bg-white px-2 py-1 text-xs font-medium">
						Guest favorite
					</div>
				}
			</div>
			<div className="flex justify-between gap-1">
				<span className="font-medium">{}</span>
				<div className="flex items-center gap-1">
					<span className="text-yellow-500">★</span>
					<span>{product.maxGuests}</span>
				</div>
			</div>
			<p className="text-sm text-muted-foreground">{product.description}</p>
			{/* <p className="text-sm text-muted-foreground">{}</p> */}
			<p>
				<span className="font-medium">${product.price}</span>{" "}
				<span className="text-muted-foreground">total before taxes</span>
			</p>
		</div>
	);
}
