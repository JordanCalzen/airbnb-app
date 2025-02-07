import { fetchCategories } from "@/actions/fetch-category";
import CategoryNav from "@/components/frontend/category-nav";
import Footer from "@/components/frontend/footer";
import MainNavbar from "@/components/frontend/main-nav";
import React, { ReactNode } from "react";

export default async function FrontendLayout({
	children,
}: {
	children: ReactNode;
}) {
	const categoryArray = (await fetchCategories()) || [];
	return (
		<div>
			<div className="sticky z-20 top-0">
				<MainNavbar />
				<CategoryNav categories={categoryArray} />
			</div>
			{children}
			<Footer />
		</div>
	);
}
