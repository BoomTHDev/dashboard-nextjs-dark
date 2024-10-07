'use client'

import { useRecoilValue } from "recoil";
import Navbar from "../navbar/Navbar";
import { sideNavState } from "../../../store/state/SideNav";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {

    const sidebarOpen = useRecoilValue(sideNavState)

    return (
        <div className={`w-full flex flex-col transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'} flex-1`}>
            <Navbar />
            <div className='px-4 sm:px-8 md:px-16 py-4 mt-16 flex-1'>
                {children}
            </div>
        </div>
    )
}