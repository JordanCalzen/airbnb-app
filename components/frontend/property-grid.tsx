import { Product } from "@prisma/client";
import { PropertyCard } from "./property-card";

export function PropertyGrid({ properties }: { properties: Product[] }) {
	return (
		<div className="mx-auto max-w-7xl px-4 py-8">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{properties.map((property) => (
					<PropertyCard key={property.id} property={property} />
				))}
			</div>
		</div>
	);
}
