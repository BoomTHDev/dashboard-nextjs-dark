import Cards from '@/components/card/Cards'
import LineChart from '@/components/chart/LineChart'
import BarChart from '@/components/chart/BarChart'
import DonutChart from '@/components/chart/DonutChart'
import TableProd from '@/components/table/TableProd'

export default function DashboardPage() {
    return (
        // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        //     <div className='col-span-5'>
        //         <Cards />
        //     </div>
        //     <div className='col-span-1 md:col-span-2 lg:col-span-3 h-[300px] md:h-[400px]'>
        //         <LineChart />
        //     </div>
        //     <div className='col-span-1 lg:col-span-2 h-[300px] md:h-[400px]'>
        //         <BarChart />
        //     </div>
        //     <div className='col-span-1 lg:col-span-2 h-[300px] md:h-[400px]'>
        //         <DonutChart />
        //     </div>
        //     <div className='col-span-1 lg:col-span-3 h-[300px] md:h-[400px]'>
        //         <TableProd />
        //     </div>
        // </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            <div className='col-span-full'>
                <Cards />
            </div>
            <div className='col-span-full lg:col-span-2 xl:col-span-3 h-[300px] sm:h-[400px]'>
                <LineChart />
            </div>
            <div className='col-span-full sm:col-span-1 lg:col-span-2 h-[300px] sm:h-[400px]'>
                <BarChart />
            </div>
            <div className='col-span-full sm:col-span-1 lg:col-span-2 h-[300px] sm:h-[400px]'>
                <DonutChart />
            </div>
            <div className='col-span-full lg:col-span-2 xl:col-span-3 h-[300px] sm:h-[400px]'>
                <TableProd />
            </div>
        </div>
    )
}