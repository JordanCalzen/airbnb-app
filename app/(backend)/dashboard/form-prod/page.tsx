import { fetchCategories } from "@/actions/fetch-category";
import AirbnbListingForm from "@/components/airbnb-listing-form";
import React from "react";

export default async function ProductFormPage() {
	const categoryArray = (await fetchCategories()) || [];
	console.log(categoryArray);
	return (
		<div>
			<AirbnbListingForm category={categoryArray} />
		</div>
	);
}
