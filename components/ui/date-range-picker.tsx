"use client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerWithRangeProps {
	availableFrom: Date;
	availableTo: Date | undefined;
	setAvailableFrom: (date: Date) => void;
	setAvailableTo: (date: Date | undefined) => void;
}

export function DatePickerWithRange({
	availableFrom,
	availableTo,
	setAvailableFrom,
	setAvailableTo,
}: DatePickerWithRangeProps) {
	const dateRange: DateRange = {
		from: availableFrom,
		to: availableTo,
	};

	const setDateRange = (range: DateRange | undefined) => {
		setAvailableFrom(range?.from || new Date());
		setAvailableTo(range?.to);
	};

	return (
		<div className="grid gap-2">
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"w-[300px] justify-start text-left font-normal",
							!dateRange && "text-muted-foreground"
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{dateRange?.from ? (
							dateRange.to ? (
								<>
									{format(dateRange.from, "LLL dd, y")} -{" "}
									{format(dateRange.to, "LLL dd, y")}
								</>
							) : (
								format(dateRange.from, "LLL dd, y")
							)
						) : (
							<span>Pick a date range</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={availableFrom}
						selected={dateRange}
						onSelect={setDateRange}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
