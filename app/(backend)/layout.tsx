import SideBar from "@/components/backend-components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getSession } from "@/lib/dal";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function DashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	const user = await getSession();
	if (!user) {
		redirect("/login");
	}
	return (
		<SidebarProvider>
			<div
				className='flex w-full min-h-screen overflow-hidden">
        <div className="flex-shrink-0'
			>
				<div className="flex-shrink-0">
					<SideBar />
				</div>

				<main className=" md:flex-grow">{children}</main>
			</div>
		</SidebarProvider>
	);
}
