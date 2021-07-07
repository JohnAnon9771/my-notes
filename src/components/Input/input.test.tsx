import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {Input} from 'components'

describe('InputComponent', () => {
  const email = 'ndasdas2.com'

  beforeEach(() =>
    render(<Input type="email" name="email" id="email" label="Email" />)
  )

  it('should render correctly', () => {
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  it('should attribute value equals value received', () => {
    userEvent.type(screen.getByRole('textbox'), email)
    expect(screen.getByRole('textbox').getAttribute('value')).toBe(email)
  })

  it('should show an error with email incorrect', () => {
    userEvent.type(screen.getByRole('textbox'), email)
    expect(screen.getByText('Email inválido').hidden).toBeFalsy()
  })

  it('should not show an error with email correct', () => {
    const email = 'anything@gmail.com'
    userEvent.type(screen.getByRole('textbox'), email)
    expect(screen.getByText('Email inválido').hidden).toBeTruthy()
  })
})
