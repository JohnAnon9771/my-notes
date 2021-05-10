import Image from 'next/image'
import Link from 'next/link'

import {Github} from 'assets/icons'

import Sound from './Sound'

export default function Header(): JSX.Element {
  return (
    <header className="p-5 flex justify-between items-center md:p-3">
      <button className="lg:hidden shadow-sm h-7 w-7 rounded-md">
        <span className="h-4 bg-primary w-2" />
        <span></span>
      </button>
      <Link href="/">
        <a className="hidden lg:flex items-center justify-center">
          <div className="">
            <Image src="/logo.svg" width={64} height={64} />
          </div>
          <h2 className="text-lg font-black">My Notes</h2>
        </a>
      </Link>
      <div className="flex items-center justify-center gap-2">
        <p className="font-bold text-sm text-gray-300 uppercase tracking-widest">
          JohnAnon9771
        </p>
        <img
          className="rounded-full w-7 h-7 object-cover "
          src="/images/profile.jpg"
          alt="profile"
        />
      </div>
    </header>
  )
}
