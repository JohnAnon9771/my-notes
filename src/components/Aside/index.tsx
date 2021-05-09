import Link from 'next/link'
import {useRouter} from 'next/router'

import {Setting, Time} from 'assets/icons'

import Select from './Select'

export default function Aside(): JSX.Element {
  const router = useRouter()
  const classActive = ['/', '/configuration'].map(route =>
    route === router.route ? 'active' : ''
  )

  return (
    <aside className="relative w-64 h-full flex flex-col justify-end">
      <nav className="flex flex-col items-start gap-4 w-full h-5/6 text-2xl">
        <Link href="/">
          <a
            className={`navigation-item ${
              classActive[0] ? 'active' : 'hover:bg-gray-50'
            }`}
          >
            <Time viewBox="0 0 24 24" height="32" width="32" />
            Rotina
          </a>
        </Link>
        <Link href="/configuration">
          <a
            className={`navigation-item ${
              classActive[1] ? 'active' : 'hover:bg-gray-50'
            }`}
          >
            <Setting viewBox="0 0 24 24" height="32" width="32" />
            Configurações
          </a>
        </Link>
      </nav>
      <Select />
    </aside>
  )
}
