"use client";

import type { Category } from "@prisma/client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import Toggle from "../toggle";

export default function CategoryNav({
	categories,
}: {
	categories: Category[];
}) {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [showLeftScroll, setShowLeftScroll] = useState(false);
	const [showRightScroll, setShowRightScroll] = useState(true);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = 200;
			const container = scrollContainerRef.current;
			const newScrollPosition =
				direction === "left"
					? container.scrollLeft - scrollAmount
					: container.scrollLeft + scrollAmount;

			container.scrollTo({
				left: newScrollPosition,
				behavior: "smooth",
			});
		}
	};

	const handleScroll = () => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			setShowLeftScroll(container.scrollLeft > 0);
			setShowRightScroll(
				container.scrollLeft < container.scrollWidth - container.clientWidth
			);
		}
	};

	const [displayTotal, setDisplayTotal] = useState(false);

	return (
		<div className="flex items-center justify-start gap-x-20  w-full bg-white shadow-sm border-b-2 pt-4 px-8">
			<div className="relative lg:w-[60%] w-full flex items-center">
				{/* Left scroll button */}
				{showLeftScroll && (
					<button
						onClick={() => scroll("left")}
						className="absolute -left-[18px] z-10 h-8 w-8 px-2 bg-gradient-to-r from-white to-white/50 bg-gray-200/95 rounded-full flex items-center justify-center"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>
				)}

				{/* Scrollable categories */}
				<div
					ref={scrollContainerRef}
					onScroll={handleScroll}
					className="flex items-center gap-6 overflow-x-auto scrollbar-hide px-4"
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
					}}
				>
					{categories.map((category) => (
						<div
							key={category.name}
							onClick={() => setSelectedCategory(category.name)}
							className={cn(
								"flex flex-col items-center justify-center min-w-fit cursor-pointer",
								"transition-all duration-200 ease-in-out",
								"py-4 border-b-2",
								selectedCategory === category.name
									? "border-black text-black"
									: "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-200"
							)}
						>
							<div className="relative w-8 h-8 mb-2">
								<Image
									src={category.image || "/placeholder.svg"}
									alt={category.name}
									fill
									className="object-contain"
								/>
							</div>
							<span className="text-sm whitespace-nowrap">{category.name}</span>
						</div>
					))}
				</div>

				{/* Right scroll button */}
				{showRightScroll && (
					<button
						onClick={() => scroll("right")}
						className="absolute -right-[18px] z-10 h-8 w-8 px-2 bg-gradient-to-l from-white to-white/50  bg-gray-200/95 rounded-full flex items-center justify-center"
					>
						<ChevronRight className="h-4 w-4" />
					</button>
				)}
			</div>

			{/* Right section with filter buttons */}
			<div className="  hidden lg:flex space-x-6 ">
				<button className="ml-auto border px-5 py-2 flex items-center gap-2 rounded-md shadow-sm">
					<Filter className="text-lg" /> Filters
				</button>
				<button className="ml-auto border px-5 py-2 flex items-center gap-2 rounded-md shadow-sm">
					<span>Display total before taxes</span>
					<Toggle
						checked={displayTotal}
						onChange={() => setDisplayTotal(!displayTotal)}
					/>
				</button>
			</div>
		</div>
	);
}
