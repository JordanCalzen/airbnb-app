import { fetchCategories, fetchProduct } from "@/actions/fetch-category";
import CategoryNav from "@/components/frontend/category-nav";
import MainNavbar from "@/components/frontend/main-nav";
import { PropertyGrid } from "@/components/frontend/property-grid";
import React from "react";

export default async function Home() {
	const propertyArray = (await fetchProduct()) || [];
	return (
		<div>
			<PropertyGrid properties={propertyArray} />
		</div>
	);
}
