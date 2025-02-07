import Link from "next/link";
import { Globe, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t bg-gray-100">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
					{/* Support Section */}
					<div>
						<h3 className="text-sm font-semibold">Support</h3>
						<ul className="mt-4 space-y-4">
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									AirCover
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Anti-discrimination
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Disability support
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Cancellation options
								</Link>
							</li>
						</ul>
					</div>

					{/* Hosting Section */}
					<div>
						<h3 className="text-sm font-semibold">Hosting</h3>
						<ul className="mt-4 space-y-4">
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Airbnb your home
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									AirCover for Hosts
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Hosting resources
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Community forum
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Hosting responsibly
								</Link>
							</li>
						</ul>
					</div>

					{/* Airbnb Section */}
					<div>
						<h3 className="text-sm font-semibold">Airbnb</h3>
						<ul className="mt-4 space-y-4">
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Newsroom
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									New features
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Investors
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Gift cards
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal Section */}
					<div>
						<h3 className="text-sm font-semibold">Legal</h3>
						<ul className="mt-4 space-y-4">
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-gray-500 hover:underline"
								>
									Site Map
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-8 border-t border-gray-200 pt-8">
					<div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
						{/* Copyright and Links */}
						<div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
							<div className="flex space-x-4 text-sm text-gray-500">
								<span>© 2024 Airbnb, Inc.</span>
								<span>·</span>
								<Link href="#" className="hover:underline">
									Terms
								</Link>
								<span>·</span>
								<Link href="#" className="hover:underline">
									Privacy
								</Link>
							</div>
						</div>

						{/* Language, Currency, and Social */}
						<div className="flex items-center space-x-6">
							<button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-600">
								<Globe className="h-5 w-5" />
								<span>English (US)</span>
							</button>
							<div className="flex space-x-4">
								<Link href="#" className="text-gray-500 hover:text-gray-600">
									<Facebook className="h-5 w-5" />
									<span className="sr-only">Facebook</span>
								</Link>
								<Link href="#" className="text-gray-500 hover:text-gray-600">
									<Twitter className="h-5 w-5" />
									<span className="sr-only">Twitter</span>
								</Link>
								<Link href="#" className="text-gray-500 hover:text-gray-600">
									<Instagram className="h-5 w-5" />
									<span className="sr-only">Instagram</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
