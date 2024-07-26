"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const LandingNavbar = 
() => {
    

    return (
        <nav className="bg-[#111827] p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center bg-[#111827]">
            <div className="relative h-8 w-8 mr-4 bg-[#111827]">
                
            </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                    HireAI
                </h1>
            </Link>

            <div className="flex items-center gap-x-2">
                <Button variant="outline" className="rounded-full">
                    Get Started
                </Button>
            </div>
        </nav>
    )
}

