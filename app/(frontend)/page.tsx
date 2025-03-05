"use client";
import CardCarousel from "@/components/frontend/carouselCard";
import { useProducts } from "../hooks/useProducts";

export default function page() {
	// const products = (await fetchProduct()) || [];
	const { allProducts, isLoading, error } = useProducts();
	if (isLoading) {
		return <h1>Loading...</h1>;
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
