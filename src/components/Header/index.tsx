import Image from 'next/image'
import Link from 'next/link'

import {Github} from 'assets/icons'

import Sound from './Sound'
import * as S from './style'

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <Link href="/">
        <a className="header brand">
          <Image src="/logo.svg" width={64} height={64} />
          <h2>My Notes</h2>
        </a>
      </Link>
      <div className="header actions">
        <Sound className="actions__sound" />
        <a href="https://github.com/JohnAnon9771" about="link for author">
          <Github with="32" height="32" />
        </a>
      </div>
    </S.Header>
  )
}
