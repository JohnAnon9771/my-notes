import {useState} from 'react'

import {ChevronDown} from 'assets/icons'

import styles from './select.module.scss'

export default function Select(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('Português')

  return (
    <div
      className="flex flex-col gap-3 absolute bottom-3 right-3 w-3/4"
      onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false)
        }
      }}
    >
      {isOpen && (
        <div className={styles.dropdownContainer}>
          <ul className={styles.dropdownList}>
            <li className={styles.dropdownItem}>
              <button onClick={() => setValue('Português')}>Português</button>
            </li>
            <li className={styles.dropdownItem}>
              <button onClick={() => setValue('English')}>English</button>
            </li>
          </ul>
        </div>
      )}
      <div className="flex border-2 shadow-sm rounded-xl items-center relative">
        <span className="absolute px-2 -top-5 left-3 font-semibold text-gray-300 bg-white">
          Idioma
        </span>
        <span className="py-2 px-4">{value}</span>
        <button
          className="absolute right-3 focus:outline-none"
          onClick={() => setIsOpen(state => !state)}
        >
          <ChevronDown
            className={`transform transition ease-out duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>
    </div>
  )
}
