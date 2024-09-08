import React, { ReactNode } from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing
import { Calendar, Briefcase, Settings, Users, FileText, BarChart, LogOut, Home } from 'lucide-react'; // Import Home icon or any other icon
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';

interface SidebarProps {
    children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-800 text-white p-6 w-72">
                <div className="flex-1">
                    <div className="mb-6">
                        <Image 
                            src="/HireAI logo -white.png" 
                            alt="HireAI Logo" 
                            width={150} 
                            height={50}  
                            priority
                        />
                    </div>
                    <nav className="space-y-4">
                        <Link href="/dashboard" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <Home size={20} />
                            <span>Dashboard</span>
                        </Link>
                        <Link href="/jobs" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <Briefcase size={20} />
                            <span>Jobs</span>
                        </Link>
                        <Link href="/calendar" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <Calendar size={20} />
                            <span>Calendar</span>
                        </Link>
                        <Link href="/candidates" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <Users size={20} />
                            <span>Candidates</span>
                        </Link>
                        <Link href="/resumes" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <FileText size={20} />
                            <span>Resume Analysis</span>
                        </Link>
                        <Link href="/analytics" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                            <BarChart size={20} />
                            <span>Analytics</span>
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center justify-between">
                    <Link href="/settings" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <Settings size={20} />
                        <span>Settings</span>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </div>
            <main className="md:pl-72 min-h-screen bg-gray-900">
                <div className="p-6 w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Sidebar;
