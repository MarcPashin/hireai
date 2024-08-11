import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 text-white">
        <div>Placeholder</div>
      </div>
      <main className="md:pl-72 flex items-center justify-center h-screen">
        <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black">
          Website is currently under development. Come back soon!
        </div>
        <div className="mt-8">
          <Link href="https://your-google-form-link.com">
            <Button variant="outline" className="rounded-full">
              Get Notified
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
