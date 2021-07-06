import {useState} from 'react'

import {isValidEmail} from 'utils'

interface Props {
  type:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'text'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
    | 'textarea'
  name?: string
  label?: string
  id?: string
  placeholder?: string
}

export default function Input({type, name, id, label}: Props): JSX.Element {
  const [value, setValue] = useState('')

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        data-testid="input-field"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {type === 'email' && !isValidEmail(value) && (
        <span data-testid="input-error">Valor inválido</span>
      )}
    </div>
  )
}
