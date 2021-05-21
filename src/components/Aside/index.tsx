import Link from 'next/link'
import {useRouter} from 'next/router'

import {SVGProps} from 'react'

import {Setting, Time} from 'assets/icons'

import Select from './Select'

interface Routes {
  route: string
  active: boolean
  name: string
  Icon: (props: SVGProps<SVGElement>) => React.ReactElement
}

const routes: Routes[] = [
  {
    route: '/',
    active: false,
    name: 'Rotina',
    Icon: Time,
  },
  {
    route: '/configuration',
    active: false,
    name: 'Configurações',
    Icon: Setting,
  },
]

export default function Aside(): JSX.Element {
  const router = useRouter()
  const route = routes.map(route =>
    router.route === route.route ? {...route, active: true} : {...route}
  )

  return (
    <aside className="relative w-64 h-full hidden lg:flex flex-col justify-end">
      <nav className="flex flex-col items-start gap-4 w-full h-5/6 text-2xl">
        {route.map(({name, route, active, Icon}) => (
          <Link key={name} href={route}>
            <a
              className={`navigation-item ${
                active ? 'bg-primary text-white' : 'hover:bg-gray-50'
              }`}
            >
              <Icon />
              {name}
            </a>
          </Link>
        ))}
      </nav>
      <Select />
    </aside>
  )
}
