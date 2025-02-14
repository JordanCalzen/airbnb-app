"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashBoard() {
	const [searchQuery, setSearchQuery] = React.useState("");

	return (
		<SidebarInset className="w-full">
			<div className="flex h-16 items-center gap-4 border-b px-4">
				<SidebarTrigger />
				<div className="flex-1">
					<Input
						placeholder="Search products..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="max-w-sm"
					/>
				</div>
				<Button variant="outline" size="icon">
					<span className="sr-only">Toggle theme</span>
					<Sun className="h-5 w-5" />
				</Button>
				<Button variant="outline" size="icon">
					<Plus className="h-5 w-5" />
					<span className="sr-only">Add new</span>
				</Button>
				<Avatar>
					<AvatarImage src="/placeholder.svg" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</SidebarInset>
	);
}

function Sun({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			{...props}
		>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2" />
			<path d="M12 20v2" />
			<path d="m4.93 4.93 1.41 1.41" />
			<path d="m17.66 17.66 1.41 1.41" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="m6.34 17.66-1.41 1.41" />
			<path d="m19.07 4.93-1.41 1.41" />
		</svg>
	);
}
