import {useState} from 'react'

import {ChevronDown} from 'assets/icons'

import styles from './select.module.scss'

export default function Select(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('Português')

  return (
    <div
      className={styles.container}
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
      <div className={styles.select}>
        <span className={styles.selectLabel}>Idioma</span>
        <span className={styles.selectValue}>{value}</span>
        <button
          className={styles.selectBtn}
          onClick={() => setIsOpen(state => !state)}
        >
          <ChevronDown className={isOpen ? styles.rotate : ''} />
        </button>
      </div>
    </div>
  )
}
