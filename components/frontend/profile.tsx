"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Bell,
	CreditCard,
	Heart,
	HelpCircle,
	History,
	LogOut,
	Settings,
	User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
	const [activeTab, setActiveTab] = useState("account");

	return (
		<div className="container mx-auto px-4 py-8 max-w-6xl">
			<div className="grid gap-8 md:grid-cols-[250px_1fr]">
				{/* Sidebar */}
				<aside className="space-y-6">
					<div className="flex items-center space-x-4">
						<Avatar className="w-16 h-16">
							<AvatarImage src="/placeholder.svg" alt="User" />
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<div>
							<h2 className="text-xl font-semibold">John Doe</h2>
							<p className="text-sm text-muted-foreground">Guest since 2024</p>
						</div>
					</div>

					<nav className="space-y-1">
						<Button
							variant={activeTab === "account" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("account")}
						>
							<User className="w-4 h-4 mr-2" />
							Account
						</Button>
						<Button
							variant={activeTab === "bookings" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("bookings")}
						>
							<History className="w-4 h-4 mr-2" />
							Bookings
						</Button>
						<Button
							variant={activeTab === "saved" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("saved")}
						>
							<Heart className="w-4 h-4 mr-2" />
							Saved
						</Button>
						<Button
							variant={activeTab === "notifications" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("notifications")}
						>
							<Bell className="w-4 h-4 mr-2" />
							Notifications
						</Button>
						<Button
							variant={activeTab === "payments" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("payments")}
						>
							<CreditCard className="w-4 h-4 mr-2" />
							Payments
						</Button>
						<Separator />
						<Button variant="ghost" className="w-full justify-start">
							<Settings className="w-4 h-4 mr-2" />
							Settings
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							<HelpCircle className="w-4 h-4 mr-2" />
							Help
						</Button>
						<Button
							variant="ghost"
							className="w-full justify-start text-destructive"
						>
							<LogOut className="w-4 h-4 mr-2" />
							Log out
						</Button>
					</nav>
				</aside>

				{/* Main Content */}
				<main>
					<Tabs value={activeTab} className="space-y-6">
						<TabsContent value="account">
							<Card>
								<CardHeader>
									<CardTitle>Account Information</CardTitle>
									<CardDescription>
										Manage your personal information and preferences
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="grid gap-2">
										<label className="text-sm font-medium">Full Name</label>
										<input
											type="text"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
											defaultValue="John Doe"
										/>
									</div>
									<div className="grid gap-2">
										<label className="text-sm font-medium">Email</label>
										<input
											type="email"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
											defaultValue="john@example.com"
										/>
									</div>
									<div className="grid gap-2">
										<label className="text-sm font-medium">Phone</label>
										<input
											type="tel"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
											defaultValue="+1 234 567 890"
										/>
									</div>
									<Button>Save Changes</Button>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="bookings">
							<Card>
								<CardHeader>
									<CardTitle>Your Bookings</CardTitle>
									<CardDescription>View and manage your trips</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										{[1, 2].map((booking) => (
											<div
												key={booking}
												className="flex gap-4 p-4 border rounded-lg"
											>
												<div className="relative w-32 h-24">
													<Image
														src="/placeholder.svg"
														alt="Property"
														fill
														className="rounded-lg object-cover"
													/>
												</div>
												<div className="flex-1">
													<h3 className="font-semibold">
														Luxury Villa in Bali
													</h3>
													<p className="text-sm text-muted-foreground">
														March 15-20, 2024
													</p>
													<Button variant="link" className="p-0 h-auto">
														View booking details
													</Button>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="saved">
							<Card>
								<CardHeader>
									<CardTitle>Saved Properties</CardTitle>
									<CardDescription>
										Properties you&apos;ve saved for later
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid gap-6 md:grid-cols-2">
										{[1, 2, 3, 4].map((property) => (
											<Link href="#" key={property} className="group">
												<div className="relative aspect-[4/3] mb-2">
													<Image
														src="/placeholder.svg"
														alt="Property"
														fill
														className="rounded-lg object-cover"
													/>
												</div>
												<h3 className="font-semibold group-hover:underline">
													Mountain Retreat
												</h3>
												<p className="text-sm text-muted-foreground">
													$200/night
												</p>
											</Link>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="notifications">
							<Card>
								<CardHeader>
									<CardTitle>Notifications</CardTitle>
									<CardDescription>
										Manage your notification preferences
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{[1, 2, 3].map((notification) => (
											<div
												key={notification}
												className="flex gap-4 p-4 border rounded-lg"
											>
												<Bell className="w-5 h-5" />
												<div>
													<p className="font-medium">New message from host</p>
													<p className="text-sm text-muted-foreground">
														2 hours ago
													</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="payments">
							<Card>
								<CardHeader>
									<CardTitle>Payment Methods</CardTitle>
									<CardDescription>
										Manage your payment information
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="flex items-center gap-4 p-4 border rounded-lg">
											<CreditCard className="w-8 h-8" />
											<div className="flex-1">
												<p className="font-medium">•••• •••• •••• 4242</p>
												<p className="text-sm text-muted-foreground">
													Expires 12/24
												</p>
											</div>
											<Button variant="outline">Edit</Button>
										</div>
										<Button>Add Payment Method</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</main>
			</div>
		</div>
	);
}
