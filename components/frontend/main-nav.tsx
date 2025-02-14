import {
	Contact,
	Globe,
	Home,
	LayoutDashboardIcon,
	Menu,
	Search,
	User,
} from "lucide-react";
import React from "react";
import {
	CreditCard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	PlusCircle,
	Settings,
	Users,
} from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

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
				<div className="flex items-center justify-center w-10 h-10 border px-3 py-1 rounded-md cursor-pointer shadow-sm hover:shadow-md">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="bg-transparent outline-none border-none">
								<Menu className="" />
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>My Airbnb</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Home />
									<Link href={`/`}>
										<span>Home</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<User />
									<Link href={`/login`}>
										<span>Login</span>
									</Link>
								</DropdownMenuItem>

								<DropdownMenuItem>
									<CreditCard />
									<Link href={`/`}>
										<span>Pricing</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings />
									<Link href={`/`}>
										<span>Settings</span>
									</Link>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Users />
									<Link href={`/about`}>
										<span>About us</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>
										<Contact />
										<span>Contact us</span>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											<DropdownMenuItem>
												<Mail />
												<span> Via Email</span>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<MessageSquare />
												<span>Via Message</span>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem>
												<PlusCircle />
												<span>More...</span>
											</DropdownMenuItem>
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LayoutDashboardIcon />
								<Link href={`/dashboard`}>
									<span>Dashboard</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<LifeBuoy />
								<Link href={`/`}>
									<span>Support</span>
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut />
								<Link href={`/`}>
									<span>LogOut</span>
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	);
}
