import { Button } from '@/components/ui/button';
import Link from 'next/link';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-700 text-white p-6">
                <div>
                    Placeholder
                </div>
            </div>
            <main className="md:pl-72 flex flex-col items-center justify-center h-screen bg-gray-900">
                <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8">
                    Website is currently under development. Come back soon!
                </div>
                <div className="text-center">
                    <Link href="https://forms.gle/4wsB7oDnjSXWr56d9" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="rounded-full">
                            Get Notified
                        </Button>
                    </Link>
                    <div className="mt-2 text-lg text-gray-300">
                        Sign up to be the first to know when our product launches.
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;