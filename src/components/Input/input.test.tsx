import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {Input} from 'components'

describe('InputComponent', () => {
  beforeEach(() =>
    render(<Input type="email" name="email" id="email" label="Email" />)
  )

  it('should render correctly', () => {
    expect(screen.findAllByTestId('input-field')).toBeTruthy()
  })

  it('should attribute value equals value received', () => {
    const email = 'ndasdas2.com'
    userEvent.type(screen.getByTestId('input-field'), email)
    const value = screen.getByTestId('input-field').getAttribute('value')

    expect(value).toBe(email)
  })

  it('should show an error with email incorrect', () => {
    userEvent.type(screen.getByTestId('input-field'), 'ndasdas2.com')
    expect(screen.getByTestId('input-error').hidden).toBeFalsy()
  })

  it('should not show an error with email correct', () => {
    const email = 'anything@gmail.com'
    userEvent.type(screen.getByTestId('input-field'), email)

    expect(screen.getByTestId('input-error').hidden).toBeTruthy()
  })
})
