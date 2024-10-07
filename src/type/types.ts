import { LucideIcon } from 'lucide-react'

export interface MenuList {
    title: string
    path: string
    Icon: LucideIcon
    badge?: boolean
    badgeText?: string
    subMenu?: boolean
    subMenuItem?: MenuList[]
}

export interface TableTwoList {
    id: number
    image: string
    name: string
    status: string
    amount: string
}

export interface TableUsersList {
    id: number
    image?: string
    name: string
    role: string
    email: string
    status: string
}


export interface CardList {
    Icon: LucideIcon
    title: string
    amount: string
    percent: string
    up: boolean
}