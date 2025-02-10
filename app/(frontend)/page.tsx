import { fetchProduct } from "@/actions/fetch-category";
import CardCarousel from "@/components/frontend/carouselCard";

export default async function page() {
	const products = (await fetchProduct()) || [];
	return (
		<div className="mx-auto max-w-7xl px-4 py-8">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{products?.map((product) => {
					return <CardCarousel key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
}
