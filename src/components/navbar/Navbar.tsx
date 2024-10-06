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
        <nav className={`bg-neutral-800 text-gray-100 shadow-lg h-16 flex items-center justify-between gap-4 px-4 fixed top-0 right-0 left-0 z-10 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
            <div className='flex items-center gap-4'>
                <Button size={'icon'} variant={'ghost'} onClick={toggleSidebar}>
                    <Menu size={26} />
                </Button>
                <h1 className='text-2xl font-semibold'>Admin Management</h1>
            </div>
            <div>

                <Popover>
                    <PopoverTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="flex flex-col items-end">
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
                    <PopoverContent align='center' className="mr-6 mt-1 w-56 p-0 bg-neutral-700 text-gray-100 flex flex-col justify-between border-2 border-neutral-500">
                        <div>
                            <div className="space-y-2 hover:bg-neutral-600 px-4 py-2">
                                <Link href='/dashboard' className="flex items-center gap-1">
                                    <User2 />
                                    My Profile
                                </Link>
                            </div>
                            <div className="space-y-2 hover:bg-neutral-600 px-4 py-2">
                                <Link href='/dashboard' className="flex items-center gap-1">
                                    <Book />
                                    My Contact
                                </Link>
                            </div>
                            <div className="space-y-2 hover:bg-neutral-600 px-4 py-2">
                                <Link href='/dashboard' className="flex items-center gap-1">
                                    <Settings />
                                    Account Setting
                                </Link>
                            </div>
                        </div>
                        <Button className='bg-neutral-800 hover:bg-neutral-900 text-neutral-100 hover:text-neutral-300 my-3 mx-5'>
                            Logout
                        </Button>
                    </PopoverContent>
                </Popover>

            </div>
        </nav>

    )
}