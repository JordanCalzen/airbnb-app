"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
	className?: string;
	message?: string;
}

export default function Loader({
	className,
	message = "Loading...",
}: LoaderProps) {
	return (
		<div
			className={cn(
				"fixed inset-0 z-50 flex items-center justify-center",
				"bg-background/80 backdrop-blur-sm",
				className
			)}
		>
			<div className="flex flex-col items-center justify-center space-y-4">
				<Loader2
					className="h-12 w-12 animate-spin text-primary"
					aria-label="Loading"
				/>
				<p className="text-muted-foreground text-sm">{message}</p>
			</div>
		</div>
	);
}
