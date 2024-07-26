"use client";

import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
export const LandingHero = () => {
    return (
        <div className="text-white font-bold py-36 text-ceter space-y-5">
            <div className = "text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>The Best Solution for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                    options={{
                        strings: [
                            "Resume Screening",
                            "Automated Outreach",
                            "Scheduling Interviews",
                            "Managing Applicants",
                            "AI Interviews",

                        ],
                        autoStart: true,
                        loop: true
                    }}
                    />

                </div>
            </div>
            <div className="text-center text-sm md:text-xl font-light text-zinc-400">
                Create content using AI 10x faster.
            </div>
            <div>
                <Button variant="destructive" className="justify-center items-center md:text-lg p-4 md:p-6 rounded-full font-semibold">
                    Try it for free
                </Button>
            </div>
        </div>
    )
}
