import { Globe, Menu, Search, User } from "lucide-react";
import React from "react";

export default function MainNavbar() {
	return (
		<nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white border-b-2">
			<div className="text-2xl font-bold text-pink-500">airbnb</div>
			<div className="hidden md:flex items-center border rounded-full px-4 py-2 gap-2 shadow-sm hover:shadow-md cursor-pointer">
				<span>Anywhere</span>
				<span>|</span>
				<span>Any week</span>
				<span>|</span>
				<span>Add guests</span>
				<Search className="text-pink-500" />
			</div>
			<div className="flex items-center gap-4">
				<span className="hidden md:block">Airbnb your home</span>
				<Globe className="text-xl cursor-pointer" />
				<div className="flex items-center border px-3 py-1 rounded-full cursor-pointer shadow-sm hover:shadow-md">
					<Menu className="mr-2" />
					<User />
				</div>
			</div>
		</nav>
	);
}
