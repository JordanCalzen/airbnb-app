import { Category, Product } from "@prisma/client";

const url = process.env.NEXT_PUBLIC_BASE_URL;
export async function fetchCategories() {
	try {
		const response = await fetch(`${url}/api/v1/categories`);
		const results = await response.json();
		console.log(results.data);
		return results.data as Category[];
	} catch (error) {
		console.log(error);
	}
}

export async function fetchProduct() {
	try {
		const response = await fetch(`${url}/api/v1/products`);
		const results = await response.json();
		console.log(results.data);
		return results.data as Product[];
	} catch (error) {
		console.log(error);
	}
}
