import Link from 'next/link'
import {useRouter} from 'next/router'

import {SVGProps} from 'react'

import {Setting, Time} from 'assets/icons'

import styles from './aside.module.scss'
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
    <aside className={styles.aside}>
      <nav className={styles.navigation}>
        {route.map(({name, route, active, Icon}) => (
          <Link key={name} href={route}>
            <a className={active ? styles.active : styles.inactive}>
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
