import {ChevronDown} from 'assets/icons'

import * as S from './style'

export default function Select(): JSX.Element {
  return (
    <S.Select>
      <div className="custom-select">
        <span className="label">Idioma</span>
        <button className="btn">
          <ChevronDown />
        </button>
      </div>
      <div className="custom-dropdown">
        <option value="pt-BR">Português</option>
        <option value="en-US">English</option>
      </div>
    </S.Select>
  )
}
