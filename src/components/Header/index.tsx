import Image from 'next/image'
import Link from 'next/link'

import {Github} from 'assets/icons'

import Sound from './Sound'

export default function Header(): JSX.Element {
  return (
    <header className="w-screen flex justify-between p-3">
      <Link href="/">
        <a className="flex items-center justify-center">
          <Image src="/logo.svg" width={64} height={64} />
          <h2 className="text-lg font-black">My Notes</h2>
        </a>
      </Link>
      <div className="flex items-center justify-center gap-2">
        <Sound className="bg-none border-none" />
        <a href="https://github.com/JohnAnon9771" about="link for author">
          <Github with="32" height="32" />
        </a>
      </div>
    </header>
  )
}
