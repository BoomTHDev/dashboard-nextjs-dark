'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import MenuSide from './MenuSide'
import { MENU_LIST } from '@/MenuList'
import Image from 'next/image'
import SignOutBtn from './SignOutBtn'
import { useRecoilValue } from 'recoil'
import { sideNavState } from '../../../store/state/SideNav'

export default function Sidebar() {

    const sidebarOpen = useRecoilValue(sideNavState)

    return (
        <aside className={`${sidebarOpen ? 'translate-x-0' : 'translate-x-[-100%]'} fixed left-0 top-0 bottom-0 flex h-screen w-72 flex-col justify-between overflow-y-auto bg-neutral-800 text-neutral-100 transition-all duration-300`}>

            <div>
                {/* Sidebar Header */}
                <div className='text-center px-6 py-4 rounded-md border-b border-b-neutral-400'>
                    <Link href='/dashboard'>
                        <h1 className='text-2xl font-bold'>Your Logo</h1>
                    </Link>
                </div>
                {/* Sidebar Header */}

                {/* Profile */}
                <div className='flex items-center justify-center gap-2 p-4 border-b border-b-neutral-400'>
                    <div>
                        <Image
                            alt='profile'
                            src='/no-avatar.png'
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                        <h3 className='text-xl'>ชื่อ : Your name</h3>
                        <p className='text-sm'>ตำแหน่ง : Your role</p>
                    </div>
                </div>
                {/* Profile */}

                {/* Sidebar Menu */}
                <nav className='p-6'>
                    <div>
                        <h3 className='mb-4 ml-2 text-sm text-neutral-400'>Menu</h3>

                        <ul className='mb-6 flex flex-col gap-2'>
                            {MENU_LIST.map((menu, index) => {
                                return (
                                    <MenuSide
                                        key={index}
                                        title={menu.title}
                                        path={menu.path}
                                        Icon={menu.Icon}
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