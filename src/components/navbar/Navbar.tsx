'use client'

import { Book, Menu, Settings, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { useRecoilState } from "recoil";
import { sideNavState } from "../../../store/state/SideNav";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'
import Link from "next/link";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sideNavState)

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    return (
        <nav className={`bg-slate-800 text-slate-100 shadow-lg h-16 flex items-center justify-between gap-4 px-4 fixed top-0 right-0 left-0 z-30 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
            <div className='flex items-center gap-4'>
                <Button size={'icon'} variant={'ghost'} onClick={toggleSidebar}>
                    <Menu size={26} />
                </Button>
                <h1 className='text-xl sm:text-2xl font-semibold ml-8 lg:ml-0'>Admin Management</h1>
            </div>
            <div>
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="hidden sm:flex flex-col items-end">
                                <h2>BoomTH</h2>
                                <p className="text-xs">UX/UI Designer</p>
                            </div>
                            <Image
                                alt=''
                                src='/no-avatar.png'
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent align='end' className="mr-6 mt-1 w-56 p-0 bg-slate-700 text-slate-100 flex flex-col justify-between border-2 border-slate-500">
                        <div>
                            <div className="space-y-2 hover:bg-slate-600 px-4 py-2">
                                <Link href='/dashboard' className="flex items-center gap-1">
                                    <User2 />
                                    My Profile
                                </Link>
                            </div>
                            <div className="space-y-2 hover:bg-slate-600 px-4 py-2">
                                <Link href='/dashboard' className="flex items-center gap-1">
                                    <Book />
                                    My Contact
                                </Link>
                            </div>
                            <div className="space-y-2 hover:bg-slate-600 px-4 py-2">
                                <Link href='/dashboard' className="flex items-center gap-1">
                                    <Settings />
                                    Account Setting
                                </Link>
                            </div>
                        </div>
                        <Button className='bg-slate-800 hover:bg-slate-900 text-slate-100 hover:text-slate-300 my-3 mx-5'>
                            Logout
                        </Button>
                    </PopoverContent>
                </Popover>
            </div>
        </nav>
    )
}