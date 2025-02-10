import { fetchSingleCategory } from "@/actions/fetch-category";
import { PropertyCard } from "@/components/frontend/property-card";
import { PackageX } from "lucide-react";
import React from "react";

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const category = await fetchSingleCategory(id);
	if (category?.products.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
				<PackageX className="w-24 h-24 text-gray-400 mb-4" />
				<h2 className="text-2xl font-semibold text-gray-700 mb-2">
					No Products Found
				</h2>
				<p className="text-gray-500 max-w-md">
					We couldn{"'"}t find any products in the &quot;{category.name}{" "}
					category. Please check back later or try a different category.
				</p>
			</div>
		);
	}
	return (
		<div className="mx-auto max-w-7xl px-4 py-8">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{category?.products.map((product) => {
					return <PropertyCard key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
