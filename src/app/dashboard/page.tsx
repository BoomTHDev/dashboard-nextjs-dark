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
import { TABLE_ONE_LIST, TABLE_THREE_LIST, TABLE_TWO_LIST } from '@/TableList'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'


export default function DashboardPage() {
    return (
        <div className='flex flex-col gap-6 p-4 text-neutral-100'>

            <h1 className='text-3xl font-bold px-4'>Tables</h1>

            <div className='flex flex-col gap-14'>
                <div className='mx-16 px-12 py-4 border-2 border-neutral-300 rounded-md bg-neutral-800'>
                    <h3 className='text-2xl font-bold py-2'>Top Channels</h3>
                    <Table>
                        <TableCaption>แก้ไขข้อมูลได้ที่ <strong>src/TableList.tsx</strong></TableCaption>
                        <TableHeader>
                            <TableRow className='text-md'>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {TABLE_ONE_LIST.map((item, index) => (
                                <TableRow key={index} className='text-lg'>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>
                                        <div className='flex items-center gap-2'>
                                            <item.Icon size={30} className='border border-neutral-400 p-1 rounded-full' />
                                            {item.name}
                                        </div>
                                    </TableCell>
                                    <TableCell className='flex items-center'>{item.status === 'Active' ? (
                                        <div className='text-green-800 bg-green-300 px-2 py-1 rounded-xl text-center'>Active</div>
                                    ) : item.status === 'Pending' ? (
                                        <div className='text-yellow-800 bg-yellow-300 px-2 py-1 rounded-xl text-center'>Pending</div>
                                    ) : (
                                        <div className='text-red-800 bg-red-300 px-2 py-1 rounded-xl text-center'>Reject</div>
                                    )}</TableCell>
                                    <TableCell className="text-right">{item.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className='mx-16 px-12 py-4 border-2 border-neutral-300 rounded-md bg-neutral-800'>
                    <h3 className='text-2xl font-bold py-2'>Top Products</h3>
                    <Table>
                        <TableCaption>แก้ไขข้อมูลได้ที่ <strong>src/TableList.tsx</strong></TableCaption>
                        <TableHeader>
                            <TableRow className='text-md'>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {TABLE_TWO_LIST.map((item, index) => (
                                <TableRow key={index} className='text-lg'>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>
                                        <Image
                                            alt=''
                                            src={item.image}
                                            width={50}
                                            height={50}
                                            className='rounded-md overflow-hidden '
                                        />
                                    </TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell className='flex items-center'>{item.status === 'Active' ? (
                                        <div className='text-green-800 bg-green-300 px-2 py-1 rounded-xl text-center'>Active</div>
                                    ) : item.status === 'Pending' ? (
                                        <div className='text-yellow-800 bg-yellow-300 px-2 py-1 rounded-xl text-center'>Pending</div>
                                    ) : (
                                        <div className='text-red-800 bg-red-300 px-2 py-1 rounded-xl text-center'>Reject</div>
                                    )}</TableCell>
                                    <TableCell className="text-right">{item.amount}</TableCell>
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

                <div className='mx-16 px-12 py-4 border-2 border-neutral-300 rounded-md bg-neutral-800'>
                    <h3 className='text-2xl font-bold py-2'>Top Packages</h3>
                    <Table>
                        <TableCaption>แก้ไขข้อมูลได้ที่ <strong>src/TableList.tsx</strong></TableCaption>
                        <TableHeader>
                            <TableRow className='text-md'>
                                <TableHead>Package</TableHead>
                                <TableHead>Invoice date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {TABLE_THREE_LIST.map((item, index) => (
                                <TableRow key={index} className='text-lg'>
                                    <TableCell className="font-medium">{item.package}</TableCell>
                                    <TableCell>{item.invoice_date}</TableCell>
                                    <TableCell className='flex items-center'>{item.status === 'Active' ? (
                                        <div className='text-green-800 bg-green-300 px-2 py-1 rounded-xl text-center'>Active</div>
                                    ) : item.status === 'Pending' ? (
                                        <div className='text-yellow-800 bg-yellow-300 px-2 py-1 rounded-xl text-center'>Pending</div>
                                    ) : (
                                        <div className='text-red-800 bg-red-300 px-2 py-1 rounded-xl text-center'>Reject</div>
                                    )}</TableCell>
                                    <TableCell className="text-right space-x-2">
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

            </div>
        </div>
    )
}