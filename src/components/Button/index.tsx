import {HTMLAttributes} from 'react'

import * as S from './style'

export default function Button({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>): JSX.Element {
  return <S.Button {...props}>{children}</S.Button>
}
