import { useState } from 'react'
import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'

type MenuSideProps = {
    title: string
    path: string
    Icon: LucideIcon
    badge?: boolean
    badgeText?: string
    subMenu?: boolean
    subMenuItem?: MenuSideProps[]
}

export default function MenuSide({ title, path, Icon, badge, badgeText, subMenu, subMenuItem }: MenuSideProps) {

    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open)

    return (
        <li>
            {subMenu ? (
                <>
                    <button onClick={toggleOpen} className='w-full flex items-center px-4 py-2 transition-all duration-300 hover:bg-slate-600 rounded-lg'>

                        <div className='flex items-center justify-between w-full'>

                            <div className='flex items-center gap-2'>
                                <Icon />
                                <span className='font-medium'>{title}</span>
                            </div>

                        </div>

                        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </button>



                    <div className='flex flex-col'>

                        {open && subMenuItem?.map((subMenu, index) => (
                            <Link key={index} href={subMenu.path} className='flex items-center justify-between gap-2 px-10 py-2 duration-300 ease-in-out hover:bg-slate-600 hover:text-slate-200 rounded-lg'>
                                <div className='flex items-center gap-2'>
                                    <subMenu.Icon size={16} />
                                    {subMenu.title}
                                </div>
                                {subMenu.badge && (
                                    <div className='flex items-center justify-center px-2 py-1 text-xs text-neutral-100 bg-slate-700 rounded-md'>
                                        {subMenu.badgeText}
                                    </div>
                                )}
                            </Link>
                        ))}

                    </div>
                </>



            ) : (
                <Link href={path} className='flex items-center justify-between gap-2 px-4 py-2 duration-300 ease-in-out hover:bg-slate-600'>
                    <div className='flex items-center gap-2'>
                        <Icon />
                        <span className='font-medium'>{title}</span>
                    </div>

                    {badge && (
                        <div className='flex items-center justify-center px-2 py-1 text-xs text-neutral-100 bg-slate-700 rounded-md'>
                            {badgeText}
                        </div>
                    )}
                </Link>
            )
            }
        </li >
    )
}