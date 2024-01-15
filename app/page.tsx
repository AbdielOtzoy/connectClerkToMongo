import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 rounded-md">
      <div className='flex flex-center p-5 bg-red-400 cursor-pointer'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in'>Login</Link>
        </SignedOut>
      </div>
    </main>
  )
}
