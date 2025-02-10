import { Category, Product } from "@prisma/client";

const url = process.env.NEXT_PUBLIC_BASE_URL;
export async function fetchCategories() {
	try {
		const response = await fetch(`${url}/api/v1/categories`, {
			cache: "no-store",
		});
		const results = await response.json();
		return results.data as Category[];
	} catch (error) {
		console.log(error);
	}
}

export async function fetchSingleCategory(id: string) {
	try {
		const response = await fetch(`${url}/api/v1/categories/${id}`, {
			cache: "no-store",
		});
		const results = await response.json();
		console.log(results.data);
		return results.data as Category & { products: Product[] };
	} catch (error) {
		console.log(error);
	}
}

// export async function fetchProduct() {
// 	try {
// 		const response = await fetch(`${url}/api/v1/products`, {
// 			cache: "no-store",
// 		});
// 		const results = await response.json();
// 		return results.data as Product[];
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
