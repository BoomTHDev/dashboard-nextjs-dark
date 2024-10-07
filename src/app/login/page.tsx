import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 px-4">
      <Card className="w-full max-w-4xl overflow-hidden bg-slate-800 border-slate-700">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2 p-6 md:p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Sign In</CardTitle>
              <CardDescription className="text-slate-300">Enter your email and password to sign in</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">Email</Label>
                  <Input 
                    className="bg-slate-700 text-white border-slate-600 focus:border-slate-400" 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-200">Password</Label>
                  <Input 
                    className="bg-slate-700 text-white border-slate-600 focus:border-slate-400" 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password" 
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-slate-200">Remember me</Label>
                </div>
                <Button className="w-full">Sign In</Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="#" className="text-sm text-blue-400 hover:underline">
                Forgot Password?
              </Link>
            </CardFooter>
          </div>

            <Image
              src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Login'
              width={500}
              height={500}
              className="object-cover hidden lg:block"
            />

        </div>
      </Card>
    </div>
  )
}