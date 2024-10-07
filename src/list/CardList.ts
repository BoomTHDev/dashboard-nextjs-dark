import { Eye, ShoppingBasket, ShoppingCart, User } from 'lucide-react'
import { CardList } from '../type/types'

export const CARD_LIST: CardList[] = [
    {
        Icon: Eye,
        title: 'Total views',
        amount: '$100.00K',
        percent: '0.43%',
        up: true
    },
    {
        Icon: ShoppingCart,
        title: 'Total Profit',
        amount: '$200.00K',
        percent: '4.35%',
        up: false
    },
    {
        Icon: ShoppingBasket,
        title: 'Total Products',
        amount: '2,406',
        percent: '0.43%',
        up: false
    },
    {
        Icon: User,
        title: 'Total Users',
        amount: '150',
        percent: '0.99%',
        up: true
    },
]