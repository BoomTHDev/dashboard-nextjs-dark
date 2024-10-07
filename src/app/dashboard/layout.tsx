import Sidebar from '@/components/sidebar/Sidebar'
import ContentWrapper from '@/components/wrapper/ContentWrapper'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-slate-900 flex min-h-screen overflow-hidden'>
            <Sidebar />
            <ContentWrapper>{children}</ContentWrapper>
        </div>
    )
}