import {useRouter} from 'next/dist/client/router'
import Link from 'next/link'

import {Setting, Time} from 'assets/icons'

import Select from './Select'

export default function Nav(): JSX.Element {
  const router = useRouter()
  const classActive = ['/', '/configuration'].map(route =>
    route === router.route ? 'active' : ''
  )

  return (
    <aside className="relative w-64 h-full flex flex-col justify-end">
      <nav className="navigation">
        <Link href="/">
          <a className={`navigation-item ${classActive[0] && 'active'}`}>
            <Time viewBox="0 0 24 24" height="32" width="32" />
            Rotina
          </a>
        </Link>
        <Link href="/configuration">
          <a className={`navigation-item ${classActive[1] && 'active'}`}>
            <Setting viewBox="0 0 24 24" height="32" width="32" />
            Configurações
          </a>
        </Link>
      </nav>
      <Select />
    </aside>
  )
}
