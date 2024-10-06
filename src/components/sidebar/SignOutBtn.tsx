import { Button } from '@/components/ui/button'

export default function SignOutBtn() {
    return (
        <Button className='bg-red-800 hover:bg-red-900 text-neutral-100 hover:text-neutral-300 my-3 mx-5'>
            Logout
        </Button>
    )
}