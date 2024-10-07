'use client'

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
    ArcElement,
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
            color: 'white',
        }
    }
}

const labels = ['Yes', 'No']

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [3, 6],
            backgroundColor: ['black', 'white'],
            borderColor: ['black', 'white'],
            borderWidth: 1
        }
    ]
}

export default function DonutChart() {
    return (
        <div className='bg-slate-800 p-4 rounded h-full w-full'>
            <div className='h-full w-full'>
                <Doughnut options={options} data={data} />
            </div>
        </div>
    )
}