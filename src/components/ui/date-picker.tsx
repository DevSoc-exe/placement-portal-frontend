"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({
    className, id, onChange
}: {
    className?: string;
    setFormData?: any;
    id: string;
    onChange: any;
}) {
    const [date, setDate] = React.useState<Date>()
    return (
        <Popover>
            <PopoverTrigger className={cn(className)} asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        cn("w-full justify-start text-left font-normal", className),
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    id={id}
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    onDayClick={onChange(date)}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
