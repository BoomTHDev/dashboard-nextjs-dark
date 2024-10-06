import { LucideIcon } from 'lucide-react'

export interface MenuList {
    title: string
    path: string
    Icon: LucideIcon
    subMenu?: boolean
    subMenuItem?: MenuList[]
}

export interface TableOneList {
    id: number
    Icon: LucideIcon
    name: string
    status: string
    amount: string
}

export interface TableTwoList {
    id: number
    image: string
    name: string
    status: string
    amount: string
}

export interface TableThreeList {
    package: string
    invoice_date: string
    status: string
}