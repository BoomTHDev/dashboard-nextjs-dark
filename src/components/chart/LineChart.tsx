'use client'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'แก้ไขได้ที่ src/components/chart/LineChart.tsx',
            color: 'white'
        }
    }
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [2, 6, 3, 10, 5],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'Dataset 2',
            data: [3, 2, 9, 2, 7],
            borderColor: 'rgb(255, 99, 13)',
            backgroundColor: 'rgba(255, 99, 13, 0.5)'
        },
    ]
}

export default function LineChart() {

    return (
        <div className='bg-slate-800 p-4 rounded h-full w-full'>
            <div className='h-full w-full'>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}