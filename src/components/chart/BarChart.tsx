'use client'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'แก้ไขได้ที่ src/components/chart/BarChart.tsx',
            color: 'white'
        }
    }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [4, 2, 2, 3, 5],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'Dataset 2',
            data: [1, 1.6, 8, 6, 3],
            backgroundColor: 'rgba(120, 80, 240, 0.6)'
        }
    ]
}

export default function BarChart() {
    return (
        <div className='bg-slate-800 p-4 rounded h-full w-full'>
            <h1 className='text-white text-base sm:text-lg font-semibold mb-2'>Profit this week</h1>
            <div className='h-[calc(100%-2rem)]'>
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}