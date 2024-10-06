import Sidebar from '@/components/sidebar/Sidebar'
import ContentWrapper from '@/components/wrapper/ContentWrapper'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-neutral-700 flex min-h-screen'>
            <Sidebar />
            <ContentWrapper>{children}</ContentWrapper>
        </div>
    )
}