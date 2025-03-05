import DetailPage from "@/components/frontend/property-detail";
import React from "react";

export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div>
			<DetailPage id={id} />
		</div>
	);
}
