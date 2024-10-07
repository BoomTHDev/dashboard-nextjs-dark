import { CARD_LIST } from "@/list/CardList";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Cards() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {CARD_LIST.map((card, index) => (
                <div key={index} className='bg-slate-800 p-4 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                        <div className='p-2 bg-slate-900 rounded-full'>
                            <card.Icon size={20} />
                        </div>
                        <div>
                            <p className='text-lg sm:text-xl font-bold'>{card.amount}</p>
                            <h2 className='text-xs sm:text-sm text-slate-400'>{card.title}</h2>
                        </div>
                    </div>
                    <div className='mt-2 sm:mt-0'>
                        <p className={`text-xs sm:text-sm flex items-center gap-1 ${card.up ? 'text-green-500' : 'text-blue-500'}`}>
                            {card.percent}
                            {card.up ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}