"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

export function PropertyCard({ property }: { property: Product }) {
	return (
		<div className="group relative flex flex-col gap-2">
			<div className="relative aspect-square overflow-hidden rounded-xl">
				<Image
					src={property.propertyImages[0] || "/placeholder.svg"}
					alt={property.location}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<button
					// onClick={() => setIsFavorited(!isFavorited)}
					className="absolute right-3 top-3 z-10"
				>
					<Heart className={cn("h-6 w-6 transition-colors fill-primary")} />
				</button>
				{property.maxGuests && (
					<div className="absolute left-3 top-3 rounded-lg bg-white px-2 py-1 text-xs font-medium">
						Guest favorite
					</div>
				)}
			</div>
			<div className="flex justify-between gap-1">
				<span className="font-medium">{property.location}</span>
				<div className="flex items-center gap-1">
					<span>★</span>
					<span>{property.bedrooms.toFixed(2)}</span>
				</div>
			</div>
			<p className="text-sm text-muted-foreground">{property.description}</p>
			{/* <p className="text-sm text-muted-foreground">{}</p> */}
			<p>
				<span className="font-medium">${property.price}</span>{" "}
				<span className="text-muted-foreground">total before taxes</span>
			</p>
		</div>
	);
}
