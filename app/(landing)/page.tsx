import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = ( ) => {
    return (
       <div className="h-full bg-[#111827]">
        <LandingNavbar />
        <LandingHero />
        <div>
            <Link href="/sign-in">
                <Button variant={"outline"}>
                    Login
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button variant={"outline"}>
                    Register
                </Button>
            </Link>
        </div>
       </div>
    );
}

export default LandingPage;