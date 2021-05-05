import {useRouter} from 'next/dist/client/router'
import Link from 'next/link'

import {Setting, Time} from 'assets/icons'

import Select from './Select'
import * as S from './style'

export default function Nav(): JSX.Element {
  const router = useRouter()
  const classActive = ['/', '/configuration'].map(route =>
    route === router.route ? 'active' : ''
  )

  return (
    <S.Aside>
      <S.Nav>
        <Link href="/">
          <a className={classActive[0]}>
            <Time viewBox="0 0 24 24" height="32" width="32" />
            Rotina
          </a>
        </Link>
        <Link href="/configuration">
          <a className={classActive[1]}>
            <Setting viewBox="0 0 24 24" height="32" width="32" />
            Configurações
          </a>
        </Link>
      </S.Nav>
      <Select />
    </S.Aside>
  )
}
