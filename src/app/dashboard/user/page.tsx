import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { TABLE_USERS_LIST } from '@/list/TableList'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'

export default function UserPage() {
    return (
        <div className='px-3 py-4 rounded-md bg-slate-800 overflow-auto border-2 border-slate-400'>
            <h3 className='text-lg font-bold py-2 sticky top-0 bg-slate-800 z-10'>Top Products</h3>
            <Table>
                <TableCaption>แก้ไขข้อมูลได้ที่ <strong>src/TableList.tsx</strong></TableCaption>
                <TableHeader>
                    <TableRow className='text-md'>
                        <TableHead className='w-[50px]'>ID</TableHead>
                        <TableHead className='w-[80px]'>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {TABLE_USERS_LIST.map((item, index) => (
                        <TableRow key={index} className='text-md'>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>
                                <Image
                                    alt=''
                                    src={item.image || '/no-avatar.png'}
                                    width={40}
                                    height={40}
                                    className='rounded-md overflow-hidden w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]'
                                />
                            </TableCell>
                            <TableCell className="max-w-[100px] sm:max-w-none truncate">{item.name}</TableCell>
                            <TableCell>
                                <div className='flex items-center'>
                                    {item.status === 'Active' ? (
                                        <div className='text-green-800 bg-green-300 px-2 py-1 rounded-xl text-center text-xs sm:text-sm'>Active</div>
                                    ) : item.status === 'Pending' ? (
                                        <div className='text-yellow-800 bg-yellow-300 px-2 py-1 rounded-xl text-center text-xs sm:text-sm'>Pending</div>
                                    ) : (
                                        <div className='text-red-800 bg-red-300 px-2 py-1 rounded-xl text-center text-xs sm:text-sm'>Reject</div>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">{item.role}</TableCell>
                            <TableCell className="justify-end flex items-center gap-2 ">
                                <Button variant={'outline'}>
                                    <Edit size={14} />
                                </Button>
                                <Button>
                                    <Trash size={14} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}