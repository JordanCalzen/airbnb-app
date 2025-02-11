import { fetchSingleProduct } from "@/actions/fetch-category";
import DetailPage from "@/components/frontend/property-detail";
import React from "react";

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const property = await fetchSingleProduct(id);
	return (
		<div>
			<DetailPage property={property} />
		</div>
	);
}
