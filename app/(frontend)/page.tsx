import { fetchCategories, fetchProduct } from "@/actions/fetch-category";
import CategoryNav from "@/components/frontend/category-nav";
import MainNavbar from "@/components/frontend/main-nav";
import { PropertyCard } from "@/components/frontend/property-card";
import { PropertyGrid } from "@/components/frontend/property-grid";
import React from "react";

export default async function Home() {
	const categoryArray = (await fetchCategories()) || [];

	const propertyArray = (await fetchProduct()) || [];
	return (
		<div>
			<div className="sticky z-20 top-0">
				<MainNavbar />
				<CategoryNav categories={categoryArray} />
			</div>
			<PropertyGrid properties={propertyArray} />
		</div>
	);
}
