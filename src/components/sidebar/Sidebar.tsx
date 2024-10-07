'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import MenuSide from './MenuSide'
import { MENU_LIST } from '@/list/MenuList'
import Image from 'next/image'
import SignOutBtn from './SignOutBtn'
import { useRecoilState } from 'recoil'
import { sideNavState } from '../../../store/state/SideNav'

export default function Sidebar() {

    const [sidebarOpen, setSidebarOpen] = useRecoilState(sideNavState)

    const closeSidebar = () => setSidebarOpen(false)

    return (
        
        // <aside className={`bg-slate-800 fixed inset-y-0 left-0 w-64 overflow-y-auto transition-all duration-300 ease-in-out transform ${sidebarOpen ? 'z-40 translate-x-0' : '-translate-x-full'} -translate-x-full lg:translate-x-0`}>
        <aside className={`hidden md:flex flex-col justify-between bg-slate-800 fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto transition-transform duration-300 ease-in-out transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
            <div>
                {/* Sidebar Header */}
                <div className='text-center px-6 py-4 rounded-md border-b border-b-slate-400 flex justify-between lg:justify-center items-center'>
                    <Link href='/dashboard'>
                        <h1 className='text-xl sm:text-2xl font-bold'>Your Logo</h1>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeSidebar} className="lg:hidden">
                        <X size={24} />
                    </Button>
                </div>
                {/* Sidebar Header */}

                {/* Profile */}
                <div className='flex items-center justify-center gap-2 p-4 border-b border-b-slate-400'>
                    <div>
                        <Image
                            alt='profile'
                            src='/no-avatar.png'
                            width={60}
                            height={60}
                            className='w-14 h-14 sm:w-16 sm:h-16'
                        />
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                        <h3 className='text-lg sm:text-xl'>ชื่อ : Your name</h3>
                        <p className='text-xs sm:text-sm'>ตำแหน่ง : Your role</p>
                    </div>
                </div>
                {/* Profile */}

                {/* Sidebar Menu */}
                <nav className='p-4 sm:p-6'>
                    <div>
                        <h3 className='mb-4 ml-2 text-xs sm:text-sm text-slate-400'>Menu</h3>

                        <ul className='mb-6 flex flex-col gap-2'>
                            {MENU_LIST.map((menu, index) => {
                                return (
                                    <MenuSide
                                        key={index}
                                        title={menu.title}
                                        path={menu.path}
                                        Icon={menu.Icon}
                                        badge={menu.badge}
                                        badgeText={menu.badgeText}
                                        subMenu={menu.subMenu}
                                        subMenuItem={menu.subMenuItem}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </nav>
                {/* Sidebar Menu */}
            </div>

            <SignOutBtn />
        </aside>
    )
}