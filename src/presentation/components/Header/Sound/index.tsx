import {HTMLAttributes, useState} from 'react'

import {VolumeOn, VolumeOff} from 'assets/icons'

export default function Sound(
  props: HTMLAttributes<HTMLButtonElement>
): JSX.Element {
  const [isActive, setIsActive] = useState(false)

  return (
    <button {...props} onClick={() => setIsActive(state => !state)}>
      {isActive ? <VolumeOn /> : <VolumeOff />}
    </button>
  )
}
