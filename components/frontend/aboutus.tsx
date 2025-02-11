import Image from "next/image";
import { Globe, Heart, Home, Shield, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-7xl">
			{/* Hero Section */}
			<section className="text-center py-12 md:py-24">
				<h1 className="text-4xl md:text-6xl font-bold mb-6">About Airbnb</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					Airbnb began in 2008 when two designers who had space to share hosted
					three travelers looking for a place to stay.
				</p>
			</section>

			{/* Stats Section */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
				<div className="text-center">
					<p className="text-4xl font-bold mb-2">4M+</p>
					<p className="text-muted-foreground">Hosts on Airbnb</p>
				</div>
				<div className="text-center">
					<p className="text-4xl font-bold mb-2">1.4B+</p>
					<p className="text-muted-foreground">Guest arrivals</p>
				</div>
				<div className="text-center">
					<p className="text-4xl font-bold mb-2">220+</p>
					<p className="text-muted-foreground">Countries and regions</p>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-12">
				<h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card>
						<CardContent className="pt-6">
							<div className="text-center">
								<div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<Home className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-2">Belong Anywhere</h3>
								<p className="text-muted-foreground">
									We believe in creating a world where anyone can belong
									anywhere.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="pt-6">
							<div className="text-center">
								<div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<Heart className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-2">Community First</h3>
								<p className="text-muted-foreground">
									Our community is built on trust, safety, and mutual respect.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="pt-6">
							<div className="text-center">
								<div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<Globe className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-2">Global Diversity</h3>
								<p className="text-muted-foreground">
									We celebrate diversity and promote cultural exchange
									worldwide.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-12">
				<h2 className="text-3xl font-bold text-center mb-12">
					Our Leadership Team
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{[1, 2, 3].map((i) => (
						<div key={i} className="text-center">
							<div className="relative w-32 h-32 mx-auto mb-4">
								<Image
									src="/placeholder.svg"
									alt={`Team member ${i}`}
									fill
									className="rounded-full object-cover"
								/>
							</div>
							<h3 className="text-xl font-semibold">John Doe</h3>
							<p className="text-muted-foreground">Co-founder & CEO</p>
						</div>
					))}
				</div>
			</section>

			{/* Trust & Safety Section */}
			<section className="py-12 bg-muted rounded-xl px-8 my-12">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Trust & Safety
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex gap-4">
							<Shield className="w-8 h-8 text-primary flex-shrink-0" />
							<div>
								<h3 className="font-semibold mb-2">Guest Protection</h3>
								<p className="text-muted-foreground">
									Every booking is covered by our guest refund policy for a
									peace of mind stay.
								</p>
							</div>
						</div>
						<div className="flex gap-4">
							<Users className="w-8 h-8 text-primary flex-shrink-0" />
							<div>
								<h3 className="font-semibold mb-2">24/7 Support</h3>
								<p className="text-muted-foreground">
									Our global support team is standing by 24/7 to help with any
									questions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-12 text-center">
				<h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
				<p className="text-muted-foreground mb-8">
					Have questions? We&apos;d love to hear from you.
				</p>
				<Button size="lg">Contact Us</Button>
			</section>
		</div>
	);
}
