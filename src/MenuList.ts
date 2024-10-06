import { Home } from 'lucide-react'
import { MenuList, TableThreeList } from './type/types'

export const MENU_LIST: MenuList[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        Icon: Home,
        subMenu: true,
        subMenuItem: [
            {
                title: 'Sub 1',
                path: '/dashboard',
                Icon: Home
            },
            {
                title: 'Sub 2',
                path: '/dashboard',
                Icon: Home
            }
        ]
    },
    {
        title: 'Dashboard 2',
        path: '/dashboard',
        Icon: Home,
        subMenu: true,
        subMenuItem: [
            {
                title: 'Sub 1',
                path: '/dashboard',
                Icon: Home
            },
            {
                title: 'Sub 2',
                path: '/dashboard',
                Icon: Home
            }
        ]
    },
    {
        title: 'Dashboard 3',
        path: '/dashboard',
        Icon: Home,
        subMenu: false,
    },
    {
        title: 'Dashboard 4',
        path: '/dashboard',
        Icon: Home,
        subMenu: false,
    },
    {
        title: 'Dashboard 5',
        path: '/dashboard',
        Icon: Home,
        subMenu: false,
    }
]
