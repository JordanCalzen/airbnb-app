"use client";
import CardCarousel from "@/components/frontend/carouselCard";
import { useProducts } from "../hooks/useProducts";
import { Loader } from "lucide-react";

export default function page() {
	// const products = (await fetchProduct()) || [];
	const { allProducts, isLoading, error } = useProducts();
	if (isLoading) {
		return (
			<div className="flex min-h-[60vh] items-center justify-center">
				<Loader className="w-14 h-14 animate-spin" />
			</div>
		);
	}
	return (
		<div className="mx-auto max-w-7xl px-4 py-8">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{allProducts?.map((product) => {
					return <CardCarousel key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
