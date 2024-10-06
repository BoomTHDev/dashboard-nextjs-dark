import { useState } from 'react'
import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'

type MenuSideProps = {
    title: string
    path: string
    Icon: LucideIcon
    subMenu?: boolean
    subMenuItem?: MenuSideProps[]
}

export default function MenuSide({ title, path, Icon, subMenu, subMenuItem }: MenuSideProps) {

    const [open, setOpen] = useState(false)

    const toggleOpen = () => setOpen(!open)

    return (
        <li>
            {subMenu ? (
                <>
                    <button onClick={toggleOpen} className='w-full flex items-center px-4 py-2 transition-all duration-300 hover:bg-neutral-600 rounded-lg'>

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
                            <Link key={index} href={subMenu.path} className='flex items-center gap-2 px-10 py-2 duration-300 ease-in-out hover:bg-neutral-600 hover:text-neutral-200 rounded-lg'>
                                <subMenu.Icon size={16} />
                                {subMenu.title}
                            </Link>
                        ))}

                    </div>
                </>



            ) : (
                <Link href={path} className='flex items-center gap-2 px-4 py-2 duration-300 ease-in-out hover:bg-neutral-600'>
                    <Icon />
                    <span className='font-medium'>{title}</span>
                </Link>
            )
            }
        </li >
    )
}