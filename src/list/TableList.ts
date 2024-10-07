import { TableOneList, TableThreeList, TableTwoList } from '@/type/types'
import { Facebook, Linkedin, Twitter } from 'lucide-react'

export const TABLE_ONE_LIST: TableOneList[] = [
    {
        id: 1,
        Icon: Facebook,
        name: 'BoomTH',
        status: 'Active',
        amount: '$250.00'
    },
    {
        id: 2,
        Icon: Linkedin,
        name: 'KobDemy',
        status: 'Reject',
        amount: '$500.00'
    },
    {
        id: 3,
        Icon: Twitter,
        name: 'Petch',
        status: 'Pending',
        amount: '$500.00'
    }
]

export const TABLE_TWO_LIST: TableTwoList[] = [
    {
        id: 1,
        image: '/no-avatar.png',
        name: 'iPhone 20 Promax',
        status: 'Active',
        amount: '$45000.00'
    },
    {
        id: 2,
        image: '/no-avatar.png',
        name: 'Samsung S30 Super Ultra',
        status: 'Pending',
        amount: '$30000.00'
    }
]


export const TABLE_THREE_LIST: TableThreeList[] = [
    {
        package: 'Package 1',
        invoice_date: '2022-01-01',
        status: 'Active',
    },
    {
        package: 'Package 2',
        invoice_date: '2022-01-02',
        status: 'Pending',
    },
    {
        package: 'Package 3',
        invoice_date: '2022-01-02',
        status: 'Reject',
    },
]