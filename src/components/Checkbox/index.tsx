import {useState} from 'react'

import styles from './checkbox.module.scss'

interface Props {
	label?: string
}

export default function Checkbox({label}: Props): JSX.Element {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<label htmlFor="checkbox" className={styles.checkbox}>
			<input
				className={styles.checkboxInput}
				type="checkbox"
				name="checkbox input"
				id="checkbox"
				onChange={() => setIsChecked(state => !state)}
			/>
			{label}
		</label>
	)
}
